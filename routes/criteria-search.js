const express = require('express');
const criteriaSearch  = express.Router();


/* GET home page */
criteriaSearch.get('/criteria-search', (req, res, next) => {
  res.render('criteriasearch');
});


// POST form
criteriaSearch.post('/criteria-search', (req, res, next) => {
    
  req.body.forEach(function(elt) {
    console.log("elt: " + elt);
    console.log("elt.text: " + elt.text);
    console.log("elt.value: " + elt.value);
  })
  console.log("req.body: " + req.body);
  console.log("req.body[0]: " + req.body[0]);
  console.log("req.body.data: " + req.body.data);
  console.log("req.body.object: " + req.body.object);
  console.log("req.body.Object: " + req.body.Object);
  // console.log("{{req.body.0}}: " + {{req.body.0}});
  // console.log("req.body.0.text: " + req.body.0.text);
  
  
})

module.exports = criteriaSearch;