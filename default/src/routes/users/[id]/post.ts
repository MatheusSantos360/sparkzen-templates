import { Middleware, T, type Handler } from "sparkzen";

export const schema = {
  params: T.Object({ id: T.Number() }),
  body: T.Object({
    name: T.String(),
    nick: T.Optional(T.String()),
  }),
  response: {
    200: T.Object({ ok: T.Boolean() }),
  },
};

export const middlewares: Middleware<typeof schema> = [(request, _reply, done) => {
  request.body
  console.log("Middleware executed");
  done();
}, (_request, _reply, done) => {
  console.log("Second middleware executed");
  done();
}]

const handler: Handler<typeof schema> = async (request, reply) => {
  const { id } = request.params;
  const { name, nick } = request.body;

  return reply.status(200).send({ ok: true });
};

export default handler;
