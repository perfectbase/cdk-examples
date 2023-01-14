import type Config from "./types";

/* eslint-disable @typescript-eslint/no-var-requires */
const config: Config = require(`./CdkConfig-${process.env.CDK_ENV}`).default;

if (!config) {
  throw new Error(`No config found for environment: ${process.env.CDK_ENV}`);
}

export default config;
