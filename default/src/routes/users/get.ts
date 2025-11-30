import type { Handler } from "sparkzen";

const handler: Handler = async (request, reply) => {
  return reply.status(200).send({ message: "Hello, SparkZen!" });
};

export default handler;
