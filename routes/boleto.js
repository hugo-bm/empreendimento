const request = require('request')
const boletoData = require('../config/paramsBoleto.json').form // Informações do boleto temporariamente em json
const Pagamento = require('../models/pagamento')

const hotsname = {gerar:'https://sandbox.boletocloud.com/api/v1/boletos',
remessa: "https://sandbox.boletocloud.com/api/v1/arquivos/cnab/remessas"}
const fs = require('fs')
   async function boletoGerar(nome,cpf, id){      
        // econde usuario("ApiKey"):senha("token") para Base64
    let data = "api-key_hN01ncTdpzWMC2TKI1-dBUCZnaLH4YFVACpyW2lJIAs=:token";
    let emBase64 = new Buffer.from(data).toString('base64');
    let dataEmissao = await emiDate();
    let dataVencimento = await venciDate();
   // let num = await numBoleto()        
    let requisicao = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            request({
                url: hotsname.gerar,
                method: 'post',
                headers: {Authorization: 'Basic ' + emBase64,// Autenticação
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                form: {
                    "boleto.conta.token": "api-key_RPu53r0yE9LSj2ImqbJYbeJYrph45hHdXKUkWrye9DU=",
                   // "boleto.conta.banco":"237",
                   // "boleto.conta.agencia":"1234-5",
                   // "boleto.conta.numero": "123456-0",    
                   // "boleto.conta.carteira": 12,
                   // "boleto.beneficiario.nome": "CessaBit Tech",
                   // "boleto.beneficiario.cprf": "15.719.277/0001-46",
                   // "boleto.beneficiario.endereco.cep": "59020-000",
                   // "boleto.beneficiario.endereco.uf": "RN",
                   // "boleto.beneficiario.endereco.localidade": "Natal",
                   // "boleto.beneficiario.endereco.bairro": "Petrópolis",
                   // "boleto.beneficiario.endereco.logradouro": "Avenida Hermes da Fonseca",
                   // "boleto.beneficiario.endereco.numero": "384",
                   // "boleto.beneficiario.endereco.complemento": "Sala 2A, segundo andar",
                    "boleto.emissao": dataEmissao,
                    "boleto.vencimento": dataVencimento,
                    "boleto.documento": "EX1",
                    //"boleto.numero": num,
                    "boleto.titulo": "DM",
                    "boleto.valor": "350.49",
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
                else{//Pagamento.adicionar( Token, Data de Emisão, Data de Vencimento, Status Do Pagamento, Id_Usuario, Id_Taxa)
                    Pagamento.adicionar(response.headers['x-boletocloud-token'], dataEmissao, dataVencimento, 0, id, 1)
                    let boleto =   'https://sandbox.boletocloud.com/boleto/2via/' + response.headers['x-boletocloud-token']
                    resolve(boleto);
                }
            })
        }, 80)
    }
    )  
    
    return requisicao
}

async function boletoRemessa(){      
        // econde usuario("ApiKey"):senha("token") para Base64
    let data = "api-key_hN01ncTdpzWMC2TKI1-dBUCZnaLH4YFVACpyW2lJIAs=:token";
    let emBase64 = new Buffer.from(data).toString('base64');
    let requisicao = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            request({
                url: hotsname.remessa,
                method: 'post',
                headers: {Authorization: 'Basic ' + emBase64,// Autenticação
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                form: {
                    "remessa.conta.token": "api-key_RPu53r0yE9LSj2ImqbJYbeJYrph45hHdXKUkWrye9DU="               
                }                
                }, (error, response, body) => {
                    if (error) {
                    console.error(error)
                    return
                    }
                    console.log(`statusCode: ${response.statusCode}`)// status da requisição (201: concluido com sucesso!)
                
                    if (response.statusCode != 204) {                    
                        console.log(response.headers['x-boletocloud-token'])// Token da remessa
                        let fileName = response.headers["content-disposition"].replace('inline; filename=','')//Nome do arquivo
                        let filePath = `./remessas/${fileName}`;
                        fs.writeFileSync(filePath, response.body);
                        let remessa = {path: filePath, nome: fileName }
                        console.log(remessa)
                        resolve(remessa);
                    }
                    else{
                        reject(error)
                    }
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
async function venciDate() {
    let data = new Date(),
        month = '' + (data.getMonth() + 2),
        day = '' + data.getDate(),
        year = data.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

  
 
module.exports = {boletoGerar,boletoRemessa}