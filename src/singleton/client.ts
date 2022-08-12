// Exemplo de um Singleton Use Case

import { Game1 } from './game1';
import { Game2 } from './game2';
import { Game3 } from './game3';

// The Client
// A pesar de todos os jogos estarem instanciando o leaderboard, todos
// apontam para o mesmo objeto na memória, já que o leaderboard é um singleton.
const GAME1 = new Game1();
GAME1.addWinner(2, 'Amanda');

const GAME2 = new Game2();
GAME2.addWinner(3, 'Pedro');

const GAME3 = new Game3();
GAME3.addWinner(1, 'Devinho');

GAME1.leaderboard.print();
GAME2.leaderboard.print();
GAME3.leaderboard.print();
