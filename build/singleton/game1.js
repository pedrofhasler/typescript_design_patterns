"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leaderboard_1 = __importDefault(require("./leaderboard"));
var Game1 = /** @class */ (function () {
    function Game1() {
        this.leaderboard = new leaderboard_1.default();
    }
    Game1.prototype.addWinner = function (position, name) {
        this.leaderboard.addWinner(position, name);
    };
    return Game1;
}());
exports.Game1 = Game1;
