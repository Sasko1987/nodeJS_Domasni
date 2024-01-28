function handleHompage(req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>Welcome to our Homepage</h1>");
}

function handleEmail(req, res, email) {
  const emailPattern = /^[a-z0-9.-]{3,}@[a-z]{2,9}[\.][a-z]{2,}$/g;
  if (emailPattern.test(email)) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`<h2>Hello, Your email is ${email} </h2>`);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h2>Invalid Email</h2>");
  }
}

function handleLocation(req, res, query) {
  const { city, country } = query;
  const cityPattern = /^([a-zA-Z]{2,})/;
  const countryPattern = /^([a-zA-Z]{4,})/;
  if (cityPattern.test(city) && countryPattern.test(country)) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`<h2>Your city is ${city} and your country is ${country}</h2>`);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h2>Invalid City or Country</h2>");
  }
}

function handlePageNotFound(req, res) {
  res.writeHead(404, { "Content-type": "text/html" });
  res.end("<h2> Oooops, Page not Found</h2>");
}

module.exports = {
  handleHompage,
  handleEmail,
  handleLocation,
  handlePageNotFound,
};
