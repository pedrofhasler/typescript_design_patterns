"use strict";
// The ATM Dispenser Chain
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dispenser10_1 = __importDefault(require("./dispenser10"));
var dispenser20_1 = __importDefault(require("./dispenser20"));
var dispenser50_1 = __importDefault(require("./dispenser50"));
var ATMDispenserChain = /** @class */ (function () {
    function ATMDispenserChain() {
        // initializing the successors chain
        this.chain1 = new dispenser50_1.default();
        this.chain2 = new dispenser20_1.default();
        this.chain3 = new dispenser10_1.default();
        // Setting a default successor chain that will process the 50s first,
        // the 20s second and the 10s last.The successor chain will be
        // recalculated dynamically at runtime.
        this.chain1.nextSuccessor(this.chain2);
        this.chain2.nextSuccessor(this.chain3);
    }
    return ATMDispenserChain;
}());
exports.default = ATMDispenserChain;
