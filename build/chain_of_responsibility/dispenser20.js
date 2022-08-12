"use strict";
// A dispenser of £20 notes
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
var Dispenser20 = /** @class */ (function () {
    function Dispenser20() {
        // Dispenses R$ 10s if applicable, otherwise continues to next successor
        _successor.set(this, void 0);
    }
    Dispenser20.prototype.nextSuccessor = function (successor) {
        // Set the next successor
        __classPrivateFieldSet(this, _successor, successor);
    };
    Dispenser20.prototype.handle = function (amount) {
        // Handle the dispensing of notes"
        if (amount >= 20) {
            var num = Math.floor(amount / 20);
            var remainder = amount % 20;
            console.log("Dispensing " + num + " R$ 20 note");
            if (remainder !== 0) {
                __classPrivateFieldGet(this, _successor).handle(remainder);
            }
        }
        else {
            __classPrivateFieldGet(this, _successor).handle(amount);
        }
    };
    return Dispenser20;
}());
exports.default = Dispenser20;
_successor = new WeakMap();
