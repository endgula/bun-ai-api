const server = Bun.serve({
  hostname: "0.0.0.0", // ESTA LÍNEA ES OBLIGATORIA PARA AWS
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    return new Response("Servidor bun-ai-api funcionando en la nueva instancia");
  },
});

console.log(`Servidor activo en http://${server.hostname}:${server.port}`);