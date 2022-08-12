"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leaderboard_1 = __importDefault(require("./leaderboard"));
var Game2 = /** @class */ (function () {
    function Game2() {
        this.leaderboard = new leaderboard_1.default();
    }
    Game2.prototype.addWinner = function (position, name) {
        this.leaderboard.addWinner(position, name);
    };
    return Game2;
}());
exports.Game2 = Game2;
