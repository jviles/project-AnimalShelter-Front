export class User {
    id: string;
    username: string;
    password: string;
  
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
  }