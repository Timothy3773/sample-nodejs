var {request, response, Router, application} = require('express');
var router = Router();
var eventEmitter = require('events')

var event = new eventEmitter()

/**
 * @param {request} req Request (Backend)
 * @param {response} res Response (Frontend)
 */
testPage = (req, res) => {
  res.send("ok")
  console.log(req.body)
}

router.get('/test', testPage)
module.exports = router;
