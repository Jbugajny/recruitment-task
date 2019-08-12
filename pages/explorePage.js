const { BasePage } = require('kakunin');

class ExplorePage extends BasePage {
  constructor() {
    super();

    this.url = '/explore';

    // on search page
    this.searchTextArea = $('input[data-testid="SearchBox_Search_Input"]');
    this.searchSuggestion = $$('div[data-testid="TypeaheadUser"]').get(0);
  }
}

module.exports = ExplorePage;
