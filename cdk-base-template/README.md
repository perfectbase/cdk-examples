# About the template

This template was initialized with `npx cdk init app --language typescript`, and then modified to support multiple environments with ease.

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
