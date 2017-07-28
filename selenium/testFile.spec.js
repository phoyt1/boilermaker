
require('chai').should();
// const chai.use require('chai-as-promised')
// const expect = chai.expect
require('chromedriver');
const webdriver = require('selenium-webdriver');
const By = webdriver.By,
    until = webdriver.until;

const timeOut = 15000;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('first test', function() {
    this.timeout(timeOut);
    it('runs and passes', (done) => {
        driver.get('http://fsphotographer.herokuapp.com')
        .then(() => driver.getTitle())
            .then(title => title.should.equal('Photographer'))
        .then(driver.quit())
        .then(() => done())
        .catch(error => done(error))
        ;
    })
})

        // .then(driver.findElement(By.name('q')).sendKeys('webdriver'))
        // .then(driver.findElement(By.name('btnG')).click())
