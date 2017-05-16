import { Container } from 'aurelia-dependency-injection';
import { AbstractBaseService } from './example/base-service';
export declare class TestPluginConfiguration {
    private serviceType;
    customService(type: {
        new (...args: any[]): AbstractBaseService;
    }): void;
    /**
     * Applies the configuration.
     */
    apply(container: Container): void;
}
