define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbstractBaseService = (function () {
        function AbstractBaseService() {
        }
        AbstractBaseService.prototype.doServiceThings = function () {
            throw new Error('abstract services don\'t do things');
        };
        return AbstractBaseService;
    }());
    exports.AbstractBaseService = AbstractBaseService;
});

//# sourceMappingURL=base-service.js.map
