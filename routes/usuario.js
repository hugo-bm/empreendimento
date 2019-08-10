const express = require("express")
const router = express.Router()
const Usuario = require('../models/usuario')
const Empreendimento = require('../models/empreendimento')
const {eAdmin1} = require("../helpers/eAdmin1")
const {eAdmin2} = require("../helpers/eAdmin2")
const {eAdmin3} = require("../helpers/eAdmin3")
const {eAdmin4} = require("../helpers/eAdmin4")
const boleto = require('./boleto')// temporario

//Rotas
router.get('/', (req, res) => {
    Usuario.listar().then((resultado) => {
      Empreendimento.listar().then((empreendimento) => {
        res.render('index', { usuarios: resultado, apartamentos: empreendimento })
      })
    }).catch((err) => {
      console.log(`erro ao listar: ${err}`)
    })
  })
// boleto
router.get('/pagamento/:id',(req,res)=>{ // view dos boletos por usuário
  Usuario.listarUm(req.params.id).then((resultado) => {    
    res.render('pagamento', { usuarios: resultado })
  }).catch((err) => {
    console.log(`erro ao listar: ${err}`)
  })
})
router.get('/pagamento/boleto/remessa', (req,res)=>{ 
  
 v()
  
  async function v(){
    let file =   await boleto.boletoRemessa()
    console.log(file.path)
    //res.sendFile(file.path)
  }   
})


router.post('/pagamento/boleto/', (req,res)=>{ // Requisição para criar um boleto 
  /*A pesquisa está aqui para obter os dados completos para a requisição*/
/*Atualmente só está sendo usado o nome*/ 
  Usuario.listarUm(req.body.id).then((resultado) => {
    v(resultado)
  }).catch((err) => {
    console.log(`erro ao listar: ${err}`)
  })
  
  async function v(resultado){
    let url =  [{url: await boleto.boletoGerar(resultado[0].Nome,"222.222.222-22")}] // nome e cpf/cnpj 
    console.log(url)
    res.render('boleto',{iframe: url})
  }   
})

//fim

router.get('/listarUm/:id', (req, res) => {
    Usuario.listarUm(req.params.id).then((resultado) => {
      res.render('index', { usuarios: resultado })
    }).catch((err) => {
      console.log(`erro ao listar: ${err}`)
    })
  })
  
  router.post('/adicionar', (req, res) => {
    Usuario.adicionar(req.body.nome, req.body.email, req.body.senha, req.body.apartamento).then(() => {
      console.log(req.body.apartamento)
      console.log('Cadastro feito com sucesso')
      res.redirect('/usuario')
    }).catch((err) => {
      console.log(`erro ao cadastrar: ${err}`)
    })
  })
  
  router.get('/modificar/:id', (req, res) => {
    Usuario.listarUm(req.params.id).then((resultado) => {
      res.render('modificarUsuario', { usuarios: resultado })
    }).catch((err) => {
      console.log(`erro ao listar: ${err}`)
    })
  })
  
  router.post('/modificar', (req, res) => {
    Usuario.listarUm(req.body.id).then((usuarios) => {
      usuarios.IdUsuario = req.body.id
      usuarios.Nome = req.body.nome
      usuarios.Email = req.body.email
      Usuario.modificar(usuarios.IdUsuario, usuarios.Nome, usuarios.Email).then(() => {
        console.log(`Usuario modificado com sucesso`)
        res.redirect('/usuario')
      }).catch((err) => {
        console.log(`erro ao modificar: ${err}`)
      })
    })
  })
  
  
  router.get('/excluir/:id', (req, res) => {
    Usuario.excluir(req.params.id).then(() => {
      console.log(`usuário excluido`)
      res.redirect('/usuario')
    }).catch((err) => {
      console.log(`erro ao excluir: ${err}`)
    })
  })

//Não mexer daqui pra baixo
module.exports = router