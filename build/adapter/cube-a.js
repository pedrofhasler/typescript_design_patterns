"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubeA = /** @class */ (function () {
    function CubeA() {
    }
    CubeA.prototype.manufacture = function (width, height, depth) {
        // Se não estiver ocupado, então manufature um cubo com essas dimensões
        var now = Date.now();
        if (now > CubeA.last_time + 1500) {
            console.log("Company A built Cube with dimensions " + width + "x" + height + "x" + depth);
            CubeA.last_time = now;
            return true;
        }
        return false; // busy
    };
    CubeA.last_time = Date.now();
    return CubeA;
}());
exports.default = CubeA;
