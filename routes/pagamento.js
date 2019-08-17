const express = require("express")
const router = express.Router()
const Pagamento = require('../models/pagamento')
//controles de acesso adm
const {eAdmin1} = require("../helpers/eAdmin1")
const {eAdmin2} = require("../helpers/eAdmin2")
const {eAdmin3} = require("../helpers/eAdmin3")
const {eAdmin4} = require("../helpers/eAdmin4")

//Rotas 
  router.get('/dashboard', (req, res) => {
    Pagamento.calcularAno('2019').then((saldoTotal) => {     
      Pagamento.calcularAno_inadimplente('2019').then((inadimplente) => {
        Pagamento.inadimplente().then((rank)=>{         
          res.render('dashboard/index', { saldoTotal: saldoTotal, inadimplente: inadimplente, rank: rank })
        })        
      })
    })
  })
  
//Não mexer daqui pra baixo
module.exports = router