export default class ErrorRepository {
    constructor() {
      this.errors = new Map([
        [400, 'Bad request'],
        [401, 'Unauthorized'],
        [403, 'Forbidden'],
        [404, 'Not Found'],
      ]);
    }
  
    translate(code) {
      if (!this.errors.has(code)) {
        throw new Error('Unknown error');
      } else return this.errors.get(code);
    }
  }
