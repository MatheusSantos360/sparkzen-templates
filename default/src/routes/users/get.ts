import type { Handler } from "sparkzen";

const handler: Handler = async (request, reply) => {
  // Do whatever you want!
  return reply.status(200).send({ message: "Hello, SparkZen!" });
};

export default handler; // Don't forget to export the handler as default!
