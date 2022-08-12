"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cube_b_1 = __importDefault(require("./cube-b"));
var CubeBAdapter = /** @class */ (function () {
    function CubeBAdapter() {
        this.cube = new cube_b_1.default();
    }
    CubeBAdapter.prototype.manufacture = function (width, height, depth) {
        var success = this.cube.create([0 - width / 2, 0 - height / 2, 0 - depth / 2], [0 + width / 2, 0 + height / 2, 0 + depth / 2]);
        return success;
    };
    return CubeBAdapter;
}());
exports.default = CubeBAdapter;
