# Testing in the Front-End #

## Description ##

Very simple example application to show how to test in the front-end:

* Manually
* Using CasperJS
* Using Karma
* Using Selenium and WebdriverIO

## Setup ##

Install dependencies:

```bash
$ npm install
```

Testing can be done manually:

```bash
$ npm run manual_test
```

But this is quite boring and error prone.

So, it is better to test it using CasperJS. CasperJS launches your
tests against a headless browser like phantomjs or slimerjs:

```bash
$ npm run casperjs_test
```

But what if I want to test against several browsers with or without GUI?
Karma comes to the rescue. Once launcheḑ, Karma watches for changes in your
application now an relaunches it in different browsers whenever you
modify it.

```bash
$ npm run karma_test
```

If you want to run Chromium instead of Chrome then you'll have to redefine
the following environment variable:

```bash
$ export CHROME_BIN=/paht/to/your/chromium_browser
```

Another way to test against multiple browsers is using WebdriverIO [3] and
Selenium [4]:

```bash
$ npm run wdio_test
```

A task runner like grunt [5] or a package like npm-watch [6] can be used
to relaunch tests when anything changes (Karma does this for you)

Some testing stacks like chimp [7] are built on top of these tools.

Enjoy testing!

[1] http://casperjs.org/
[2] https://github.com/karma-runner/karma/
[3] http://webdriver.io/
[4] http://docs.seleniumhq.org/download/
[5] http://gruntjs.com/
[6] https://www.npmjs.com/package/npm-watch
[7] https://chimp.readme.io/
