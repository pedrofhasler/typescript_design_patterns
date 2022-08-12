"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var house_builder_1 = __importDefault(require("./house-builder"));
var HouseBoatDirector = /** @class */ (function () {
    function HouseBoatDirector() {
    }
    HouseBoatDirector.construct = function () {
        return new house_builder_1.default()
            .setBuildingType('House Boat')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult();
    };
    return HouseBoatDirector;
}());
exports.default = HouseBoatDirector;
