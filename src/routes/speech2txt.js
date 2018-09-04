const express = require('express');
const router = express.Router();
const boom = require('boom');

/* GET home page. */
router.get('/url', function(req, res, next) {
  var err
  if (err) {
    console.log("Error processing voice")
    return next(boom.badRequest('Error processing voice'))
  }
  res.send('ok')
});

module.exports = router;
