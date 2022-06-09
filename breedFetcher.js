const request = require("request");
const args = process.argv.slice(2).shift(3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } else {
    console.log(error);
  }
});