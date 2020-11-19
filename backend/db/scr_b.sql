DROP TABLE IF EXISTS tblranking;
DROP TABLE IF EXISTS tblusuario;
DROP TABLE IF EXISTS tblvideo;
DROP TABLE IF EXISTS tbljuego;
DROP TABLE IF EXISTS tbl_test;

CREATE TABLE tblusuario  (
  id int(5) NOT NULL AUTO_INCREMENT,
  documento varchar(20)  NOT NULL,
  nombres varchar(255) NOT NULL,
  contrasena varchar(80) NULL DEFAULT NULL,
  correo varchar(100) NULL DEFAULT NULL,
  grado varchar(3) not NULL ,
  PRIMARY KEY (id) 
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci; 


CREATE TABLE tblvideo (
  id_video int(5) NOT NULL AUTO_INCREMENT,
  Link varchar(255) NOT NULL,
  fecha_creacion timestamp NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id_video) 
) ENGINE = InnoDB; 




CREATE TABLE tbl_test(
  id_j int(5) NOT NULL AUTO_INCREMENT,
  pregunta varchar(255) NOT NULL,
  op1 varchar(60) NOT NULL,
  op2 varchar(60) NOT NULL,
  op3 varchar(60) NOT NuLL,
  respuest varchar(5) NOT NULL,
  puntos int(5) NULL DEFAULT 100,
  PRIMARY KEY (id_j) 
) ENGINE = InnoDB; 


CREATE TABLE tblranking(
  consecutivo int(5) NOT NULL AUTO_INCREMENT,
  id_pre int(10) NOT NULL, 
  id_usuario int(5) not null,
  puntos int(5) NULL DEFAULT 0,
  
  PRIMARY KEY (consecutivo),
  FOREIGN KEY (id_usuario) REFERENCES tblusuario (id) ,
FOREIGN KEY (id_pre) REFERENCES tbl_test(id_j)   
) ENGINE = InnoDB; 
