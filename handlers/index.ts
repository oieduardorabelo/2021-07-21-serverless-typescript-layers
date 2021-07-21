import { APIGatewayProxyEvent } from "aws-lambda";
import { sum } from "/opt/shared/sum";
import * as middy from "/opt/nodejs/@middy/core";

async function main(_event: APIGatewayProxyEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        sum: sum(1, 2)
      },
      null,
      2
    ),
  };
}

const handler = middy.default(main);

export { handler }
    