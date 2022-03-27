export class Address{
  constructor(
    private _street: string,
    private _number: number,
    private _floor: number,
    private _letter: string,
    private _postalcode: number,
    private _city: string,
    private _province: string
  ){}

  get street(): string{
    return this._street;
  }
  set street(street: string){
    this._street = street;
  }
  get number(): number{
    return this._number;
  }
  set number(number: number){
    this._number = number;
  }
  get floor(): number{
    return this._floor;
  }
  set floor(floor: number){
    this._floor = floor;
  }
  get letter(): string{
    return this._letter;
  }
  set letter(letter: string){
    this._letter = letter;
  }
  get postalcode(): number{
    return this._postalcode;
  }
  set postalcode(postalcode: number){
    this._postalcode = postalcode;
  }
  get city(): string{
    return this._city;
  }
  set city(city: string){
    this._city = city;
  }
  get province(): string{
    return this._province;
  }
  set province(province: string){
    this._province = province;
  }

  showAddress(): string{
    let address: string =`${this._street}, ${this._number} ${this._floor}º${this._letter} ${this._postalcode} ${this._city} (${this._province})`;
    return address;
  }
}
