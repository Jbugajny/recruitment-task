'use strict';

const {matchers, variableStore, defineSupportCode} = require('kakunin');

defineSupportCode(({Then, When}) => {
    Then(/^my matcher "([^"]*)" matches "([^"]*)"$/, function (matcher, text) {
        return expect(matchers.match(variableStore.replaceTextVariables(text), matcher)).to.be.true;
    });

    When(/^I hover over first option/, function () {
       return browser.actions().mouseMove($$('div[data-testid="TypeaheadUser"]').get(0)).perform();
    });
});
