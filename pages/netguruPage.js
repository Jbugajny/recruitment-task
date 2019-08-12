const { BasePage } = require('kakunin');

class HomePage extends BasePage {
  constructor() {
    super();

    this.url = '/netguru';

    //netguru's twitter site
    this.followNetguru = $('div[data-testid*="-follow"]');
    this.unfollowNetguru = $('div[data-testid*="-unfollow"]');
    this.unfollowConfirm = $('div[data-testid*="confirmationSheetConfirm"]');
  }
}

module.exports = HomePage;
