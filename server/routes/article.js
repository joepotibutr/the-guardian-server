import express from 'express'
import request from 'request'

import env from 'dotenv'

env.config()

const router = express.Router();

const BASE_URL = 'http://content.guardianapis.com/';


router.get('/', function(req, res, next) {
  const { id } = req.query
  const url = `${BASE_URL}/${id}?api-key=${process.env.GUARDIAN_API}`


request.get(url, (err, response, body) => {
  if (err) {
    return reject(err);
  }
  res.send(JSON.parse(body))
})


});

export default router;
