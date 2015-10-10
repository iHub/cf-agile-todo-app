// Use `seleniumAddress` for faster startup; run `./node_modules/.bin/webdriver-manager start` to launch the Selenium server.
// Use `seleniumPort` to let Protractor manage its own Selenium server instance (using the server JAR in its default location).

exports.config = {

  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // The port to use to start the standalone Selenium Server.
  // If not specified, defaults to 4444.
  // seleniumPort: 7575,

  // Or instead install your own selenium driver and point to it
  // The location of the jar file for the standalone Selenium Server
  seleniumServerJar: './node_modules/selenium-server-standalone-jar/' +
    'jar/selenium-server-standalone-2.44.0.jar',

  // If opting to use your own selenium driver
  chromeDriver: './node_modules/chromedriver/bin/chromedriver',
  allScriptsTimeout: 11000,

  // Path to your E2E test files, relative to the location of this configuration file.
  // We're pointing to the directory where our CoffeeScript output goes.
  // framework: 'jasmine2',
  specs: ['tests/e2e/*.js'],

  framework: 'jasmine',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  // Properties passed to Selenium -- see https://code.google.com/p/selenium/wiki/DesiredCapabilities for more info.
  capabilities: {
    'browserName': 'chrome',
    // To turn off chrome's security limitations that do
    // not allow some basics things to run
    // that are required while developing
    'chromeOptions': {
      'args': ['--disable-web-security']
    }
  },

  // This should point to your running app instance, for relative path resolution in tests.
  // baseUrl: 'http://localhost:9000'
};
