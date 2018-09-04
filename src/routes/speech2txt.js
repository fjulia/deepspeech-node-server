const express = require('express');
const router = express.Router();
const boom = require('boom');
import getFileFromUrl from '../lib/utils';
import speech2txt from '../deepspeech/client';

/* GET home page. */
router.post('/url', function (req, res, next) {
  var ret = speech2txt(req.body.url);
  //var ret;
  if (!ret) {
    console.log("Error processing voice")
    return next(boom.badRequest('Error processing voice'))
  }
  res.send(ret);
});

module.exports = router;
