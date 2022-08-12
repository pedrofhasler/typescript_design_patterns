"use strict";
// A dispenser of R$ 50 notes
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _successor;
Object.defineProperty(exports, "__esModule", { value: true });
var Dispenser50 = /** @class */ (function () {
    function Dispenser50() {
        // Dispenses R$ 10s if applicable, otherwise continues to next successor
        _successor.set(this, void 0);
    }
    Dispenser50.prototype.nextSuccessor = function (successor) {
        // Set the next successor
        __classPrivateFieldSet(this, _successor, successor);
    };
    Dispenser50.prototype.handle = function (amount) {
        // Handle the dispensing of notes"
        if (amount >= 50) {
            var num = Math.floor(amount / 50);
            var remainder = amount % 50;
            console.log("Dispensing " + num + " R$ 50 note");
            if (remainder !== 0) {
                __classPrivateFieldGet(this, _successor).handle(remainder);
            }
        }
        else {
            __classPrivateFieldGet(this, _successor).handle(amount);
        }
    };
    return Dispenser50;
}());
exports.default = Dispenser50;
_successor = new WeakMap();
