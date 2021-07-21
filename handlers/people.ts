import { APIGatewayProxyEvent } from "aws-lambda";

async function handler(event: APIGatewayProxyEvent) {
  const name = event.pathParameters?.name ?? "Roger";
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${name}!`
      },
    ),
  };
}

export { handler }
    