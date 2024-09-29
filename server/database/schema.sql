-- DROP DATABASE royalblue;

CREATE TABLE service (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
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
    number INT NOT NULL,
    sea_view BOOLEAN NOT NULL,
    nb_bed INT NOT NULL,
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
('Chambre Familiale Privilège'),
('Chambre Exécutive Prestige');  

INSERT INTO room (number, sea_view, nb_bed, description, room_style_id) VALUES 
(101, TRUE, 2, 'Chambre Élégance avec vue sur la mer, parfaite pour un séjour romantique.', 1),
(102, FALSE, 2, 'Chambre Luxe offrant un confort optimal et une décoration raffinée.', 2),
(103, TRUE, 2, 'Chambre de Luxe avec vue sur la mer et un balcon privé.', 2),
(104, FALSE, 3, 'Chambre Familiale Privilège avec un espace généreux, idéale pour les séjours en famille.', 4),
(105, TRUE, 1, 'Chambre Exécutive Prestige avec vue sur la mer, offrant un confort optimal et un espace de travail.', 5),
(201, TRUE, 1, 'Chambre Supérieure avec vue sur la mer, parfaite pour une escapade tranquille.', 1),
(202, FALSE, 1, 'Chambre Confort avec un décor moderne et accueillant.', 2),
(203, TRUE, 4, 'Chambre Familiale avec un espace accueillant pour tous avec vue panoramique sur la mer.', 4),
(204, FALSE, 2, 'Chambre Élégance avec vue sur le jardin, idéale pour se détendre.', 1),
(205, TRUE, 1, 'Chambre Exécutive Prestige avec vue sur la mer, équipée d\'un minibar et d\'une décoration raffinée.', 5),
(301, TRUE, 4, 'Suite Royale unique au plus haut étage, spacieuse avec vue panoramique sur la mer, équipée d\'un salon et d\'une salle de bains privée.', 3);

INSERT INTO service (name, description) VALUES 
('Centre de bien-être', 'Découvrez notre spa de luxe offrant une sélection de soins relaxants et revitalisants dans un cadre élégant.'),
('Salle de fitness', 'Accédez à notre salle de sport haut de gamme, équipée d\'appareils modernes pour un entraînement complet.'),
('Service de transferts VIP', 'Profitez d\'un service de transferts exclusifs, disponible en voiture ou en hélicoptère vers des destinations prestigieuses.'),
('Parking sécurisé', 'Profitez d\'un stationnement sécurisé et exclusif pour votre véhicule tout au long de votre séjour.'),
('Location de yacht de luxe', 'Vivez une expérience inoubliable avec la location de yacht pour des croisières privées sur des eaux cristallines.');

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
('Dupont', 'Jean', 'password123', 'jean.dupont@example.com', 123456789, 1),
('Martin', 'Sophie', 'password456', 'sophie.martin@example.com', 987654321, 5),
('Bernard', 'Luc', 'password789', 'luc.bernard@example.com', 123123123, 7),
('Leroy', 'Marie', 'password321', 'marie.leroy@example.com', 456456456, 1);

