"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_name, _lastName, _age, _dni, _birthday, _color, _gender, _address, _mail, _phone, _note) {
        this._name = _name;
        this._lastName = _lastName;
        this._age = _age;
        this._dni = _dni;
        this._birthday = _birthday;
        this._color = _color;
        this._gender = _gender;
        this._address = _address;
        this._mail = _mail;
        this._phone = _phone;
        this._note = _note;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (birthday) {
            this._birthday = birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "mail", {
        get: function () {
            return this._mail;
        },
        set: function (mail) {
            this._mail = mail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (phone) {
            this._phone = phone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (note) {
            this._note = note;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.addAddress = function (newAddress) {
        this._address.push(newAddress);
    };
    Person.prototype.addMail = function (newMail) {
        this._mail.push(newMail);
    };
    Person.prototype.addPhone = function (newPhone) {
        this._phone.push(newPhone);
    };
    Person.prototype.setAddress = function (newAddress) {
        this._address = [newAddress];
    };
    Person.prototype.setMail = function (newMail) {
        this._mail = [newMail];
    };
    Person.prototype.setPhone = function (newPhone) {
        this._phone = [newPhone];
    };
    Person.prototype.showAllAddresses = function () {
        var allAddresses = '';
        for (var i = 0; i < this._address.length; i++) {
            allAddresses = "".concat(allAddresses, " ").concat(this._address[i].showAddress());
        }
        return allAddresses;
    };
    Person.prototype.showAllPhones = function () {
        var allPhones = '';
        for (var i = 0; i < this._phone.length; i++) {
            allPhones = "".concat(allPhones, " ").concat(this._phone[i].phoneNumber, " (").concat(this._phone[i].type, ")");
        }
        return allPhones;
    };
    Person.prototype.showAllMails = function () {
        var allEmail = '';
        for (var i = 0; i < this._mail.length; i++) {
            allEmail = "".concat(allEmail, " ").concat(this._mail[i].email, " (").concat(this._mail[i].type, ")");
        }
        return allEmail;
    };
    Person.prototype.showPersonInfo = function () {
        var personInfo = "Informaci\u00F3n personal de ".concat(this._name, " ").concat(this._lastName, ":\n    Nombre: ").concat(this._name, "\n    Apellidos: ").concat(this._lastName, "\n    Edad: ").concat(this._age, "\n    DNI: ").concat(this._dni, "\n    Fecha de Cumplea\u00F1os: ").concat(this._birthday, "\n    Color Favorito: ").concat(this._color, "\n    G\u00E9nero: ").concat(this._gender, "\n    Direcci\u00F3n: ").concat(this.showAllAddresses(), "\n    Email: ").concat(this.showAllMails(), "\n    Tel\u00E9fono: ").concat(this.showAllPhones(), "\n    Notas: ").concat(this._note);
        return personInfo;
    };
    return Person;
}());
exports.Person = Person;
