export class Mail {
  constructor(
      private _type: string, 
      private _email: string
  ){}
  get type(): string {
    return this._type;
  }
  set type(type: string) {
    this._type = type;
  }
  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }
}
