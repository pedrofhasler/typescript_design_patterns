"use strict";
// An ATM Dispenser that dispenses denominations of notes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var atm_dispenser_chain_1 = __importDefault(require("./atm-dispenser-chain"));
var ATM = new atm_dispenser_chain_1.default();
console.log('Enter amount to withdrawal : ');
process.stdin.on('data', function (data) {
    if (parseInt(data)) {
        var amount = parseInt(data);
        if (amount < 10 || amount % 10 != 0) {
            console.log('Amount should be positive and in multiple of 10s.');
        }
        else {
            // process the request
            ATM.chain1.handle(amount);
            console.log('Now go spoil yourself');
            process.exit();
        }
    }
    else {
        console.log('Please enter a number.');
    }
});
