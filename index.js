// run `node index.js` in the terminal
const jsdom = require('jsdom');
const { getWebsite } = require('./util.js');

const { JSDOM } = jsdom;

const url = 'https://getbootstrap.com/';
const body = getWebsite(url);

const dom = new JSDOM(body);

console.log(dom.window.document.querySelector('p').textContent);
