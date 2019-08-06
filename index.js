//Dependências
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
	const handlebars = require('express-handlebars')
    const Cliente = require('./models/usuario')
    const Empreendimento = require('./models/empreendimento')
    const Pagamento = require('./models/pagamento')
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
    app.use((req, res, next) =>{
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
        res.locals.user = req.user || null;
        next()
})
//Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    //Handlebars
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
    app.set("view engine", "handlebars")

//Public static
    app.use(express.static(path.join(__dirname, "src")))
    app.set('views', path.join(__dirname, 'views'))

//Rotas
    app.get('/', (req, res)=>{
        Cliente.listar().then((resultado)=>{
            res.render('index', {clientes:resultado})
        }).catch((err)=>{
            console.log(`erro ao listar: ${err}`)
        })
        
    })

    app.get('/listarUm/:id', (req, res)=>{
        Cliente.listarUm(req.params.id).then((resultado)=>{
            res.render('index',{clientes:resultado})
        }).catch((err)=>{
            console.log(`erro ao listar: ${err}`)
        })
    })

    app.post('/adicionar', (req, res)=>{
        Cliente.adicionar(req.body.nome, req.body.email).then(()=>{
            console.log('Cadastro feito com sucesso')
            res.redirect('/')
        }).catch((err)=>{
            console.log(`erro ao cadastrar: ${err}`)
        })
    })

    app.get('/modificar/:id', (req, res)=>{
        Cliente.listarUm(req.params.id).then((resultado)=>{
            res.render('modificarCliente', {clientes: resultado})
        }).catch((err)=>{
            console.log(`erro ao listar: ${err}`)
        })
    })

    app.post('/modificar', (req, res)=>{
        Cliente.listarUm(req.body.id).then((resultado)=>{
            resultado.id = req.body.id
            resultado.nome = req.body.nome
            resultado.email = req.body.email
            console.log(resultado.id)
            Cliente.modificar(resultado.id, resultado.nome, resultado.email).then(()=>{
                console.log(`cliente modificado com sucesso`)
                res.redirect('/')
            }).catch((err)=>{
                console.log(`erro ao modificar: ${err}`)
            })
        })
    })


    app.get('/excluir/:id', (req, res)=>{
        Cliente.excluir(req.params.id).then(()=>{
            console.log(`usuário excluido`)
            res.redirect('/')
        }).catch((err)=>{
            console.log(`erro ao excluir: ${err}`)
        })
    })

    app.get('/total', (req, res)=>{
        Empreendimento.calcular_ano(2021).then((resultado)=>{
            res.render('index', {calculo:resultado})
        }).catch((err)=>{
            console.log(`erro: ${err}`)
        })
    })   

    app.get('/dashboard1', (req, res) => {
        Pagamento.listarMeses().then((resultado) => {
            Pagamento.listarInadimplente().then((inadimplente) => {
                res.render('dashboard/index', {saldoTotal:resultado, inadimplente:inadimplente})
            }) 
        }).catch((err) => {
            console.log(`erro: ${err}`)
        })
    })

    app.get('/dashboard', (req, res) => {
        Pagamento.calcularAno('2019').then((resultado) => {
            res.render('dashboard/index', {saldoTotal:resultado})
            console.log(resultado)
        })
    })

//Servidor Web
    const port = 3000
    app.listen(port, (req,res)=>{
        console.log(`conectado ao servidor na porta ${port}`)
    })