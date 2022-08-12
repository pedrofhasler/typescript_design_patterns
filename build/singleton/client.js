"use strict";
// Exemplo de um Singleton Use Case
Object.defineProperty(exports, "__esModule", { value: true });
var game1_1 = require("./game1");
var game2_1 = require("./game2");
var game3_1 = require("./game3");
// The Client
// A pesar de todos os jogos estarem instanciando o leaderboard, todos
// apontam para o mesmo objeto na memória, já que o leaderboard é um singleton.
var GAME1 = new game1_1.Game1();
GAME1.addWinner(2, 'Amanda');
var GAME2 = new game2_1.Game2();
GAME2.addWinner(3, 'Pedro');
var GAME3 = new game3_1.Game3();
GAME3.addWinner(1, 'Devinho');
GAME1.leaderboard.print();
GAME2.leaderboard.print();
GAME3.leaderboard.print();
