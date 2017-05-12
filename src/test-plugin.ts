import { FrameworkConfiguration } from 'aurelia-framework';
import { TestPluginConfiguration } from './test-plugin-configuration';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: TestPluginConfiguration) => void): void {

  const config = new TestPluginConfiguration();

  if (callback instanceof Function) {
    callback(config);
  }
  
  config.apply(frameworkConfig.container);
}