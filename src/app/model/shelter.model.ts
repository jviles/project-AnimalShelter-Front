export class Shelter {
  id: string;
  name: string;
  direction: string;
  number: number;
  zipcode: number;
  

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}