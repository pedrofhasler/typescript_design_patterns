"use strict";
// Uma Leaderboard Singleton Class
Object.defineProperty(exports, "__esModule", { value: true });
var Leaderboard = /** @class */ (function () {
    function Leaderboard() {
        this.table = {};
        if (Leaderboard.instance) {
            return Leaderboard.instance;
        }
        Leaderboard.instance = this;
    }
    Leaderboard.prototype.addWinner = function (position, name) {
        this.table[position] = name;
    };
    Leaderboard.prototype.print = function () {
        console.log('-----------Leaderboard-----------');
        for (var key in this.table) {
            console.log("|\t" + key + "\t|\t" + this.table[key] + "\t|");
        }
        console.log();
    };
    return Leaderboard;
}());
exports.default = Leaderboard;
