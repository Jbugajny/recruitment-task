# Jacek Bugajny recruitment task instructions and description for Senior QA role at Netguru


### Set up and Install
To run the tests you have to make sure that you have installed:
```
node.js - v7.8.0 min
JDK
Chrome
```

First in previously created directory clone this repository.
Then enter the cloned directory and pass a command:
```
npm install cross-env kakunin --save
```

and then:

```
npm run kakunin 
```
(Atention! this command might need to be run twice as some files might be added on the first try)

After this command a new instance of Chrome Browser should be opened and tests should run.

### Description

Tests consists of two scenarios. Each one of them starts with user logging in.
First scenario covers 'Tweet' feature. As I decided it is the most important feature on this app. Steps adds a exemplary tweet, checks if it is displayed and deletes the tweet so the test can be run multiple times.

Other scenario covers a 'Follow' feature as this is the core feature for me that connects users around the world.
Steps enters Explore tab where Netguru users is searched and followed. To check if the functionality works steps continue to home page where @netguru tweets are displayed. At last the @netguru user is beeing unfollowed so the tests cant be run multiple times.

### Additional information
For any problems regarding Windows users please visit kakunin.io for troubleshooting.

Due to lack of time the logging feature is performed by the custom Kakunin steps. Creating more advanced automatic tests for any project that I was involved in starts with writing custom step for logging a chosen user.

Kakunin framework is my choice as i have the most commercial experience with this tool, it is multiplatform and can be used for cross-platform testing.

### Contact
If something is not working please contact me via email: jbugajny@gmail.com
