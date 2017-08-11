define(["require", "exports", "./test-plugin-configuration"], function (require, exports, test_plugin_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfig, callback) {
        var config = new test_plugin_configuration_1.TestPluginConfiguration();
        if (callback instanceof Function) {
            callback(config);
        }
        config.apply(frameworkConfig.container);
    }
    exports.configure = configure;
});

//# sourceMappingURL=test-plugin.js.map
