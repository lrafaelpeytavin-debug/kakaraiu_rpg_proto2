import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname);
const port = Number(process.argv[2] || 4182);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp3": "audio/mpeg",
};

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  let target = join(root, cleanPath);

  if (!target.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(target) || statSync(target).isDirectory()) {
    target = join(root, "index.html");
  }

  response.writeHead(200, {
    "Content-Type": types[extname(target).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(target).pipe(response);
});

server.listen(port, "127.0.0.1");
