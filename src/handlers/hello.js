async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Ivyrson's first serverless app" }),
  };
}

export const handler = hello;


