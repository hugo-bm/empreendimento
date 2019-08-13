const db = require('../config/connection')

//funções crud pagamento
async function listar() {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query('SELECT * FROM pagamento', (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)

  })
  return pagamento
}

async function listarUm(id) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT * FROM pagamento WHERE id='${id}'`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)
  })
  return pagamento
}
// Teste 
async function listarPeloUsuario(id_usuario) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT * FROM pagamento WHERE Id_Usuario='${id_usuario}'`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)
  })
  return pagamento
}
// fim Teste

async function adicionar(Token, DataEmissao, DataVencimento, StatusPagamento, Id_Usuario, Id_Taxa) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`INSERT INTO pagamento (Token,DataEmissao, DataVencimento,StatusPagamento,Id_Usuario, Id_Taxa) VALUES ('${Token}', '${DataEmissao}', '${DataVencimento}','${StatusPagamento}','${Id_Usuario}','${Id_Taxa}')`, (err, result) => {
        if (err) {
          console.log(`erro ao cadastrar ${err}`)
        }
        console.log('cadastrado com sucesso')
      })
    }, 80)
  })
}

async function modificar(id, nome, email) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`UPDATE pagamento SET nome="${nome}", email="${email}" WHERE id="${id}"`, (err, result) => {
        if (err) {
          console.log(`erro ao modificar pagamento ${err}`)
        }
        console.log(`pagamento modificado com sucesso: ${result.affectedRows}`)
      })
    })
  }, 80)
}

async function excluir(id) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`DELETE FROM pagamento WHERE id='${id}'`, (err, result) => {
        if (err) {
          console.log(`erro ao excluir pagamento ${err}`)
        }
        console.log(`pagamento excluído com sucesso: ${result}`)
      })
    })
  }, 80)
}

async function calcular_ano(ano) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT SUM(VALOR) AS total FROM CONTA WHERE YEAR(DATAEMISSAO) = ${ano}`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)

  })
  return pagamento
}

async function calcularAno(ano) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT year(p.DataEmissao) as 'ano', month(p.DataEmissao) as 'mes', sum(t.Valor) as 'valor'
            from Taxa as t
            join Pagamento as p
            on t.IdTaxa = p.Id_Taxa
            where year(p.DataEmissao) = 2019 and p.statusPagamento = 1
            group by ano, mes
            order by ano, mes asc;`, (err, rows, fields) => {
          resolve(JSON.parse(JSON.stringify(rows)))
        })
    }, 80)

  })
  return pagamento
}

async function calcularAno_inadimplente(ano) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT year(p.DataVencimento) as 'ano', month(p.DataVencimento) as 'mes', sum(t.Valor) as 'valor'
            from Taxa as t
            join Pagamento as p
            on t.idTaxa = p.Id_Taxa
            where year(p.DataVencimento) = ${ano} and p.StatusPagamento = 0
            group by ano, mes
            order by ano, mes asc;`, (err, rows, fields) => {
          resolve(JSON.parse(JSON.stringify(rows)))
        })
    }, 80)

  })
  return pagamento
}

module.exports = { listar, adicionar, listarUm, modificar, excluir, calcular_ano, calcularAno, calcularAno_inadimplente, listarPeloUsuario }