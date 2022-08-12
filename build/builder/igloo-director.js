"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var house_builder_1 = __importDefault(require("./house-builder"));
var IglooDirector = /** @class */ (function () {
    function IglooDirector() {
    }
    IglooDirector.construct = function () {
        //Note que nessa classe, omitimos o set_number_of windows
        //porque normalmente igloos não tem janelas
        return new house_builder_1.default()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    };
    return IglooDirector;
}());
exports.default = IglooDirector;
