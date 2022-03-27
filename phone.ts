export class Phone{
  constructor(
      private _type: string, 
      private _phoneNumber: number
  ){}

  get type(): string{
    return this._type;
  }
  set type(type: string){
    this._type = type;
  }
  get phoneNumber(): number{
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber: number){
    this._phoneNumber = phoneNumber;
  }
}
