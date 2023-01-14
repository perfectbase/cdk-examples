# About the template

This template was initialized with `npx cdk init app --language typescript`, and then modified to support multiple environments with ease.

You can check out the changes that were made in this [commit](https://github.com/perfectbase/cdk-examples/commit/02ff1e2785bb1dfaa057c1cee73dc94488f32306).

## Setup

#### Install dependencies

```bash
npm install
```

#### Create stage configuration

```typescript
// lib/config/CdkConfig-dev.ts
import type Config from "./types";

const cdkConfig: Config = {
  stage: "dev",
};

export default cdkConfig;
```

#### Bootstrap the environment

```bash
npm run cdk:dev bootstrap
```

## Useful commands

- `npm run deploy:dev cdk-dev-Example` deploy this stack
- `npm run cdk:dev diff cdk-dev-Example` compare deployed stack with current state
- `npm run cdk:dev destroy cdk-dev-Example` destroy this stack
- `npm run cdk:dev synth` emits the synthesized CloudFormation template
