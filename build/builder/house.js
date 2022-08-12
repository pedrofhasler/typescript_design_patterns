"use strict";
// The Product
Object.defineProperty(exports, "__esModule", { value: true });
var House = /** @class */ (function () {
    function House() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = '';
        this.buildingType = '';
    }
    House.prototype.construction = function () {
        return "This is a " + this.wallMaterial + " " + this.buildingType + " with " + this.doors + " door(s) and " + this.windows + " window(s).";
    };
    return House;
}());
exports.default = House;
