//instanciando banco de dados
const db = require('../config/connection')

//funções crud usuario
async function listar() {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query('SELECT * FROM usuario', (err, rows, fields)=>{
                resolve(JSON.parse(JSON.stringify(rows)))
            })
        }, 80)
        
    })
    return usuario
}

async function listarUm(id) {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`SELECT * FROM usuario WHERE id='${id}'`, (err, rows, fields)=>{
                resolve(JSON.parse(JSON.stringify(rows)))
            })
        }, 80)
    })
    return usuario
}

async function adicionar(nome, email) {
    let usuario = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            db.connection.query(`INSERT INTO usuario (nome, email) VALUES ('${nome}', '${email}')`, (err, result)=>{
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
            db.connection.query(`UPDATE usuario SET nome="${nome}", email="${email}" WHERE id="${id}"`, (err, result)=>{
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
            db.connection.query(`DELETE FROM usuario WHERE id='${id}'`, (err, result)=>{
                if(err) {
                    console.log(`erro ao excluir usuário ${err}`)
                }
                console.log(`usuário excluído com sucesso: ${result}`)
            })
        })
    }, 80)
}

module.exports = {listar, adicionar, listarUm, modificar, excluir}