const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const validRoutes = []
Object.assign(app, { validRoutes: validRoutes });

app.use(bodyParser.json())
app.use(express.static('www'))

// Send index.html if no route matches
app.get(/^[^.]*$/, (req, res, next) => {
  let reqPath = req.path.split('/').slice(1)
  if (
    reqPath[0] &&
    !validRoutes.some(
      route => reqPath[0] === route || reqPath[0].startsWith(route + '/') // route.slice(0, -1) to match singulars
    )
  ) {
    res.sendFile(path.join(__dirname, '/www/index.html'))
  } else {
    next()
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
