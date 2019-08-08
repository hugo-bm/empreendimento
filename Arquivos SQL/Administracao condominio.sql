/*criando as tabelas*/

CREATE TABLE Empreendimento (
  IdEmpreendimento INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(60) NOT NULL,
  Bloco CHAR(3) NOT NULL,
  Apartamento CHAR(4) NOT NULL
);

CREATE TABLE Usuario (
  IdUsuario INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(60) NOT NULL,
  Email VARCHAR(80) NOT NULL UNIQUE,
  Senha VARCHAR(8) NOT NULL,
  DataCadastro DATETIME NOT NULL DEFAULT NOW(),
  Id_Empreendimento INT NOT NULL
);

CREATE TABLE Taxa (
  IdTaxa INT PRIMARY KEY AUTO_INCREMENT,
  Tipo ENUM('condominio', 'servico', 'cotaExtra','multa') NOT NULL DEFAULT 'condominio',
  Valor FLOAT(10,2) NOT NULL,
  Descricao VARCHAR(255),
  DataCadastro DATETIME NOT NULL DEFAULT NOW()
);

CREATE TABLE Pagamento (
  IdPagamento INT PRIMARY KEY AUTO_INCREMENT,
  DataPagamento DATETIME NOT NULL DEFAULT NOW(),
  StatusPagamento BOOLEAN NOT NULL,
  Id_Usuario INT NOT NULL,
  Id_Taxa INT NOT NULL
);



/*adicionando as constraints*/
ALTER TABLE Usuario
ADD CONSTRAINT FK_UsuarioEmpreendimento
FOREIGN KEY (Id_Empreendimento) REFERENCES Empreendimento (IdEmpreendimento);

ALTER TABLE Pagamento
ADD CONSTRAINT FK_PagamentoUsuario
FOREIGN KEY (Id_Usuario) REFERENCES Usuario (IdUsuario);

ALTER TABLE Pagamento
ADD CONSTRAINT FK_PagamentoTaxa
FOREIGN KEY (Id_Taxa) REFERENCES Taxa (IdTaxa);


/*Inserindo dados do empreendimento*/

INSERT INTO Empreendimento VALUES
(null, 'Niagara', '1', '501'),
(null, 'Niagara', '1', '502'),
(null, 'Niagara', '1', '503'),
(null, 'Niagara', '1', '504'),
(null, 'Niagara', '1', '505'),
(null, 'Niagara', '1', '506'),
(null, 'Niagara', '1', '507');

/*Inserindo dados do cliente*/

INSERT INTO Usuario (Nome, Email, Senha, Id_Empreendimento) VALUES
('Alex Reis', 'alex.reis@gmail.com', 'al3xal3x', '1'),
('Leandro Barata', 'leandro.Barata@hotmail.com', 'b4r4t4', '2'),
('Pedro Azeredo', 'pedro.azeredo@uol.com', 'p3dr0', '3'),
('João Gonçalves', 'joao.goncalves@outlook.com', 'maozao', '4'),
('Felipe Diniz', 'felipe.diniz@infraero.com', 'f3l1p3', '5'),
('Fábio Tartaruga', 'fabio.tartaruga@gmail.com', 'pizza', '6'),
('Alex Rodrigues', 'alex.rodrigues@terra.com.br', 'surubim', '7'),
('Marcelo Cerrador', 'marcelo.cerrador@ig.com', 'chato', '8'),
('David Mussel', 'david.mussel@disk.com', 'nadafaz', '9'),
('Vinicius Araújo', 'vinicius.araujo@ilha.com.br', 'mulekpir', '10'),
('André Pereira', 'andre.pereira@easy.com', 'zecascao', '11'),
('Guilherme Loyola', 'guilherme.loyola@ziva.com', 'gmarra', '12'),
('Regina Naked', 'regina.naked@chada.com.br', 'chata', '13'),
('Kleber Rabelo', 'kleber.rabelo@coord.com', 'faznada', '14');


/*Insedindo dados das taxas*/

INSERT INTO Taxa (Tipo, Valor) VALUES
('condominio', '280.00'),
('servico', '280.00');

INSERT INTO Pagamento (DataPagamento, StatusPagamento, Id_Usuario, Id_Taxa) VALUES
('2019-05-10','0', '16', '1'),
('2019-05-10','1', '17', '1'),
('2019-05-10','0', '18', '1'),
('2019-05-10','1', '19', '1'),
('2019-05-10','1', '20', '1'),
('2019-05-10','1', '21', '1'),
('2019-05-10','1', '22', '1'),
('2019-05-10','0', '23', '1'),
('2019-05-10','1', '24', '1'),
('2019-05-10','1', '25', '1'),
('2019-05-10','0', '26', '1'),
('2019-05-10','0', '16', '1'),
('2019-05-10','1', '17', '1'),
('2019-05-10','0', '18', '1'),
('2019-05-10','1', '19', '1'),
('2019-05-10','1', '20', '1'),
('2019-05-10','1', '21', '1'),
('2019-05-10','1', '22', '1'),
('2019-05-10','0', '23', '1'),
('2019-05-10','1', '24', '1'),
('2019-05-10','1', '25', '1'),
('2019-05-10','0', '26', '1'),
('2019-05-10','1', '17', '1');

/*esboço das query*/


select IdPagamento as código, DataPagamento, StatusPagamento, c.Nome, t.tipo from pagamento as p
join Usuario as u
on p.id_Usuario=u.idUsuario
join taxa as t
on p.id_taxa=t.idtaxa;

select u.nome as 'Nome Morador', e.nome as 'Prédio', e.bloco, e.apartamento from usuario as u
join empreendimento as e
on u.id_empreendimento=e.idempreendimento;


SELECT u.nome as Morador, p.DataPagamento from pagamento as p
join usuario as u
on p.id_usuario = c.idusuario;

/*Selecao mes-a-mes*/
SELECT sum(valor) as valor from taxa as t
join pagamento as p
on t.idtaxa = p.id_taxa
where year(p.datapagamento) = 2019 and month(p.datapagamento) = 8;

/*selecao de todos os meses de um ano*/
SELECT year(p.datapagamento) as 'ano', month(p.datapagamento) as 'mes', sum(t.valor) as 'valor'
from taxa as t
join pagamento as p
on t.idtaxa = p.id_taxa
group by ano, mes
order by ano, mes asc;
