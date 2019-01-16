
var webdriver = require('selenium-webdriver');

var chrome = require('selenium-webdriver/chrome');
var edge = require('selenium-webdriver/edge');

const options = new edge.Options();
const service = new edge.ServiceBuilder().build();
driver = new edge.Driver(options, service);
driver.get('http://www.msn.com');