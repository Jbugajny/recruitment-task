module.exports = {
    "baseUrl": "https://twitter.com",
    "type": "otherWeb",
    "browserWidth": 1600,
    "browserHeight": 900,
    "timeout": 60,
    "intervalEmail": 5,
    "maxEmailRepeats": 5,
    "elementsVisibilityTimeout": 5,
    "waitForPageTimeout": 5,
    "downloadTimeout": 30,
    "emails": [
        "/emails"
    ],
    "reports": "/reports",
    "downloads": "/downloads",
    "data": "/data",
    "features": [
        "/features"
    ],
    "pages": [
        "/pages"
    ],
    "matchers": [
        "/matchers"
    ],
    "generators": [
        "/generators"
    ],
    "form_handlers": [
        "/form_handlers"
    ],
    "step_definitions": [
        "/step_definitions"
    ],
    "comparators": [
        "/comparators"
    ],
    "dictionaries": [
        "/dictionaries"
    ],
    "transformers": [
        "/transformers"
    ],
    "regexes": [
        "/regexes"
    ],
    "hooks": [
        "/hooks"
    ],
    "clearEmailInboxBeforeTests": false,
    "clearCookiesAfterScenario": true,
    "clearLocalStorageAfterScenario": true,
    "email": null,
    "headless": false,
    "noGpu": false,
    "browserMob": null,
    "accounts": {
        "someAccount": {
            "accounts": [
                {
                    "email": "",
                    "password": ""
                }
            ]
        }
    }
}
