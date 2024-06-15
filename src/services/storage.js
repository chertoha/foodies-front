export class SessionStorage {
  #key;

  constructor(key) {
    this.#key = key;
  }

  set(value) {
    sessionStorage.setItem(this.#key, JSON.stringify(value));
  }

  get() {
    const result = sessionStorage.getItem(this.#key);
    return result ? JSON.parse(result) : null;
  }
}

export class LocalStorage {
  #key;

  constructor(key) {
    this.#key = key;
  }

  set(value) {
    localStorage.setItem(this.#key, JSON.stringify(value));
  }

  get() {
    const result = localStorage.getItem(this.#key);
    return result ? JSON.parse(result) : null;
  }
}
