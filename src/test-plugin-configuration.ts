import { Container } from 'aurelia-dependency-injection';
import { AbstractBaseService } from './base-service';
import { StandardService } from './standard-service';

export class TestPluginConfiguration {
  private serviceType: { new (...args: any[]): AbstractBaseService } = StandardService;

  public customService(type: { new (...args: any[]): AbstractBaseService }) {
    this.serviceType = type;
  }

  /**
   * Applies the configuration.
   */
  public apply(container: Container) {
    const service = container.get(this.serviceType);
    container.registerInstance(AbstractBaseService, service);
  }
}