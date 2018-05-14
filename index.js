import express from "express";
import fs from 'fs'
import url from 'url'
import bodyParser from 'body-parser'

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['json'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

const jsonParser = bodyParser.json()
const PORT = 3000
const app = express()
//READ
app.get('/data', (req, res) => {
  console.log(url.parse(req.url))
  res.send(fs.readdirSync('./data'))
})

//чёбы json в body прилетал
app.use(bodyParser.json());
// app.use(express.static('./data', options))
app.get('/data/*', (req, res) => {
  console.log(url.parse(req.url).href)
  res.send(fs.readFileSync('.' + url.parse(req.url).href))
})
//DELETE
app.delete('/data/*', (req, res)=> {
  fs.unlink('.' + url.parse(req.url).href,(err)=>{
    if(err) res.send(err);
    res.sendStatus(200)
  })
})
//CREATE,UPDATE
app.put('/data/*', (req, res) => {
  fs.writeFile(
    '.' + url.parse(req.url).href, 
    JSON.stringify(req.body, null, ' ') , 
    (err)=>{
      if(err) console.log(err);
      res.sendStatus(200)
    }
  )
})

app.listen(PORT)

console.log(PORT, 'listen')