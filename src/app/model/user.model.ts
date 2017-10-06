export class User {
    id: string;
    username: string;
    password: string;
    sheltername: string;
    direction:string;
    number: number;
    
  
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
  }