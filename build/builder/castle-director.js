"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var house_builder_1 = __importDefault(require("./house-builder"));
var CastleDirector = /** @class */ (function () {
    function CastleDirector() {
    }
    CastleDirector.construct = function () {
        return new house_builder_1.default()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    };
    return CastleDirector;
}());
exports.default = CastleDirector;
