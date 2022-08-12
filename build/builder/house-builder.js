"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var house_1 = __importDefault(require("./house"));
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
        this.house = new house_1.default();
    }
    HouseBuilder.prototype.setBuildingType = function (buildingType) {
        this.house.buildingType = buildingType;
        return this;
    };
    HouseBuilder.prototype.setWallMaterial = function (wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    };
    HouseBuilder.prototype.setNumberDoors = function (number) {
        this.house.doors = number;
        return this;
    };
    HouseBuilder.prototype.setNumberWindows = function (number) {
        this.house.windows = number;
        return this;
    };
    HouseBuilder.prototype.getResult = function () {
        return this.house;
    };
    return HouseBuilder;
}());
exports.default = HouseBuilder;
