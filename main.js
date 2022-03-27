"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var address_1 = require("./address");
var email_1 = require("./email");
var phone_1 = require("./phone");
var agenda = [];
function Agenda() {
    var personOne = new person_1.Person('Laura', 'Herrero Poza', 29, '45110653Z', '31/3/1992', 'Orange', 'Mujer', [new address_1.Address('Don Felipe', 13, 1, 'A', 28004, 'Madrid', 'Madrid')], [new email_1.Mail('Personal', 'lauraherrero36@gmail.com')], [new phone_1.Phone('Personal', 680495887)], 'Nada que añadir');
    var personTwo = new person_1.Person('Marcos ', 'Casado Guezou', 27, '32245670E', '13/12/1994', 'Blanco', 'Hombre', [new address_1.Address('Calle Don Felipe', 13, 1, 'A', 28004, 'Madrid', 'Madrid')], [new email_1.Mail('Personal', 'marco.guezou@gmail.com')], [new phone_1.Phone('Personal', 916780555)], 'El teléfono es fijo');
    var personThree = new person_1.Person('Jose', 'Herrero Poza', 31, '45245670E', '1/4/1991', 'Verde', 'Hombre', [new address_1.Address('Ramón y Cajal', 7, 2, 'B', 28004, 'Getafe', 'Madrid')], [new email_1.Mail('Personal', 'herrero000@gmail.com')], [new phone_1.Phone('Personal', 641341648)], 'Nada que añair');
    agenda.push(personOne);
    agenda.push(personTwo);
    agenda.push(personThree);
    changeData(agenda);
    return agenda;
}
function changeData(agenda) {
    var newAgenda = agenda;
    var dni = '45110653Z';
    var newAddress = new address_1.Address('Calle Perseo', 20, 2, 'C', 28007, 'Madrid', 'Madrid');
    var newPhone = new phone_1.Phone('Personal', 693221645);
    var newMail = new email_1.Mail('Trabajo', 'lherrero@nextdigital.es');
    newAgenda.map(function (person) {
        if (person.dni === dni) {
            person.setAddress(newAddress);
            person.setMail(newMail);
            person.setPhone(newPhone);
        }
        else {
        }
    });
    return agenda = newAgenda;
}
function showAgenda(agenda) {
    Agenda();
    agenda.forEach(function (person) { console.log(person.showPersonInfo()); });
}
showAgenda(agenda);
