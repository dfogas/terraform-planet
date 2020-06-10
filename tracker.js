"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tracker = /** @class */ (function () {
    function Tracker(upper, lower, step) {
        this.upper = upper;
        this.lower = lower;
        this.step = step;
    }
    Tracker.prototype.init = function (start) {
        this.value = start;
        this.normalize();
    };
    Tracker.prototype.up = function () {
        this.value += this.step;
        this.normalize();
    };
    Tracker.prototype.down = function () {
        this.value -= this.step;
        this.normalize();
    };
    Tracker.prototype.get = function () {
        return this.value;
    };
    Tracker.prototype.normalize = function () {
        if (this.value > this.upper) {
            this.value = this.upper;
        }
        if (this.value < this.lower) {
            this.value = this.lower;
        }
    };
    return Tracker;
}());
exports.Tracker = Tracker;
