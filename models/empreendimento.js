const db = require('../config/connection')

//funções crud empreendimento
async function listar() {
    let empreendimento = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query('SELECT * FROM EMPREENDIMENTO', (err, rows, fields)=>{
                let string = JSON.stringify(rows)
                let json = JSON.parse(string)
                resolve(json)
            })
        }, 80)
        
    })
    return empreendimento
}

async function listarUm(id) {
    let empreendimento = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`SELECT * FROM EMPREENDIMENTO WHERE ID='${id}'`, (err, rows, fields)=>{
                let string = JSON.stringify(rows)
                let json = JSON.parse(string)
                resolve(json)
            })
        }, 80)
    })
    return empreendimento
}

async function adicionar(nome, email) {
    let empreendimento = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`INSERT INTO EMPREENDIMENTO (NOME, EMAIL) VALUES ('${nome}', '${email}')`, (err, result)=>{
                if(err) {
                    console.log(`erro ao cadastrar ${err}`)
                }
                console.log('cadastrado com sucesso')
            })
        }, 80)
    })
}

async function modificar(id, nome, email) {
    let empreendimento = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`UPDATE EMPREENDIMENTO SET NOME="${nome}", EMAIL="${email}" WHERE ID="${id}"`, (err, result)=>{
                if(err) {
                    console.log(`erro ao modificar empreendimento ${err}`)
                }
                console.log(`empreendimento modificado com sucesso: ${result.affectedRows}`)
            })
        })
    }, 80)
}

async function excluir(id) {
    let empreendimento = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`DELETE FROM EMPREENDIMENTO WHERE ID='${id}'`, (err, result)=>{
                if(err) {
                    console.log(`erro ao excluir empreendimento ${err}`)
                }
                console.log(`empreendimento excluído com sucesso: ${result}`)
            })
        })
    }, 80)
}

async function calcular_ano(ano) {
    let empreendimento = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`SELECT SUM(VALOR) AS TOTAL FROM PAGAMENTO WHERE YEAR(DATAPAGAMENTO) = ${ano}`, (err, rows, fields)=>{
                resolve(JSON.parse(JSON.stringify(rows)))
            })
        }, 80)
        
    })
    return empreendimento
}

module.exports = {listar, adicionar, listarUm, modificar, excluir, calcular_ano}