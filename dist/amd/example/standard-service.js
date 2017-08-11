var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./base-service"], function (require, exports, base_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StandardService = (function (_super) {
        __extends(StandardService, _super);
        function StandardService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StandardService.prototype.doServiceThings = function () {
            console.log('this service does nothing special');
        };
        return StandardService;
    }(base_service_1.AbstractBaseService));
    exports.StandardService = StandardService;
});

//# sourceMappingURL=standard-service.js.map
