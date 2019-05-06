-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-04-2019 a las 03:13:55
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cocoshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `idCarrito` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` smallint(6) DEFAULT NULL,
  `precio` double(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`idCarrito`, `idProducto`, `cantidad`, `precio`) VALUES
(11, 16, 5, 50.00),
(12, 16, 5, 50.00),
(13, 19, 2, 1200.00),
(14, 16, 1, 10.00),
(14, 19, 1, 600.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriastatus`
--

CREATE TABLE `categoriastatus` (
  `idCategoria` tinyint(1) NOT NULL,
  `nombreCategoria` varchar(12) NOT NULL,
  `descripcionCategoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoriastatus`
--

INSERT INTO `categoriastatus` (`idCategoria`, `nombreCategoria`, `descripcionCategoria`) VALUES
(1, 'Activo', 'Sólo hace falta que hagas click en procesar'),
(2, 'Procesando', 'Tu pedido se está verificando'),
(3, 'Cancelado', 'Este pedido ha sido cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `idCompra` int(11) NOT NULL,
  `idUsuario` varchar(30) NOT NULL,
  `estatus` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`idCompra`, `idUsuario`, `estatus`) VALUES
(11, 'jh3fH17xNbQqCye2lwcK0F1dfeI3', 1),
(12, 'jh3fH17xNbQqCye2lwcK0F1dfeI3', 1),
(13, 'jh3fH17xNbQqCye2lwcK0F1dfeI3', 1),
(14, 'jh3fH17xNbQqCye2lwcK0F1dfeI3', 1);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `getuserdata`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `getuserdata` (
`idUsuario` varchar(30)
,`email` varchar(35)
,`nombre` varchar(25)
,`apellido` varchar(15)
,`telefono` varchar(12)
,`pais` varchar(150)
,`estado` varchar(150)
,`ciudad` varchar(150)
,`direccion` varchar(150)
,`codigoPostal` varchar(10)
,`nombretipodeusuario` varchar(13)
,`saldo` double(7,2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `cantidad` smallint(6) NOT NULL,
  `precio` double(7,2) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `numeroElemento` int(11) NOT NULL,
  `creadorDelObjeto` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `descripcion`, `cantidad`, `precio`, `imagen`, `numeroElemento`, `creadorDelObjeto`, `categoria`) VALUES
(14, 'No tengo una descripcion', 'No tengo una descripcion', 10, 0.00, '', 2, 'Yo mero', 'Figura'),
(16, 'No XD', 'Nada', 184, 10.00, '', 1, 'Yo', 'Manga'),
(18, '1', '2', 4, 0.00, '', 1, '3', '5'),
(19, 'MegaMadoka', 'Descripciones', 47, 600.00, '', 1, 'Yo mero', 'Manga'),
(20, '4', '3', 0, 50.00, '', 1, '2', 'Comic');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposdeusuario`
--

CREATE TABLE `tiposdeusuario` (
  `idTipoDeUsuario` tinyint(1) NOT NULL,
  `nombreTipoDeUsuario` varchar(13) NOT NULL,
  `descripcionTipoDeUsuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tiposdeusuario`
--

INSERT INTO `tiposdeusuario` (`idTipoDeUsuario`, `nombreTipoDeUsuario`, `descripcionTipoDeUsuario`) VALUES
(0, 'Cliente', 'Este es un usuario normal'),
(1, 'Administrador', 'Este no es un usuario normal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` varchar(30) NOT NULL,
  `email` varchar(35) NOT NULL,
  `idTipoDeUsuario` tinyint(1) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `pais` varchar(150) NOT NULL,
  `estado` varchar(150) NOT NULL,
  `ciudad` varchar(150) NOT NULL,
  `direccion` varchar(150) NOT NULL,
  `codigoPostal` varchar(10) NOT NULL,
  `saldo` double(7,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `email`, `idTipoDeUsuario`, `nombre`, `apellido`, `telefono`, `pais`, `estado`, `ciudad`, `direccion`, `codigoPostal`, `saldo`) VALUES
('aMz19gslaUcjleDRIe9ucplBh192', 'xd@gmail.com', 0, '1', '2', '3', '5', '6', '7', '4', '8', 0.00),
('iddelusuario', 'correo@prueba.com', 0, 'el cacas', 'hernandez', '3345697872', 'mexico', 'jalisco', 'zapopan', 'mi casa', '45159', 100.00),
('jh3fH17xNbQqCye2lwcK0F1dfeI3', 'esau.egs1@gmail.com', 0, '1', '2', '3', '5', '6', '7', '4', '8', 4390.00),
('YZK21PgdWJO5msvGGREpSikF8ki1', 'aromanomacias@gmail.com', 0, 'Antonio', 'Romano', '3345988788', 'Mexico', 'Jalisco', 'Guadalajara', 'mi kasa', '45159', 0.00);

-- --------------------------------------------------------

--
-- Estructura para la vista `getuserdata`
--
DROP TABLE IF EXISTS `getuserdata`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `getuserdata`  AS  select `usuarios`.`idUsuario` AS `idUsuario`,`usuarios`.`email` AS `email`,`usuarios`.`nombre` AS `nombre`,`usuarios`.`apellido` AS `apellido`,`usuarios`.`telefono` AS `telefono`,`usuarios`.`pais` AS `pais`,`usuarios`.`estado` AS `estado`,`usuarios`.`ciudad` AS `ciudad`,`usuarios`.`direccion` AS `direccion`,`usuarios`.`codigoPostal` AS `codigoPostal`,`tiposdeusuario`.`nombreTipoDeUsuario` AS `nombretipodeusuario`,`usuarios`.`saldo` AS `saldo` from (`usuarios` join `tiposdeusuario` on((`usuarios`.`idTipoDeUsuario` = `tiposdeusuario`.`idTipoDeUsuario`))) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`idCarrito`,`idProducto`),
  ADD KEY `ProductoCompra` (`idProducto`);

--
-- Indices de la tabla `categoriastatus`
--
ALTER TABLE `categoriastatus`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`idCompra`),
  ADD KEY `UsuarioCompra` (`idUsuario`),
  ADD KEY `StatusCompra` (`estatus`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `tiposdeusuario`
--
ALTER TABLE `tiposdeusuario`
  ADD PRIMARY KEY (`idTipoDeUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`,`idTipoDeUsuario`),
  ADD KEY `tipoDeUsuario` (`idTipoDeUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoriastatus`
--
ALTER TABLE `categoriastatus`
  MODIFY `idCategoria` tinyint(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `idCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `CarritoCompra` FOREIGN KEY (`idCarrito`) REFERENCES `compra` (`idCompra`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carritoProductos` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `StatusCompra` FOREIGN KEY (`estatus`) REFERENCES `categoriastatus` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UsuarioCompra` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `TiposDeUsuario` FOREIGN KEY (`idTipoDeUsuario`) REFERENCES `tiposdeusuario` (`idTipoDeUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
