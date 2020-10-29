import express from 'express'
import request from 'request'

import env from 'dotenv'

env.config()

const router = express.Router();

const BASE_URL = 'http://content.guardianapis.com/';
/* GET users listing. */
router.get('/', function(req, res, next) {
  const id = "business/2014/feb/18/uk-inflation-falls-below-bank-england-target"

  const url = `${BASE_URL}/${id}?api-key=${process.env.GUARDIAN_API}`


request.get(url, (err, response, body) => {
  if (err) {
    return reject(err);
  }
  res.send(JSON.parse(body))
})


});

export default router;
