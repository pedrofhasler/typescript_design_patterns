"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Adapter Example Use Case
var cube_a_1 = __importDefault(require("./cube-a"));
var cube_b_adapter_1 = __importDefault(require("./cube-b-adapter"));
var totalCubes = 5;
var counter = 0;
var manufactureCube = function () {
    // produz 5 cubos para qual fornecedor conseguir manufaturar primeiro
    var width = Math.floor(Math.random() * 10) + 1;
    var height = Math.floor(Math.random() * 10) + 1;
    var depth = Math.floor(Math.random() * 10) + 1;
    var cube = new cube_a_1.default();
    var success = cube.manufacture(width, height, depth);
    if (success) {
        counter = counter + 1;
    }
    else {
        // tentando outra manufaturadora
        console.log('Company A was busy, so trying company B');
        cube = new cube_b_adapter_1.default();
        success = cube.manufacture(width, height, depth);
        if (success) {
            counter = counter + 1;
        }
        else {
            console.log('Company B was busy, so trying company A');
        }
    }
};
// Espera um tempo antes de tentar manufaturar outro cubo
var interval = setInterval(function () {
    manufactureCube();
    if (counter >= totalCubes) {
        clearInterval(interval);
        console.log(totalCubes + " cubes have been manufactured");
    }
}, 1000);
