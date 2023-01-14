#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ExampleStack } from "../stacks/ExampleStack";
import config from "../lib/config";

console.log("Config:", config);

const app = new cdk.App();
new ExampleStack(app, `cdk-${config.stage}-Example`, config);
