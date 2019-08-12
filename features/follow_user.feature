Feature: User logs in and searches other users and follows one of them

    @criticalPath @followUser
    Scenario: User logs in and follows a user
        When I visit the "mainPage" page
        And I fill the "loginInput" form with:
            | loginInput      | 696651784   |
            | passwordInput   | Qwerty1234! |
        And I click the "loginConfirm" element
        Then the "homePage" page is displayed
        When I wait for "visibilityOf" of the "exploreTab" element
        And I click the "exploreTab" element
        Then the "explorePage" page is displayed
        When I fill the "searchTextArea" form with:
            | searchTextArea  | netguru     |
        And I wait for "visibilityOf" of the "searchSuggestion" element
        And I wait for "elementToBeClickable" of the "searchSuggestion" element
        And I hover over first option
        And I click the "searchSuggestion" element
        Then the "netguruPage" page is displayed
        And I click the "followNetguru" element
        Then the "unfollowNetguru" element is visible
        When I visit the "homePage" page
        And I wait for "visibilityOf" of the "netguruLink" element
        Then the "netguruLink" element is visible
        When I click the "netguruLink" element
        Then the "netguruPage" page is displayed
        When I click the "unfollowNetguru" element
        And I click the "unfollowConfirm" element
        And I wait for "visibilityOf" of the "followNetguru" element
        Then the "followNetguru" element is visible
