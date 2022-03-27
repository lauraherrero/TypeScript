import { Address } from './address';
import { Phone } from './phone';
import { Mail } from './email';

export class Person {
  constructor(
    private _name: string,
    private _lastName: string,
    private _age: number,
    private _dni: string,
    private _birthday: string,
    private _color: string,
    private _gender: string,
    private _address: Array<Address>,
    private _mail: Array<Mail>,
    private _phone: Array<Phone>,
    private _note: string
  ){}

  get name(): string{
    return this._name;
  }
  set name(name: string){
    this._name = name;
  }
  get lastName(): string{
    return this._lastName;
  }
  set lastName(lastName: string){
    this._lastName = lastName;
  }
  get age(): number{
    return this._age;
  }
  set age(age: number){
    this._age = age;
  }
  get dni(): string{
    return this._dni;
  }
  set dni(dni: string){
    this._dni = dni;
  }
  get birthday(): string{
    return this._birthday;
  }
  set birthday(birthday: string){
    this._birthday = birthday;
  }
  get color(): string{
    return this._color;
  }
  set color(color: string){
    this._color = color;
  }
  get gender(): string{
    return this._gender;
  }
  set gender(gender: string) {
    this._gender = gender;
  }
  get address(): Array<Address>{
    return this._address;
  }
  set address(address: Array<Address>){
    this._address = address;
  }
  get mail(): Array<Mail>{
    return this._mail;
  }
  set mail(mail: Array<Mail>){
    this._mail = mail;
  }
  get phone(): Array<Phone>{
    return this._phone;
  }
  set phone(phone: Array<Phone>){
    this._phone = phone;
  }
  get note(): string{
    return this._note;
  }
  set note(note: string){
    this._note = note;
  }

  addAddress(newAddress: Address): void{
    this._address.push(newAddress);
  }
  addMail(newMail: Mail): void{
    this._mail.push(newMail);
  }
  addPhone(newPhone: Phone): void{
    this._phone.push(newPhone);
  }

  setAddress(newAddress: Address): void{
    this._address = [newAddress];
  }
  setMail(newMail: Mail): void{
    this._mail = [newMail];
  }
  setPhone(newPhone: Phone): void{
    this._phone = [newPhone];
  }


  showAllAddresses(): string{
    let allAddresses: string = '';
    for (let i = 0; i < this._address.length; i++) {
      allAddresses = `${allAddresses} ${this._address[
        i
      ].showAddress()}`;
    }
    return allAddresses;
  }
  showAllPhones(): string{
    let allPhones: string = '';
    for (let i = 0; i < this._phone.length; i++) {
      allPhones = `${allPhones} ${
        this._phone[i].phoneNumber
      } (${this._phone[i].type})`;
    }
    return allPhones;
  }
  showAllMails(): string{
    let allEmail: string = '';
    for (let i = 0; i < this._mail.length; i++) {
      allEmail = `${allEmail} ${this._mail[i].email} (${
        this._mail[i].type
      })`;
    }
    return allEmail;
  }
 
  showPersonInfo(): string {
    let personInfo: string = `Información personal de ${this._name} ${
      this._lastName
    }:
    Nombre: ${this._name}
    Apellidos: ${this._lastName}
    Edad: ${this._age}
    DNI: ${this._dni}
    Fecha de Cumpleaños: ${this._birthday}
    Color Favorito: ${this._color}
    Género: ${this._gender}
    Dirección: ${this.showAllAddresses()}
    Email: ${this.showAllMails()}
    Teléfono: ${this.showAllPhones()}
    Notas: ${this._note}`;
    return personInfo;
  }
}
