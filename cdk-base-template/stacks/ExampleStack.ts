import * as cdk from "aws-cdk-lib";
import { SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
import type { Construct } from "constructs";
import type Config from "../lib/config/types";

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: Config) {
    super(scope, id, props);

    new Vpc(this, `Vpc`, {
      subnetConfiguration: [
        {
          name: "Public",
          subnetType: SubnetType.PUBLIC,
          cidrMask: 24,
        },
      ],
    });
  }
}
