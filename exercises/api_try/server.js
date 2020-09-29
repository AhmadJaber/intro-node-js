const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

/**
 * this function is blocking, fix that
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = async (name) => {
  const assetPath = path.join(__dirname, "assets", name);
  const fileRead = await fs.readFile(assetPath, { encoding: "utf-8" });
  return fileRead;
};

const hostname = "127.0.0.1";
const port = 3000;

const router = {
  "/ GET": {
    asset: "index.html",
    mime: mime.getType("html"),
  },
  "/style.css GET": {
    asset: "style.css",
    mime: mime.getType("css"),
  },
};

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route, status) =>
  console.log(method, route, status);

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const route = url.parse(req.url).pathname;
  const match = router[`${route} ${method}`];
  console.log(match);

  if (!match) {
    res.writeHead(400);
    logRequest(method, route, 400);
    res.end();
    return;
  }

  res.writeHead(200, { "Content-Type": match.mime });
  res.write(await findAsset(match.asset));
  logRequest(method, route, 200);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});