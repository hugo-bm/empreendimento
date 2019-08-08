const request = require('request')
const boletoData = require('../config/paramsBoleto.json').form // Informações do boleto temporariamente em json
const tokenBoleto = require('../config/paramsBoleto.json').token //Para implementação de segunda via
const hotsname = 'https://sandbox.boletocloud.com/api/v1/boletos'

   async function boletoGerar(nome,cpf){
       
        // econde usuario("ApiKey"):senha("token") para Base64
    let data = "api-key_hN01ncTdpzWMC2TKI1-dBUCZnaLH4YFVACpyW2lJIAs=:token";
    let emBase64 = new Buffer.from(data).toString('base64');
    let dataEmissao = await emiDate()
    let num = await numBoleto()        
    let requisicao = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            request({
                url: hotsname,
                method: 'post',
                headers: {Authorization: 'Basic ' + emBase64,// Autenticação
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                form: {
                     
                    "boleto.conta.banco":"237",
                    "boleto.conta.agencia":"1234-5",
                    "boleto.conta.numero": "123456-0",    
                    "boleto.conta.carteira": 12,
                    "boleto.beneficiario.nome": "CessaBit Tech",
                    "boleto.beneficiario.cprf": "15.719.277/0001-46",
                    "boleto.beneficiario.endereco.cep": "59020-000",
                    "boleto.beneficiario.endereco.uf": "RN",
                    "boleto.beneficiario.endereco.localidade": "Natal",
                    "boleto.beneficiario.endereco.bairro": "Petrópolis",
                    "boleto.beneficiario.endereco.logradouro": "Avenida Hermes da Fonseca",
                    "boleto.beneficiario.endereco.numero": "384",
                    "boleto.beneficiario.endereco.complemento": "Sala 2A, segundo andar",
                    "boleto.emissao": dataEmissao,
                    "boleto.vencimento": "2020-05-30",
                    "boleto.documento": "EX1",
                    "boleto.numero": num,
                    "boleto.titulo": "DM",
                    "boleto.valor": "25000.99",
                    "boleto.pagador.nome": nome,
                    "boleto.pagador.cprf": cpf,
                    "boleto.pagador.endereco.cep":"36240-000",
                    "boleto.pagador.endereco.uf":"MG",
                    "boleto.pagador.endereco.localidade":"Santos Dumont",
                    "boleto.pagador.endereco.bairro": "Casa Natal",
                    "boleto.pagador.endereco.logradouro": "BR-499",
                    "boleto.pagador.endereco.numero": "s/n",
                    "boleto.pagador.endereco.complemento": "Sítio - Subindo a serra da Mantiqueira",
                    "boleto.instrucao": "Aten RECEBER ESTE BOLETO.",
                    "boleto.instrucao": "Este  apenas um teste utilizando a API Boleto Cloud",
                    "boleto.instrucao": "Mais info em http://www.boletocloud.com/app/dev/api"
                }
                    
                }, (error, response, body) => {
                    if (error) {
                    console.error(error)
                    return
                }
                console.log(`statusCode: ${response.statusCode}`)// status da requisição (201: concluido com sucesso!)
                if (response.statusCode != 201) {
                    console.log(response.body)
                }
                let boleto =   'https://sandbox.boletocloud.com/boleto/2via/' + response.headers['x-boletocloud-token']
            //console.log(boleto)
            resolve(boleto);
            })
        }, 80)
    }
    )   
    
    return requisicao
}
// Pegando data e formatando
async function emiDate() {
    let data = new Date(),
        month = '' + (data.getMonth() + 1),
        day = '' + data.getDate(),
        year = data.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
//Gerando número aleatório para o boleto
 async function numBoleto(){
    let num = ''
    for(let cont=0;cont < 11; cont++){
      num +=  + Math.floor(Math.random() * (9 - 0 + 1)) + 0;  
    }
    return (num +'-P')
 }
  
 
module.exports = boletoGerar