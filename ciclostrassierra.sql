
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";




--
-- Base de datos: `ciclostrassierra`
--


DROP SCHEMA IF EXISTS ciclostrassierra ;

-- -----------------------------------------------------
-- 
-- -----------------------------------------------------
CREATE SCHEMA ciclostrassierra DEFAULT CHARACTER SET utf8 ;
USE ciclostrassierra ;




--
-- Estructura de tabla para la tabla `alumnos`
--
DROP TABLE IF EXISTS alumnos ;
CREATE TABLE `alumnos` (
  `idAlumno` smallint(5) UNSIGNED NOT NULL,
  `apellidosNombre` varchar(50) NOT NULL,
  `idCurso` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`idAlumno`, `apellidosNombre`, `idCurso`) VALUES
(1, 'Perez Castillo, Juan', '1DAW'),
(2, 'Alvarez Castillo, Ana', '2DAW'),
(3, 'Cano Pedroche, Silvia', '1DAW'),
(4, 'Gomez Rodriguez, Roberto', '2DAW'),
(5, 'Zarrias Benavente, Julio', '1DAW'),
(6, 'Sanchez, Teruel, Patricia', '2DAW'),
(7, 'Villar Morales, Sebastian', '2DAMS'),
(8, 'Aguayo Sanz, Julia', '1DAMS'),
(9, 'Postigo Jimenez, Carmen', '2DAWS'),
(10, 'Melendez Hernandez, Maria', '1DAWS'),
(11, 'Montoya Lopez, Beatriz', '2DAMS'),
(12, 'Cantero Romero, Luis', '1DAMS'),
(13, 'Macias Aro, Francisco', '2DAWS'),
(14, 'Perez Fuentes, Araceli', '1DAMS'),
(15, 'Marta Lopez, Felix', '1DAWS'),
(16, 'Jimenez Mateo, Pedro', '2DAMS'),
(17, 'Santiago Paez, Jesus', '2DAWS'),
(18, 'Mateo Maya, Amancio', '1DAWS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--
DROP TABLE IF EXISTS calificaciones ;
CREATE TABLE `calificaciones` (
  `idCalificaciones` smallint(5) UNSIGNED NOT NULL,
  `idCurso` varchar(10) NOT NULL,
  `idModulo` varchar(8) NOT NULL,
  `idAlumno` smallint(5) UNSIGNED NOT NULL,
  `calificacion` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`idCalificaciones`, `idCurso`, `idModulo`, `idAlumno`, `calificacion`) VALUES
(67, '1DAW', 'PROG', 1, 'Sob'),
(68, '1DAW', 'PROG', 3, 'Sob'),
(69, '1DAW', 'PROG', 5, 'Sob'),
(70, '1DAW', 'PROG', 5, 'B'),
(71, '1DAW', 'PROG', 1, 'Sob'),
(72, '1DAW', 'PROG', 3, 'Ins'),
(73, '1DAWS - De', 'LM - Len', 18, 'Not'),
(74, '1DAWS - De', 'LM - Len', 10, 'B'),
(75, '1DAWS - De', 'LM - Len', 15, 'Sob');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--
DROP TABLE IF EXISTS cursos ;
CREATE TABLE `cursos` (
  `idCurso` varchar(10) NOT NULL,
  `descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`idCurso`, `descripcion`) VALUES
('1DAMS', 'Desarrollo de Aplicaciones Multiplataforma -semipr'),
('1DAW', 'Desarrollo de Aplicaciones Web -presencial-'),
('1DAWS', 'Desarrollo de Aplicaciones Web -semipresencial-'),
('2DAMS', 'Desarrollo de Aplicaciones Multiplataforma -semipr'),
('2DAW', 'Desarrollo de Aplicaciones Web -presencial-'),
('2DAWS', 'Desarrollo de Aplicaciones Web -semipresencial-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--
DROP TABLE IF EXISTS modulos ;
CREATE TABLE `modulos` (
  `idModulo` varchar(8) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `idCurso` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `modulos`
--

INSERT INTO `modulos` (`idModulo`, `descripcion`, `idCurso`) VALUES
('BD', 'Bases De Datos', '1DAMS'),
('DAW', 'Despliegue de aplicaciones web', '2DAW'),
('DI', 'D. de Interfaces', '2DAMS'),
('DIW', 'D. de Interfaces web', '2DAWS'),
('DIWS', 'D. de Interfaces web', '2DAW'),
('DWEC', 'Desarrollo Aplicaciones Entorno Cliente', '2DAWS'),
('DWES', 'Desarrollo Aplicaciones Entorno Servidor', '2DAWS'),
('EIE', 'Empresa Iniciativa Emprendedora', '2DAW'),
('EN', 'Entornos', '1DAW'),
('ENS', 'Entornos', '1DAWS'),
('LM', 'Lenguajes de Marca', '1DAWS'),
('PROG', 'Programacion', '1DAW'),
('PROGS', 'Programacion', '1DAWS'),
('PSP', 'Programacion de servicios', '2DAMS'),
('SGE', 'Sistemas Gestion Empresarial', '2DAMS'),
('SI', 'Sistemas Informaticos', '1DAW'),
('SIS', 'Sistemas Informaticos', '1DAMS');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`idAlumno`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`idCalificaciones`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idCurso`);

--
-- Indices de la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`idModulo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `idAlumno` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `idCalificaciones` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

