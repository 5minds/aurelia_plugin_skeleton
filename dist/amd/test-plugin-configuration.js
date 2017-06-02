define(["require", "exports", "./example/base-service", "./example/standard-service"], function (require, exports, base_service_1, standard_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestPluginConfiguration = (function () {
        function TestPluginConfiguration() {
            this.serviceType = standard_service_1.StandardService;
        }
        TestPluginConfiguration.prototype.customService = function (type) {
            this.serviceType = type;
        };
        /**
         * Applies the configuration.
         */
        TestPluginConfiguration.prototype.apply = function (container) {
            var service = container.get(this.serviceType);
            container.registerInstance(base_service_1.AbstractBaseService, service);
        };
        return TestPluginConfiguration;
    }());
    exports.TestPluginConfiguration = TestPluginConfiguration;
});
