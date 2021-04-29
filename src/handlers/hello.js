async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "This is a serverless template. Hello world." }),
  };
}

export const handler = hello;


