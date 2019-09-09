//instanciando banco de dados
const db = require('../config/connection')

//funções crud usuario
async function listar() {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query('SELECT * FROM USUARIO', (err, rows, fields)=>{
                resolve(JSON.parse(JSON.stringify(rows)))
            })
        }, 80)
        
    })
    return usuario
}

async function listarUm(id) {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`SELECT * FROM USUARIO WHERE IDUSUARIO='${id}'`, (err, rows, fields)=>{
                resolve(JSON.parse(JSON.stringify(rows)))
            })
        }, 80)
    })
    return usuario
}

async function adicionar(nome, email, senha, cpf, apartamento) {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`INSERT INTO USUARIO (NOME, EMAIL, SENHA, CPF, ID_EMPREENDIMENTO) VALUES ('${nome}', '${email}', '${senha}', '${cpf}','${apartamento}')`, (err, result)=>{
                if(err) {
                    console.log(`erro ao cadastrar ${err}`)
                }
                console.log('cadastrado com sucesso')
            })
        }, 80)
    })
}

async function modificar(id, nome, email) {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`UPDATE USUARIO SET NOME="${nome}", EMAIL="${email}" WHERE IDUSUARIO="${id}"`, (err, result)=>{
                if(err) {
                    console.log(`erro ao modificar usuário ${err}`)
                }
                console.log(`Usuário modificado com sucesso: ${result.affectedRows}`)
            })
        })
    }, 80)
}

async function excluir(id) {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`DELETE ON CASCADE FROM USUARIO WHERE IDUSUARIO='${id}'`, (err, result)=>{
                if(err) {
                    console.log(`erro ao excluir usuário ${err}`)
                }
                console.log(`usuário excluído com sucesso: ${result}`)
            })
        })
    }, 80)
}

module.exports = {listar, adicionar, listarUm, modificar, excluir}