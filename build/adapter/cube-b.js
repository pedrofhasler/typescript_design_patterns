"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CubeB = /** @class */ (function () {
    function CubeB() {
    }
    CubeB.prototype.create = function (top_left_front, bottom_right_back) {
        // Se não estiver ocupado, então manufature um cubo com essas dimensões
        var now = Date.now();
        if (now > CubeB.last_time + 3000) {
            console.log("Company B built Cube with coords [" + top_left_front[0] + "," + top_left_front[1] + "," + top_left_front[2] + "],[" + bottom_right_back[0] + "," + bottom_right_back[1] + "," + bottom_right_back[2] + "]");
            CubeB.last_time = now;
            return true;
        }
        else {
            return false; // busy
        }
    };
    CubeB.last_time = Date.now();
    return CubeB;
}());
exports.default = CubeB;
