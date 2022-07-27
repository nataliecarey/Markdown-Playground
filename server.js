const express = require('express')
const app = express()

const fs = require('fs')
const marked = require('marked')

app.get('/', (req, res) => {
  res.send(marked.parse(fs.readFileSync('playground.md', 'utf8')))
})

app.listen(process.env.PORT || 3030)

