const fetch = require('node-fetch');

export const getWebsite = async (url) => {
  const response = await fetch(url);
  const body = await response.text();
  console.log(body); // prints a chock full of HTML richness
  return body;
};
