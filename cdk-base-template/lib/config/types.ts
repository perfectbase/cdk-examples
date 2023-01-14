export default interface Config {
  /** environment name */
  stage: string;
  /**
   * The deployment target details
   * if not provided, the default account and region will be used
   */
  env?: {
    account: string;
    region: string;
  };
}
