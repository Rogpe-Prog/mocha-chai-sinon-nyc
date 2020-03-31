const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

app.use(express.static('public'))

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/tabuada', tabuadaRouter)


app.listen(port, () => console.log('Server running on '+port))
