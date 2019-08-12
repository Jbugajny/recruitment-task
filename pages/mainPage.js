const { BasePage } = require('kakunin');

class MainPage extends BasePage {
  constructor() {
    super();

    this.url = '/';

      // for login feature
      this.loginInput = $('.email-input');
      this.passwordInput = $('input[type="password"]');
      this.loginConfirm = $('input[value="Zaloguj się"]');
  }
}

module.exports = MainPage;
