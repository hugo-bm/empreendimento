const db = require('../config/connection')

//funções crud pagamento
async function listar() {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query('SELECT * FROM PAGAMENTO', (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)

  })
  return pagamento
}

async function listarUm(id) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT * FROM PAGAMENTO WHERE ID='${id}'`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)
  })
  return pagamento
}

async function listarPeloUsuario(id_usuario) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT *, DATEDIFF( CURDATE(), P.DATAVENCIMENTO) AS 'TEMPOATRASO' FROM PAGAMENTO AS P WHERE ID_USUARIO='${id_usuario}';`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)
  })
  return pagamento
}


async function adicionar(Token, DataEmissao, DataVencimento, StatusPagamento, Id_Usuario, Id_Taxa) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`INSERT INTO PAGAMENTO (TOKEN,DATAEMISSAO, DATAVENCIMENTO,STATUSPAGAMENTO,ID_USUARIO, ID_TAXA) VALUES ('${Token}', '${DataEmissao}', '${DataVencimento}','${StatusPagamento}','${Id_Usuario}','${Id_Taxa}')`, (err, result) => {
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
      db.connection.query(`UPDATE PAGAMENTO SET NOME="${nome}", EMAIL="${email}" WHERE ID="${id}"`, (err, result) => {
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
      db.connection.query(`DELETE FROM PAGAMENTO WHERE ID='${id}'`, (err, result) => {
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
      db.connection.query(`SELECT SUM(VALOR) AS TOTAL FROM CONTA WHERE YEAR(DATAEMISSAO) = ${ano}`, (err, rows, fields) => {
        resolve(JSON.parse(JSON.stringify(rows)))
      })
    }, 80)

  })
  return pagamento
}

async function calcularAno(ano) {// Modificado para verificar o trimestre e o valor por mês em determinado ano
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      db.connection.query(`SELECT QUARTER(P.DATAEMISSAO)  AS 'TRIMESTRE', QUARTER(CURDATE())  AS 'TRIMESTREATUAL', 
      CASE WHEN MONTH(P.DATAEMISSAO) in (1,4,7,10) THEN 0 
         WHEN MONTH(P.DATAEMISSAO) in (2,5,8,11) THEN 1 
         WHEN MONTH(P.DATAEMISSAO) in (3,6,9,12) THEN 2 
         END AS ORDEMTRIMESTRE,YEAR(P.DATAEMISSAO) AS 'ANO', MONTH(P.DATAEMISSAO) AS 'MES', SUM(T.VALOR) AS 'VALOR'
   FROM TAXA AS T
   JOIN PAGAMENTO AS P
    ON T.IDTAXA = P.ID_TAXA
    WHERE YEAR(P.DATAEMISSAO) = ${ano} AND P.STATUSPAGAMENTO = 1
    GROUP BY TRIMESTRE, TRIMESTREATUAL, ORDEMTRIMESTRE, ANO, MES, VALOR
    ORDER BY ANO, MES ASC, VALOR;`, (err, rows, fields) => {
          resolve(JSON.parse(JSON.stringify(rows)))
        })
    }, 80)

  })
  return pagamento
}
// Modificado: Agora demonstra os atrasos mês a mês 
async function calcularAno_inadimplente(ano) {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      
      db.connection.query(`SELECT YEAR(P.DATAVENCIMENTO) AS 'ANO', MONTH(P.DATAVENCIMENTO) AS 'MES', SUM(T.VALOR) AS 'VALOR'
      FROM TAXA AS T
      JOIN PAGAMENTO AS P
      ON T.IDTAXA = P.ID_TAXA
      WHERE YEAR(P.DATAVENCIMENTO) = ${ano} AND P.STATUSPAGAMENTO = 0
      GROUP BY ANO, MES
    ORDER BY ANO, MES ASC;`, (err, rows, fields) => {
          resolve(JSON.parse(JSON.stringify(rows)))
        })
    }, 80)

  })
  return pagamento
}

async function inadimplente() {
  let pagamento = new Promise((resolve, reject) => {
    setTimeout(() => {
      // WHERE  p.DataVencimento <= CURDATE() and P.STATUSPAGAMENTO = 0  MODO CORRETO DE USAR
      db.connection.query(`SELECT SUM(T.VALOR) AS 'VALOR',U.NOME AS 'NOME', U.EMAIL AS 'EMAIL',  DATEDIFF( CURDATE(), P.DATAVENCIMENTO) AS 'TEMPOATRASO'
      FROM USUARIO AS U 
      INNER JOIN PAGAMENTO AS P
      ON U.IDUSUARIO = P.ID_USUARIO
      INNER JOIN TAXA AS T 
      ON T.IDTAXA = P.ID_TAXA
      WHERE  P.DATAVENCIMENTO >= CURDATE() AND P.STATUSPAGAMENTO = 0
      GROUP BY  NOME,EMAIL, TEMPOATRASO
      ORDER BY TEMPOATRASO DESC;`, (err, rows, fields) => {
          resolve(JSON.parse(JSON.stringify(rows)))
        })
    }, 80)

  })
  return pagamento
}

module.exports = { listar, adicionar, listarUm, modificar, excluir, calcular_ano, calcularAno, calcularAno_inadimplente, listarPeloUsuario, inadimplente }