export class Shelter {
  id: string;
  sheltername: string;
  direction: string;
  number: number;
  

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
// Aqui tindriem que ficar els animals