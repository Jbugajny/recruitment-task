const { BasePage } = require('kakunin');

class HomePage extends BasePage {
  constructor() {
    super();

    this.url = '/home';

    // for add tweet feature
    this.tweetTextArea = $('div[data-testid*="tweetTextarea"]');
    this.tweetButton = $('div[data-testid="tweetButtonInline"]');
    this.tweetExample = $('div[data-testid="tweet"]');

    // for follow feature
    this.exploreTab = $('a[data-testid*="Explore_Link"]');
    this.netguruLink = $('a[href="/netguru"]');

    // for delete tweet feature
    this.tweetOptions = $('div[data-testid*="caret"]');
    this.confirmDeleteTweet = $('div[data-testid="confirmationSheetConfirm"]');
    this.deleteTweet = $$('div[aria-haspopup="false"]').get(0);
  }
}

module.exports = HomePage;
