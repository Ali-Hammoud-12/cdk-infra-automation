import { Duration, Stack, StackProps } from 'aws-cdk-lib/core';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

// the class constructors of both CdkWorkshopStack and lambda.Function (and many other classes in the CDK) have the signature (scope, id, props)

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hello = new Function(this, 'HelloHandler', {
      runtime: Runtime.NODEJS_22_X,
      handler: "hello.handler",
      code: Code.fromAsset("functions/hello"),
    });
  }
}
