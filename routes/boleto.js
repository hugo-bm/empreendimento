const request = require('request')
const express = require("express")
const router = express.Router()
const boletoData = require('../config/paramsBoleto.json').form // Informações do boleto temporariamente em json
const tokenBoleto = require('../config/paramsBoleto.json').token //Para implementação de segunda via
const fs = require('fs')
const hotsname = 'https://sandbox.boletocloud.com/api/v1/boletos'
const h= ''
    // usei uma rota para poder pegar os params
    router.get('/',(req,res)=>{
        // econde usuario("ApiKey"):senha("token") para Base64
    let data = "api-key_hN01ncTdpzWMC2TKI1-dBUCZnaLH4YFVACpyW2lJIAs=:token";
    let emBase64 = new Buffer.from(data).toString('base64'); 

        

         request({url:hotsname,
        method: 'post',
            headers: {Authorization: 'Basic ' + emBase64,// Autenticação
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},// formato da rquisição
              form: boletoData // Dados do boleto
        }, (error, response, body) => {
            if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${response.statusCode}`)// status da requisição (201: concluido com sucesso!)
      let boleto =[{url:  'https://sandbox.boletocloud.com/boleto/2via/' + response.headers['x-boletocloud-token']}]
      console.log(boleto)
      res.render('boleto',{iframe: boleto})
    })
    
    
      
     
    })
module.exports = router