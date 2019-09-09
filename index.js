//Dependências
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const usuario = require('./routes/usuario')
const empreendimento = require('./routes/empreendimento')
const pagamento = require('./routes/pagamento')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const fs = require('fs')
const passport = require('passport')


//Configurações
//Sessão
app.use(session({
  secret: "administracaoCliente",
  resave: true,
  saveUninitialized: true
}))
//tem que ser nessa ordem
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  res.locals.error = req.flash("error")
  res.locals.user = req.user || null;
  next()
})
//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//Public static
app.use(express.static(path.join(__dirname, "src")))
app.set('views', path.join(__dirname, 'views'))

//Rotas
//

//Instanciando Rotas
app.use('/usuario', usuario)
app.use('/empreendimento', empreendimento)
app.use('/pagamento', pagamento)

//Servidor Web
const port = 3000
app.listen(port, (req, res) => {
  console.log(`conectado ao servidor na porta ${port}`)
})