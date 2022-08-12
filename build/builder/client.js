"use strict";
// House Builder Example Code
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var igloo_director_1 = __importDefault(require("./igloo-director"));
var castle_director_1 = __importDefault(require("./castle-director"));
var houseboat_director_1 = __importDefault(require("./houseboat-director"));
var IGLOO = igloo_director_1.default.construct();
var CASTLE = castle_director_1.default.construct();
var HOUSEBOAT = houseboat_director_1.default.construct();
console.log(IGLOO.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
