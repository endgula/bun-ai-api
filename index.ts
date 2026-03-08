const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("Servidor bun-ai-api funcionando en la nueva instancia");
  }
});

console.log(`Servidor activo en ${server.url}:${server.port}`);