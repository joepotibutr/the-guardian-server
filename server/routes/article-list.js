import express from 'express'
import request from 'request'
import env from 'dotenv'

env.config()

const router = express.Router();


const BASE_URL = 'http://content.guardianapis.com/';

/* GET article listing. */

router.get('/', function(req, res, next) {
    const url = `${BASE_URL}search?api-key=${process.env.GUARDIAN_API}`


    request.get(url, (err, response, body) => {
      if (err) {
        return reject(err);
      }
      res.send(JSON.parse(body))
    })
})

router.post('/', (req,res,next) => {
  let  { searchTerms, orderBy } = req.body.data
  const url = `${BASE_URL}search?q=${searchTerms}&order-by=${orderBy}&api-key=${process.env.GUARDIAN_API}`
  request.get(url, (err, response, body) => {
    if (err) {
      return reject(err);
    }
    res.send(JSON.parse(body))
  })
})

export default router
