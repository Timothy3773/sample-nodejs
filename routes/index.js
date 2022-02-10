var {request, response, Router, application} = require('express');
var router = Router();

/**
 * @param {request} req Request (Backend)
 * @param {response} res Response (Frontend)
 */
testPage = (req, res) => {
  res.send(req.body)
}

router.get('/test', testPage)
module.exports = router;
