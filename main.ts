import { Person } from './person';
import { Address } from './address';
import { Mail } from './email';
import { Phone } from './phone';

let agenda: Array<Person> = [];

function Agenda(): Array<Person> {

  const personOne: Person = new Person(
    'Laura',
    'Herrero Poza',
    29,
    '45110653Z',
    '31/3/1992',
    'Orange',
    'Mujer',
    [new Address('Don Felipe', 13, 1, 'A', 28004, 'Madrid', 'Madrid')],
    [new Mail('Personal', 'lauraherrero36@gmail.com')],
    [new Phone('Personal', 680495887)],
    'Nada que añadir'
  );

  const personTwo: Person = new Person(
    'Marcos ',
    'Casado Guezou',
    27,
    '32245670E',
    '13/12/1994',
    'Blanco',
    'Hombre',
    [new Address('Calle Don Felipe', 13, 1, 'A', 28004, 'Madrid', 'Madrid')],
    [new Mail('Personal', 'marco.guezou@gmail.com')],
    [new Phone('Personal', 916780555)],
    'El teléfono es fijo'
  );

  const personThree: Person = new Person(
    'Jose',
    'Herrero Poza',
    31,
    '45245670E',
    '1/4/1991',
    'Verde',
    'Hombre',
    [new Address('Ramón y Cajal', 7, 2, 'B', 28004, 'Getafe', 'Madrid')],
    [new Mail('Personal', 'herrero000@gmail.com')],
    [new Phone('Personal', 641341648)],
    'Nada que añair'
  );

  agenda.push(personOne);
  agenda.push(personTwo);
  agenda.push(personThree);
  
  changeData(agenda)
  return agenda
  
}


function changeData(agenda): Array<Person>{

  let newAgenda: Array<Person> = agenda;
  const dni: string = '45110653Z'
  const newAddress: Address = new Address(
    'Calle Perseo', 20, 2, 'C', 28007, 'Madrid', 'Madrid'
  )
  const newPhone: Phone = new Phone(
    'Personal', 693221645
  )
  const newMail: Mail = new Mail(
    'Trabajo', 'lherrero@nextdigital.es'
  )
  newAgenda.map(
    person => {
      if(person.dni === dni){
        person.setAddress(newAddress);
        person.setMail(newMail);
        person.setPhone(newPhone);
      }else{

      }
    }
  )
  return agenda = newAgenda
}

function showAgenda(agenda: Array<Person>): void {
  Agenda()
  agenda.forEach(
    person => { console.log(person.showPersonInfo())}
  )
}

showAgenda(agenda)
