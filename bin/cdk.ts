#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkStack } from '../lib/cdk-stack';

// App (the whole CDK project)
//  └── Stack (a CloudFormation deployment unit)
//        └── Function (an AWS resource inside that stack)

const app = new cdk.App();
new CdkStack(app, 'CdkStack');
