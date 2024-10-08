-- DROP DATABASE royalblue;

CREATE TABLE service (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    picture TEXT NOT NULL
);

 
CREATE TABLE event (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date_start TIMESTAMP NOT NULL,
    date_end TIMESTAMP NOT NULL,
    service_id INT NOT NULL,
    FOREIGN KEY (service_id) REFERENCES service(id)
);

 
CREATE TABLE room_style (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

 
CREATE TABLE country (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
 
CREATE TABLE room (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    sea_view BOOLEAN NOT NULL,
    nb_bed INT NOT NULL,
    picture JSON ,
    price DECIMAL NOT NULL,
    description TEXT NOT NULL,
    room_style_id INT NOT NULL,
    FOREIGN KEY (room_style_id) REFERENCES room_style(id)
);

 
CREATE TABLE costumer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone INT,
    date_register DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    country_id INT,
    FOREIGN KEY (country_id) REFERENCES country(id)
);

 
CREATE TABLE reservation_service (
    costumer_id INT NOT NULL,
    service_id INT NOT NULL,
    date_start TIMESTAMP NOT NULL,
    date_end TIMESTAMP NOT NULL,
    FOREIGN KEY (costumer_id) REFERENCES costumer(id),
    FOREIGN KEY (service_id) REFERENCES service(id)
);

 
CREATE TABLE reservation_room (
    costumer_id INT NOT NULL,
    room_id INT NOT NULL,
    date_start TIMESTAMP NOT NULL,
    date_end TIMESTAMP NOT NULL,
    FOREIGN KEY (costumer_id) REFERENCES costumer(id),
    FOREIGN KEY (room_id) REFERENCES room(id)
);

INSERT INTO room_style (name) VALUES 
('Chambre Élégance'),  
('Chambre Luxe'),    
('Suite Royale'),            
('Chambre Privilège'),
('Chambre Prestige');  

INSERT INTO room (number, price, sea_view, nb_bed, description, room_style_id, name, picture) VALUES 
(101, 850, TRUE, 2, 'Chambre Élégance avec vue sur la mer, parfaite pour un séjour romantique. Cette chambre dispose d\'un lit king-size, d\'une salle de bain en marbre avec baignoire, et d\'un balcon privé où vous pourrez admirer le coucher de soleil sur la Méditerranée.', 1, 'Mirage Océanique', '{"room":"/roomExcel2.svg", "sdb": "/roomExcel2Sdb.svg", "salon": "/roomExcel2Salon.svg"}'),
(102, 2100, FALSE, 2, 'Chambre Luxe offrant un confort optimal et une décoration raffinée. Équipée de deux lits jumeaux, d\'un coin salon, et d\'une télévision à écran plat, cette chambre est idéale pour les voyageurs d\'affaires et de loisirs.', 2, 'Luxe Moderne', '{"room":"/roomLuxe.svg", "sdb": "/roomLuxeSdb.svg", "salon": "/roomLuxeSalon.svg"}'),
(103, 1980, TRUE, 2, 'Chambre de Luxe avec vue sur la mer et un balcon privé. Profitez de la brise marine et d\'une ambiance apaisante dans cette chambre spacieuse, dotée d\'un lit queen-size, d\'une salle de bain avec douche à l\'italienne, et d\'un minibar.', 2, 'Évasion Côtière', '{"room":"/roomLuxeSea.webp","sdb":"/roomLuxeSeaSdb.svg", "salon":"/roomLuxeSeaSalon.svg"}'),
(104, 1090, FALSE, 3, 'Chambre Familiale Privilège avec un espace généreux, idéale pour les séjours en famille. Comprenant un lit double et un lit superposé, cette chambre offre une atmosphère conviviale et des commodités pour les enfants, ainsi qu\'un accès facile aux installations de l\'hôtel.', 4, 'Harmonie', '{"room":"/roomFamiSea.svg", "sdb":"/roomFamiSeaSdb.svg", "salon":"/roomFamiSeaSalon.svg"}'),
(105, 3400, TRUE, 1, 'Chambre Exécutive Prestige avec vue sur la mer, offrant un confort optimal et un espace de travail. Avec un lit king-size, un bureau ergonomique, et une salle de bain luxueuse, cette chambre est parfaite pour les voyageurs d\'affaires à la recherche de tranquillité.', 5, 'Sylvestre Business', '{"room":"/roomBusi.svg", "sdb": "/roomBusiSdb.svg", "salon":"/roomBusiSalon.svg"}'),
(201, 1100, TRUE, 1, 'Chambre Supérieure avec vue sur la mer, parfaite pour une escapade tranquille. Dotée d\'une décoration moderne et apaisante, elle comprend un lit king-size, un coin lecture confortable et une salle de bain avec douche et baignoire séparées.', 1, 'Retraite Serenité', '{"room":"/roomExcelSea.svg", "sdb":"/roomExcelSeaSdb.svg", "salon":"/roomExcelSeaSalon.svg"}'),
(202, 2300, FALSE, 1, 'Chambre Confort avec un décor moderne et accueillant. Cette chambre dispose d\'un lit queen-size, d\'un espace de travail, et d\'une salle de bain équipée d\'une douche, offrant un espace chaleureux pour les séjours courts ou prolongés.', 2, 'Confort Urbain', '{"room":"/roomLuxe2.svg", "sdb":"/roomLuxe2Sdb.svg", "salon":"/roomLuxe2Salon.svg"}'),
(203, 1480, TRUE, 4, 'Chambre Familiale avec un espace accueillant pour tous, avec vue panoramique sur la mer. Cette chambre spacieuse dispose de deux lits doubles, d\'une salle de bain familiale, et d\'un espace de jeux pour enfants, parfaite pour des vacances en famille.', 4, 'Château Familial', '{"room":"/roomFami.svg", "sdb":"/roomFamiSdb.svg", "salon":"/roomFamiSalon.svg"}'),
(204, 1240, FALSE, 2, 'Chambre Élégance avec vue sur le jardin, idéale pour se détendre. Équipée d\'un lit king-size et d\'une salle de bain en marbre, elle offre une ambiance sereine avec un accès direct au jardin, parfait pour les amoureux de la nature.', 1, 'Minimal Business', '{"room":"/roomExcel.svg", "sdb":"/roomExcelSdb.svg", "salon":"/roomExcelSalon.svg"}'),
(205, 4150, TRUE, 1, 'Chambre Exécutive Prestige avec vue sur la mer, équipée d\'un minibar et d\'une décoration raffinée. Cette chambre offre un lit king-size, un coin salon et une salle de bain luxueuse, créant un espace idéal pour se détendre après une longue journée.', 5, 'Jardin Secret', '{"room":"/roomBusiSea.svg", "sdb":"/roomBusiSeaSdb.svg", "salon":"/roomBusiSeaSalon.svg"}'),
(301, 8500, TRUE, 4, 'Suite Royale unique au plus haut étage, spacieuse avec vue panoramique sur la mer. Equipée d\'un salon séparé, d\'une salle de bains privée avec jacuzzi, et d\'un service de conciergerie, cette suite offre une expérience de luxe inégalée.', 3, 'Suite Panoramique Royale', '{"room":"/roomSuite.webp", "sdb":"/roomSuiteSdb.svg", "salon":"/roomSuiteSalon.svg"}');




INSERT INTO service (name, description, picture) VALUES 
('Centre de bien-être', 'Découvrez notre spa de luxe offrant une sélection de soins relaxants et revitalisants dans un cadre élégant.', '/bienetre.svg'),
('Restaurant gastronomique', 'Venez savourer une cuisine raffinée dans un cadre élégant, où chaque plat est conçu avec soin à partir d\'ingrédients frais. Profitez d\'un service attentif et d\'une atmosphère propice aux moments inoubliables.', '/nourriture.svg'),
('Location de yacht de luxe', 'Vivez une expérience inoubliable avec la location de yacht pour des croisières privées sur des eaux cristallines.', '/yatch.svg'),
('Salle de fitness de luxe', 'Accédez à notre salle de sport haut de gamme, équipée d\'appareils modernes pour un entraînement complet.', '/sport.svg'),
('Service de transferts VIP', 'Profitez d\'un service de transferts exclusifs, disponible en voiture ou en hélicoptère vers des destinations prestigieuses.', '/voiture.svg');

INSERT INTO event (name, description, date_start, date_end, service_id) VALUES 
('Gala de Charité', 'Participez à notre gala de charité annuel, une soirée exceptionnelle avec un dîner gastronomique, des performances en direct, et des enchères au profit d\'une noble cause.', '2024-12-05 19:00:00', '2024-12-05 23:00:00', 2),
('Retraite de Bien-être', 'Rejoignez-nous pour une retraite de bien-être exclusive, avec des séances de méditation, des ateliers de développement personnel, et des soins spa.', '2024-10-20 08:00:00', '2024-10-22 17:00:00', 1);

INSERT INTO country (name) VALUES 
('France'),
('Italie'),
('Espagne'),
('Royaume-Uni'),
('Suisse'),
('Allemagne'),
('États-Unis'),
('Russie'),
('Belgique'),
('Pays-Bas');

INSERT INTO costumer (lastname, firstname, password, email, phone, country_id) VALUES 
('Dupont', 'Jean', '$argon2id$v=19$m=19456,t=2,p=1$ZJn7g1SPyU7hscG/zr8sKg$YYXtJNenmq9/QP01uiOvJohOS+I3JVr8xBmLxWxoMqw', 'jean.dupont@example.com', 123456789, 1),
('Martin', 'Sophie', '$argon2id$v=19$m=19456,t=2,p=1$ZJn7g1SPyU7hscG/zr8sKg$YYXtJNenmq9/QP01uiOvJohOS+I3JVr8xBmLxWxoMqw', 'sophie.martin@example.com', 987654321, 5),
('Bernard', 'Luc', '$argon2id$v=19$m=19456,t=2,p=1$ZJn7g1SPyU7hscG/zr8sKg$YYXtJNenmq9/QP01uiOvJohOS+I3JVr8xBmLxWxoMqw', 'luc.bernard@example.com', 123123123, 7),
('Leroy', 'Marie', '$argon2id$v=19$m=19456,t=2,p=1$ZJn7g1SPyU7hscG/zr8sKg$YYXtJNenmq9/QP01uiOvJohOS+I3JVr8xBmLxWxoMqw', 'marie.leroy@example.com', 456456456, 1);

