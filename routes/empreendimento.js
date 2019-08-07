const express = require("express")
const router = express.Router()
const Empreendimento = require('../models/empreendimento')
const {eAdmin1} = require("../helpers/eAdmin1")
const {eAdmin2} = require("../helpers/eAdmin2")
const {eAdmin3} = require("../helpers/eAdmin3")
const {eAdmin4} = require("../helpers/eAdmin4")

//Rotas
router.get('/total', (req, res) => {
    Empreendimento.calcular_ano(2021).then((resultado) => {
      res.render('index', { calculo: resultado })
    }).catch((err) => {
      console.log(`erro: ${err}`)
    })
  })

//Não mexer daqui pra baixo
module.exports = router