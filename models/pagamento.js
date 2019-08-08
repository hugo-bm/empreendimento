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

async function adicionar(nome, email) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`INSERT INTO pagamento (nome, email) VALUES ('${nome}', '${email}')`, (err, result) => {
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
      db.connection.query(`SELECT SUM(VALOR) AS total FROM CONTA WHERE YEAR(DATAPAGAMENTO) = ${ano}`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)

  })
  return pagamento
}

async function calcularAno(ano) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT year(p.datapagamento) as 'ano', month(p.datapagamento) as 'mes', sum(t.valor) as 'valor'
            from taxa as t
            join pagamento as p
            on t.idtaxa = p.id_taxa
            where year(datapagamento) = ${ano} and p.statuspagamento = 1
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
      db.connection.query(`SELECT year(p.datapagamento) as 'ano', month(p.datapagamento) as 'mes', sum(t.valor) as 'valor'
            from taxa as t
            join pagamento as p
            on t.idtaxa = p.id_taxa
            where year(datapagamento) = ${ano} and p.statuspagamento = 0
            group by ano, mes
            order by ano, mes asc;`, (err, rows, fields) => {
          resolve(JSON.parse(JSON.stringify(rows)))
        })
    }, 80)

  })
  return pagamento
}

module.exports = { listar, adicionar, listarUm, modificar, excluir, calcular_ano, calcularAno, calcularAno_inadimplente }