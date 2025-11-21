import { Middleware, T, type Handler } from "sparkzen";

// Yes, POST api/users/:id/ route here!

export const schema = {
  params: T.Object({ id: T.Number() }),
  body: T.Object({
    name: T.String(),
    nick: T.Optional(T.String()),
  }),
  response: {
    200: T.Object({ ok: T.Boolean() }),
  },
}; // Define schema for request and response

export const middlewares: Middleware<typeof schema> = [(request, _reply, done) => {
  request.body
  console.log("Middleware executed");
  done();
}, (_request, _reply, done) => {
  console.log("Second middleware executed");
  done();
}] // You can define middlewares for this route!

const handler: Handler<typeof schema> = async (request, reply) => { // You can pass the schema type to Handler!
  const { id } = request.params;        // id is of type number
  const { name, nick } = request.body;  // name is string, nick is string | undefined  --> Schema validation!

  return reply.status(200).send({ ok: true }); // Response matches the schema
};

export default handler; // Don't forget to export the handler as default (Again)!

// You can export any other options too (Fastify RouteOptions type).