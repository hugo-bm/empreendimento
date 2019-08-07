const express = require("express")
const router = express.Router()
const Usuario = require('../models/usuario')
const {eAdmin1} = require("../helpers/eAdmin1")
const {eAdmin2} = require("../helpers/eAdmin2")
const {eAdmin3} = require("../helpers/eAdmin3")
const {eAdmin4} = require("../helpers/eAdmin4")

const boleto = require('./boleto')// temporario

//Rotas
router.get('/', (req, res) => {
    Usuario.listar().then((resultado) => {
      console.log(resultado)
      res.render('index', { clientes: resultado })
    }).catch((err) => {
      console.log(`erro ao listar: ${err}`)
    })
  })
  // Preparando o sistema de boletos
  router.get('/pagamento',(req,res)=>{ // seleção do boleto (Ainda não implementado)
    res.render('pagamento')
  }) 
  
  router.use('/pagamento/boleto', boleto)// view do boleto
  // fim teste

router.get('/listarUm/:id', (req, res) => {
  console.log(req.params.id)
    Usuario.listarUm(req.params.id).then((resultado) => {
      res.render('index', { Usuarios: resultado })
    }).catch((err) => {
      console.log(`erro ao listar: ${err}`)
    })
  })
  
  router.post('/adicionar', (req, res) => {
    Usuario.adicionar(req.body.nome, req.body.email).then(() => {
      console.log('Cadastro feito com sucesso')
      res.redirect('/')
    }).catch((err) => {
      console.log(`erro ao cadastrar: ${err}`)
    })
  })
  
  router.get('/modificar/:id', (req, res) => {
    Usuario.listarUm(req.params.id).then((resultado) => {
      res.render('modificarUsuario', { Usuarios: resultado })
    }).catch((err) => {
      console.log(`erro ao listar: ${err}`)
    })
  })
  
  router.post('/modificar', (req, res) => {
    Usuario.listarUm(req.body.id).then((resultado) => {
      resultado.id = req.body.id
      resultado.nome = req.body.nome
      resultado.email = req.body.email
      console.log(resultado.id)
      Usuario.modificar(resultado.id, resultado.nome, resultado.email).then(() => {
        console.log(`Usuario modificado com sucesso`)
        res.redirect('/')
      }).catch((err) => {
        console.log(`erro ao modificar: ${err}`)
      })
    })
  })
  
  
  router.get('/excluir/:id', (req, res) => {
    Usuario.excluir(req.params.id).then(() => {
      console.log(`usuário excluido`)
      res.redirect('/')
    }).catch((err) => {
      console.log(`erro ao excluir: ${err}`)
    })
  })
//Não mexer daqui pra baixo
module.exports = router