"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataController = /** @class */ (function () {
    function DataController() {
        this.observers = new Set();
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    DataController.prototype.subscribe = function (observer) {
        this.observers.add(observer);
    };
    DataController.prototype.unsubscribe = function (observer) {
        this.observers.delete(observer);
    };
    DataController.prototype.notify = function (data) {
        this.observers.forEach(function (observer) {
            observer.notify(data);
        });
    };
    return DataController;
}());
exports.DataController = DataController;
