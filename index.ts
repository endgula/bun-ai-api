const server = Bun.serve({
  hostname: "0.0.0.0",
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("API de Bun está funcionando correctamente");
  }
})

console.log(`Server is running on ${server.url}:${server.port}`);