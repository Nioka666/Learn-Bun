import chalk from "chalk";

// Definisikan objek konfigurasi untuk mapping URL ke handler
const routeConfig: any = {
  "/": () => new Response("Home page!"),
  "/blog": () => new Response("Blog!"),
};

const fetchHandler = (req: any) => {
  const url = new URL(req.url);
  const handler = routeConfig[url.pathname];
  if (handler) {
    return handler();
  } else {
    throw new Error("404!");
  }
};

const bunServer = Bun.serve({
  port: 3000,
  development: true,
  fetch: fetchHandler,
});

console.log(
  `server running on ${chalk.bold(`http://localhost:${bunServer.port}`)}`
);
