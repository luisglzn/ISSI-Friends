INSERT INTO provinces
VALUES
	(1,'Sevilla'),
	(2,'Córdoba'),
	(3,'Huelva'),
	(4,'Cádiz');
	
INSERT INTO municipalities
VALUES
	(1,1,'Sevilla'),
	(2,1,'Gines'),
	(3,1,'Aznalcollar'),
	(4,2,'Cabra'),
	(5,3,'Matalascañas'),
	(6,4,'Tarifa'),
	(7,3,'Almonte');
	

INSERT INTO postcodes
VALUES
	(1,1,41001),
	(2,2,41960),
	(3,3,41870),
	(4,4,14940),
	(5,5,21760),
	(6,6,11380),
	(7,7,21730);
	
INSERT INTO hobbies
VALUES
	(1,'Videojuegos'),
	(2,'Series'),
	(3,'Deportes'),
	(4,'Leer'),
	(5,'Música');
	

INSERT INTO users
VALUES
	(1,'luigonloz','luigonloz@alum.us.es','pbkdf2:sha256:150000$NMc0SfFy$ef2320558f69043d6568c757cc4ce89c5747f6e08a4c7386a878708309ac6bbc',"https://i.ytimg.com/vi/jA4sv3zPUsY/maxresdefault.jpg",'2002-02-21',CURRENT_TIMESTAMP(),NULL,'male','black','black',185,70,'Estudiante Ingenieria Informatica','Calle Tarfia',1,NULL,NULL),
	(2,'adrgonriv','adrgonriv@alum.us.es','pbkdf2:sha256:150000$E8hChihI$f8bfbcbcb86e7c254d5d76660f8be16d11064efa0bac18e8fa98e07c8aa58238',"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Juan_y_Medio-jul_2018.jpg/640px-Juan_y_Medio-jul_2018.jpg",'2002-02-22',CURRENT_TIMESTAMP(),NULL,'male','brunette','black',175,70,'Estudiante Ingenieria Informatica','Calle Tarfia',1,NULL,NULL),
	(3,'alenavher','alenavher@alum.us.es','pbkdf2:sha256:150000$MdWF5ZTy$2e8015f02bcfcf90daf0952a2acb72529848a5a924ec943875f2aad8f5762f8a',"https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/171.png",'2002-02-23',CURRENT_TIMESTAMP(),NULL,'male','blonde','black',177,70,'Estudiante Ingenieria Informatica','Calle Tarfia',3,NULL,NULL),
	(4,'ismelel','ismelel@alum.us.es','pbkdf2:sha256:150000$Ff1POpfs$4eff13682008e621c2d5413e98030307fadc511708f06427355c91752a3d9008',"https://w7.pngwing.com/pngs/147/495/png-transparent-smiley-thumb-signal-emoticon-meme-smiley-love-miscellaneous-face.png",'2002-02-24',CURRENT_TIMESTAMP(),NULL,'male','black','black',185,180,'Estudiante Ingenieria Informatica','Calle Tarfia',1,NULL,NULL),
	(5,'julgarrei','julgarrei@alum.us.es','pbkdf2:sha256:150000$AlcsMyiq$f5d8a53472676ae7f478a1406a0418c48c3ee7b6ccdcc987f377a1b2308528ac',"https://ih1.redbubble.net/image.1007832130.7677/pp,504x498-pad,600x600,f8f8f8.jpg",'2002-02-25',CURRENT_TIMESTAMP(),NULL,'male','black','black',178,70,'Estudiante Ingenieria Informatica','Calle Tarfia',1,NULL,NULL),
	(6,'admin','admin@gmail.com','pbkdf2:sha256:150000$g0L0cApE$7862620fafacdcb157875509cbbfd3698cc137c50151d481f6a7e74cfb5d7fcd','https://img2.freepng.es/20190727/ipi/kisspng-user-login-manager-transparency-computer-software-5d3c0cb3cc3c48.5570651915642164998366.jpg','2000-05-27',CURRENT_TIMESTAMP(),NULL,'other','black','black',170,70,'Usuario creado para el profesor', 'Universidad de Sevilla',1,NULL,NULL),
	(7,'usuariosinfotos','usuariosinfotos@gmail.com','pbkdf2:sha256:150000$56ChPwHs$1f82c8eee6b0b83f4b0a5858061d389d84d3f242c136537cb88b7bd20932f678','https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=20','2000-05-27',CURRENT_TIMESTAMP(),NULL,'other','black','black',170,70,'Usuario sin fotos para borrar perfil', 'Universidad de Sevilla',1,NULL,NULL);
INSERT INTO userhobbies
VALUES
	(1,1,1),
	(2,2,1),
	(3,3,5),
	(4,4,2),
	(5,5,1),
	(6,6,1);

INSERT INTO pictures
VALUES
	(1,'relajao','relajao','https://preview.redd.it/ggamj6wpz9e51.jpg?auto=webp&s=1affc3bf83675085ef2b7e9c967fd3979ee072a6',1),
	(2,'elden ring','juegazo','https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png',2),
	(3,'kudasai','kudasai best pilar','https://somoskudasai.com/wp-content/uploads/2021/12/portada_kimetsu-262.jpg',3),
	(4,'kindred','main kindred desde la beta','http://pm1.narvii.com/6334/f9988b0a34285ea2338d6638af14898b89617b29_00.jpg',4),
	(5,'one piece','soy otaku y me flipa one piece','https://areajugones.sport.es/wp-content/uploads/2022/04/one-piece-pirate-king-1080x609.jpg',5),
	(6,'Universidad de Sevilla', 'Universidad Sevilla', 'https://www.informatica.us.es/docs/imagen-etsii/MarcaUS.png',6),
	(7,'Padre', 'Se hizo a Faker', 'https://pbs.twimg.com/media/Dxv-zXSX4AEJvvi.jpg', 1),
	(8,'Chupo Montero','Feliz con el primo','https://media.vandal.net/m/2-2021/202121216385133_11.jpg.webp',1),
	(9,'Peinandose','#humor', 'https://thumbs.dreamstime.com/b/hombre-adulto-calvo-con-el-peine-105127692.jpg',1),
	(10,'Una bromita suave', 'No tan broma en realidad','https://pbs.twimg.com/media/EgV5Rx2XYAcPLA0.jpg',1);
