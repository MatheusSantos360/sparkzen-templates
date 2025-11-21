import sparkzen from "sparkzen";

async function spark() {
  try {
    const app = await sparkzen();
    await app.listen({ port: 3000 });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

spark();
