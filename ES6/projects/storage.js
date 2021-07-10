export class Storage {
  constructor(key) {
    this.key = key;
  }

  set(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }
}
