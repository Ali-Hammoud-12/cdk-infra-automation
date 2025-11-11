exports.handler = async function (event) {
  console.log('request:', JSON.stringify(event, undefined, 2))
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `This is the new cloudformation stack set with cdk-watch, CDK! You've hit ${event.path}\n`,
  }
}