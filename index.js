// run `node index.js` in the terminal
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

console.log(`Hello Node.js v${process.versions.node}!`);

const url = 'https://getbootstrap.com/';

const dom = new JSDOM(`<!DOCTYPE html><p>Hello ma nigga</p>`);

console.log(dom.window.document.querySelector('p').textContent);
