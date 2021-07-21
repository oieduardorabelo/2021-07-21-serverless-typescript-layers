import { APIGatewayProxyEvent } from "aws-lambda";

async function handler(_event: APIGatewayProxyEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'About Serverless Layers!'
      },
      null,
      2
    ),
  };
}

export { handler }
    