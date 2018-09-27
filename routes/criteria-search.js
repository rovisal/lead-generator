const express = require('express');
const criteriaSearch  = express.Router();
const queryString = require('query-string');


/* GET home page */
criteriaSearch.get('/criteria-search', (req, res, next) => {
  res.render('criteriasearch');
});

// POST form
criteriaSearch.post('/criteria-search', (req, res, next) => {
  
  
  console.log("req.body.codeApe: " + req.body.codeApe);
  console.log("req.body.codeApe[0]: " + req.body.codeApe[0]);
  ///////////////////////

// Put results of POST form in proper format

queryString.stringify({foo: req.body.codeApe});

// Put proper formatted results in variable
// Create URL with variable
// Launch HTTP request to this URL

  const infogreffe  = axios.create({
    baseURL: 'https://opendata.datainfogreffe.fr/api/records/1.0/search/?',
  });
  
  
})

module.exports = criteriaSearch;


/////////////////////



// let stockTicket = "amzn";

document.getElementById("getstockinfo").onclick = function(){
  let stockTicket = document.getElementById("stockticket").value ;   
  getStockInfo(`${stockTicket}/chart`);
}

function getStockInfo(id) {
  stockInfo.get(id)
  .then(function (response) {
    console.log(response);
    printTheChart(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}