Feature: User logs in and posts a tweet

    @criticalPath @postTweet
    Scenario: User logs in and posts a tweet
        When I visit the "mainPage" page
        And I fill the "loginInput" form with:
            | loginInput      | 696651784   |
            | passwordInput   | Qwerty1234! |
        And I click the "loginConfirm" element
        Then the "homePage" page is displayed
        When I fill the "tweetTextArea" form with:
            | tweetTextArea   | example txt |
        And I click the "tweetButton" element
        And I wait for "visibilityOf" of the "tweetExample" element
        Then the "tweetExample" element is visible
        When I click the "tweetOptions" element
        And I click the "deleteTweet" element
        And I click the "confirmDeleteTweet" element
        Then the "tweetExample" element is not visible
