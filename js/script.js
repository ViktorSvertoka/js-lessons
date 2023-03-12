class Admin {
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    this.reversePassword = this.#password.split('').reverse().join('');
  }

  get name() {
    return this.#name;
  }

  //* Розшифровуємо пароль
  get password() {
    return this.reversePassword;
  }

  //* Зашифровуємо пароль
  set password(newPassword) {
    this.#password = newPassword.split('').reverse().join('');
  }

  checkPassword(newPassword) {
    if (this.reversePassword === newPassword) {
      console.log('Check is valid');
    } else {
      console.log('You are a stranger');
    }
  }

  changePassword(oldPassword, newPassword) {
    if (this.reversePassword === oldPassword) {
      this.#password = newPassword.split('').reverse().join('');
    } else {
      console.log('Your old password is wrong!');
    }
  }
}

const mango = new Admin('Mango', 'sdvsjdnvskld');
console.log(mango);
console.log(mango.name);

console.log(mango.password);
console.log(mango.checkPassword('sdvsjdnvskld'));
