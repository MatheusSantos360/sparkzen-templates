import { Middleware, T, type Handler } from "sparkzen";

export const schema = {
  params: T.Object({
    id: T.Number({
      description: "User ID",
      examples: [1],
    }),
  }),

  body: T.Object({
    name: T.String({ minLength: 2 }),
    nick: T.Optional(T.String()),
  }),

  response: {
    200: T.Object({
      ok: T.Boolean(),
      message: T.String(),
      received: T.Object({
        id: T.Number(),
        name: T.String(),
        nick: T.Optional(T.String()),
      }),
    }),
  },
};

export const middlewares: Middleware<typeof schema> = [
  (request, _reply, done) => {
    console.log("[SparkZen] Incoming request:", {
      params: request.params,
      body: request.body,
    });
    done();
  },

  (_request, _reply, done) => {
    console.log("[SparkZen] Second middleware executed");
    done();
  },
];

const handler: Handler<typeof schema> = async (request, reply) => {
  const { id } = request.params;
  const { name, nick } = request.body;

  return reply.status(200).send({
    ok: true,
    message: "User processed successfully",
    received: { id, name, nick },
  });
};

export default handler;
