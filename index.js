// run `node index.js` in the terminal
const jsdom = require('jsdom');
const { getme } = require('./util.js');

const { JSDOM } = jsdom;

const url = 'https://www.scrapingbee.com/blog/node-fetch/';
// const body = getWebsite(url);
var temp = getme;
console.log(getme('h'));

// const dom = new JSDOM(body);

// console.log(dom.window.document.querySelector('h3').textContent);
