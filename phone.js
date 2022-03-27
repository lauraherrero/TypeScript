"use strict";
exports.__esModule = true;
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(_type, _phoneNumber) {
        this._type = _type;
        this._phoneNumber = _phoneNumber;
    }
    Object.defineProperty(Phone.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (phoneNumber) {
            this._phoneNumber = phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.Phone = Phone;
