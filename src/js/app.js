export default class ErrorRepository {
  constructor() {
    this.arr = new Map([[1, 'Error № 1'], [2, 'Error № 2'], [3, 'Error № 3']]);
  }

  translate(code) {
    if (!this.arr.has(code)) throw new Error('Unknown error');
    return this.arr.get(code);
  }
}
