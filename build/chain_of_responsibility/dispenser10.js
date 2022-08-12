"use strict";
// A dispenser of £10 notes
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
var Dispenser10 = /** @class */ (function () {
    function Dispenser10() {
        // Dispenses R$ 10s if applicable, otherwise continues to next successor
        _successor.set(this, void 0);
    }
    Dispenser10.prototype.nextSuccessor = function (successor) {
        // Set the next successor
        __classPrivateFieldSet(this, _successor, successor);
    };
    Dispenser10.prototype.handle = function (amount) {
        // Handle the dispensing of notes"
        if (amount >= 10) {
            var num = Math.floor(amount / 10);
            var remainder = amount % 10;
            console.log("Dispensing " + num + " R$ 10 note");
            if (remainder !== 0) {
                __classPrivateFieldGet(this, _successor).handle(remainder);
            }
        }
        else {
            __classPrivateFieldGet(this, _successor).handle(amount);
        }
    };
    return Dispenser10;
}());
exports.default = Dispenser10;
_successor = new WeakMap();
