var {request, response, Router} = require('express');
var router = Router();

/**
 * @param {request} req Request (Backend)
 * @param {response} res Response (Frontend)
 */
testPage = (req, res) => {
  console.log(req.body)
  res.send(req.body)
}

router.get('/test', testPage)
module.exports = router;
