-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Tempo de geração: 13/08/2019 às 04:14
-- Versão do servidor: 5.6.15-log
-- Versão do PHP: 5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `condominio`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `empreendimento`
--
-- Criação: 12/08/2019 às 01:36
-- Última atualização: 12/08/2019 às 01:36
--

CREATE TABLE IF NOT EXISTS `empreendimento` (
  `IdEmpreendimento` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(60) NOT NULL,
  `Bloco` char(3) NOT NULL,
  `Apartamento` char(4) NOT NULL,
  PRIMARY KEY (`IdEmpreendimento`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=85 ;

--
-- Fazendo dump de dados para tabela `empreendimento`
--

INSERT INTO `empreendimento` (`IdEmpreendimento`, `Nome`, `Bloco`, `Apartamento`) VALUES
(1, 'Bons Ventos', '2', '101'),
(2, 'Bons Ventos', '2', '102'),
(3, 'Bons Ventos', '2', '103'),
(4, 'Bons Ventos', '2', '104'),
(5, 'Bons Ventos', '2', '105'),
(6, 'Bons Ventos', '2', '106'),
(7, 'Bons Ventos', '2', '107'),
(8, 'Bons Ventos', '2', '201'),
(9, 'Bons Ventos', '2', '202'),
(10, 'Bons Ventos', '2', '203'),
(11, 'Bons Ventos', '2', '204'),
(12, 'Bons Ventos', '2', '205'),
(13, 'Bons Ventos', '2', '206'),
(14, 'Bons Ventos', '2', '207'),
(15, 'Bons Ventos', '2', '301'),
(16, 'Bons Ventos', '2', '302'),
(17, 'Bons Ventos', '2', '303'),
(18, 'Bons Ventos', '2', '304'),
(19, 'Bons Ventos', '2', '305'),
(20, 'Bons Ventos', '2', '306'),
(21, 'Bons Ventos', '2', '307'),
(22, 'Bons Ventos', '2', '401'),
(23, 'Bons Ventos', '2', '402'),
(24, 'Bons Ventos', '2', '403'),
(25, 'Bons Ventos', '2', '404'),
(26, 'Bons Ventos', '2', '405'),
(27, 'Bons Ventos', '2', '406'),
(28, 'Bons Ventos', '2', '407'),
(29, 'Bons Ventos', '2', '501'),
(30, 'Bons Ventos', '2', '502'),
(31, 'Bons Ventos', '2', '503'),
(32, 'Bons Ventos', '2', '504'),
(33, 'Bons Ventos', '2', '505'),
(34, 'Bons Ventos', '2', '506'),
(35, 'Bons Ventos', '2', '507'),
(36, 'Bons Ventos', '2', '601'),
(37, 'Bons Ventos', '2', '602'),
(38, 'Bons Ventos', '2', '603'),
(39, 'Bons Ventos', '2', '604'),
(40, 'Bons Ventos', '2', '605'),
(41, 'Bons Ventos', '2', '606'),
(42, 'Bons Ventos', '2', '607'),
(43, 'Bons Ventos', '2', '701'),
(44, 'Bons Ventos', '2', '702'),
(45, 'Bons Ventos', '2', '703'),
(46, 'Bons Ventos', '2', '704'),
(47, 'Bons Ventos', '2', '705'),
(48, 'Bons Ventos', '2', '706'),
(49, 'Bons Ventos', '2', '707'),
(50, 'Bons Ventos', '2', '801'),
(51, 'Bons Ventos', '2', '802'),
(52, 'Bons Ventos', '2', '803'),
(53, 'Bons Ventos', '2', '804'),
(54, 'Bons Ventos', '2', '805'),
(55, 'Bons Ventos', '2', '806'),
(56, 'Bons Ventos', '2', '807'),
(57, 'Bons Ventos', '2', '901'),
(58, 'Bons Ventos', '2', '902'),
(59, 'Bons Ventos', '2', '903'),
(60, 'Bons Ventos', '2', '904'),
(61, 'Bons Ventos', '2', '905'),
(62, 'Bons Ventos', '2', '906'),
(63, 'Bons Ventos', '2', '907'),
(64, 'Bons Ventos', '2', '1001'),
(65, 'Bons Ventos', '2', '1002'),
(66, 'Bons Ventos', '2', '1003'),
(67, 'Bons Ventos', '2', '1004'),
(68, 'Bons Ventos', '2', '1005'),
(69, 'Bons Ventos', '2', '1006'),
(70, 'Bons Ventos', '2', '1007'),
(71, 'Bons Ventos', '2', '1101'),
(72, 'Bons Ventos', '2', '1102'),
(73, 'Bons Ventos', '2', '1103'),
(74, 'Bons Ventos', '2', '1104'),
(75, 'Bons Ventos', '2', '1105'),
(76, 'Bons Ventos', '2', '1106'),
(77, 'Bons Ventos', '2', '1107'),
(78, 'Bons Ventos', '2', '1201'),
(79, 'Bons Ventos', '2', '1202'),
(80, 'Bons Ventos', '2', '1203'),
(81, 'Bons Ventos', '2', '1204'),
(82, 'Bons Ventos', '2', '1205'),
(83, 'Bons Ventos', '2', '1206'),
(84, 'Bons Ventos', '2', '1207');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pagamento`
--
-- Criação: 13/08/2019 às 00:54
-- Última atualização: 13/08/2019 às 00:54
--

CREATE TABLE IF NOT EXISTS `pagamento` (
  `IdPagamento` int(11) NOT NULL AUTO_INCREMENT,
  `Token` varchar(60) NOT NULL,
  `DataEmissao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DataVencimento` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DataPagamento` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `StatusPagamento` tinyint(1) NOT NULL,
  `Id_Usuario` int(11) NOT NULL,
  `Id_Taxa` int(11) NOT NULL,
  PRIMARY KEY (`IdPagamento`),
  KEY `FK_PagamentoUsuario` (`Id_Usuario`),
  KEY `FK_PagamentoTaxa` (`Id_Taxa`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Fazendo dump de dados para tabela `pagamento`
--

INSERT INTO `pagamento` (`IdPagamento`, `Token`, `DataEmissao`, `DataVencimento`, `DataPagamento`, `StatusPagamento`, `Id_Usuario`, `Id_Taxa`) VALUES
(1, 'zxpkVRJXCo4MltMR_ce92mdSGWxFzyYXT1v-X88iKz4=', '2019-08-10', '2019-08-30 ', '2019-08-12 21:54:08', 0, 1, 1),
(2, 'z_dRoLOTf8hh6AJak8UV_8sw-hI70oenEEPquTG4TJU=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 1, 1),
(3, 'jyD-7m-tTXS9X3aKXnJobVdlBHv7Ou-D6zNX-vbZ1_g=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 0, 1),
(4, '2b8s22uO8695RlmznSBEXUzsmehxDYS8EN1nk2OEO38=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 0, 2, 1),
(5, 'M7Tov4VF1I8ZFVhbjEVpE7FTMsYFx9cwXIbAB61LOsA=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 0, 2, 1),
(6, 'tRQrtG1AXil4pwc8fx-fSPpAxZ8Vt2JfxVFgXT1nFzI=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 0, 1, 1),
(7, 'VsNzLvwBX3jNKhd8sfvK1P4R4udWdPdsauW-Zr-TRz0=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 1, 1),
(8, '3kWaTRAVXTpc3FcBVLQmBb7z4iOvu58EAdefdIqAAuw=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 0, 1, 1),
(9, 'xqs5ECTbSBzpQv4O7vFkyxTxjmB9lYz_fMK61_63T1g=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 1, 1),
(10, 'Z0UHIXgks4_D4tTpwbYTWkjlkqWNqwv1rh6Y44b-xPc=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 2, 1),
(11, 'VFq3DA4Z7w6zTgJmWq2_NTBp8GEDJPFZnXzX0a0wTrs=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 2, 1),
(12, 'Ur8tIQwxMG4tMqXEdB54eIqwsaLnRSQMf9zkb486A7A=', '2019-08-12 ', '2019-09-12 ', '2019-08-12 21:54:08', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `taxa`
--
-- Criação: 12/08/2019 às 01:37
-- Última atualização: 12/08/2019 às 01:38
--

CREATE TABLE IF NOT EXISTS `taxa` (
  `IdTaxa` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo` enum('condominio','servico','cotaExtra','multa') NOT NULL DEFAULT 'condominio',
  `Valor` float(10,2) NOT NULL,
  `Descricao` varchar(255) DEFAULT NULL,
  `DataCadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IdTaxa`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Fazendo dump de dados para tabela `taxa`
--

INSERT INTO `taxa` (`IdTaxa`, `Tipo`, `Valor`, `Descricao`, `DataCadastro`) VALUES
(1, 'condominio', 310.00, 'atualização da cota condominial', '2019-08-11 22:38:57');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--
-- Criação: 12/08/2019 às 12:29
-- Última atualização: 12/08/2019 às 20:26
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `IdUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(60) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Senha` varchar(8) NOT NULL,
  `Cpf` varchar(20) NOT NULL,
  `DataCadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Id_Empreendimento` int(11) NOT NULL,
  `statusCliente` int(11) NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `Cpf` (`Cpf`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Fazendo dump de dados para tabela `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `Nome`, `Email`, `Senha`, `Cpf`, `DataCadastro`, `Id_Empreendimento`, `statusCliente`) VALUES
(1, 'Alex Reis', 'alex.reis@gmail.com', 'al3xal3x', '222.222.222-22', '2019-08-12 09:30:33', 1, 1),
(2, 'Leandro Barata', 'leandro.Barata@hotmail.com', 'b4r4t4', '222.222.222-22', '2019-08-12 09:30:33', 2, 1),
(3, 'Pedro Azeredo', 'pedro.azeredo@uol.com', 'p3dr0', '222.222.222-22', '2019-08-12 09:30:33', 3, 1),
(4, 'João Gonçalves', 'joao.goncalves@outlook.com', 'maozao', '222.222.222-22', '2019-08-12 09:30:33', 4, 1),
(5, 'Felipe Diniz', 'felipe.diniz@infraero.com', 'f3l1p3', '222.222.222-22', '2019-08-12 09:30:33', 5, 1),
(6, 'Fábio Tartaruga', 'fabio.tartaruga@gmail.com', 'pizza', '222.222.222-22', '2019-08-12 09:30:33', 6, 1),
(7, 'Alex Rodrigues', 'alex.rodrigues@terra.com.br', 'surubim', '222.222.222-22', '2019-08-12 09:30:33', 7, 1),
(8, 'Marcelo Cerrador', 'marcelo.cerrador@ig.com', 'chato', '222.222.222-22', '2019-08-12 09:30:33', 8, 1),
(9, 'David Mussel', 'david.mussel@disk.com', 'nadafaz', '222.222.222-22', '2019-08-12 09:30:33', 9, 1),
(10, 'Vinicius Araújo', 'vinicius.araujo@ilha.com.br', 'mulekpir', '222.222.222-22', '2019-08-12 09:30:33', 10, 1),
(11, 'André Pereira', 'andre.pereira@easy.com', 'zecascao', '222.222.222-22', '2019-08-12 09:30:33', 11, 1),
(12, 'Guilherme Loyola', 'guilherme.loyola@ziva.com', 'gmarra', '222.222.222-22', '2019-08-12 09:30:33', 12, 1),
(13, 'Regina Naked', 'regina.naked@chada.com.br', 'chata', '222.222.222-22', '2019-08-12 09:30:33', 13, 1),
(14, 'Kleber Rabelo', 'kleber.rabelo@coord.com', 'faznada', '222.222.222-22', '2019-08-12 09:30:33', 14, 1),
(15, 'Hugo Moreno', 'hugo@hugo.com', '12345678', '222.222.222-22', '2019-08-12 17:23:27', 24, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
