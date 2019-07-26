const express = require('express')
const app = express()
const port = 5000;
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const bodyMiddleware = bodyParser.urlencoded({ extended: true, limit: 1024 })

const routes = {
  newMessage: require('./routes/newMessage'),
}

app.use('/static', express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.post('/new-message', bodyMiddleware, routes.newMessage)

app.listen(port, () => console.log(`Server is running on port ${port}`))