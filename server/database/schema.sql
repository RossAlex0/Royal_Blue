-- create table user (
--   id int unsigned primary key auto_increment not null,
--   email varchar(255) not null unique,
--   password varchar(255) not null
-- );

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );


CREATE TABLE service (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
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

 
CREATE TABLE comment (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    notation INT NOT NULL,
    description TEXT,
    date DATE NOT NULL
);

 
CREATE TABLE country (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
 
CREATE TABLE room (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sea_view BOOLEAN NOT NULL,
    nb_bed INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT NOT NULL,
    picture TEXT NOT NULL,
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
    date_register DATE NOT NULL,
    comment_id INT,
    country_id INT,
    FOREIGN KEY (comment_id) REFERENCES comment(id),
    FOREIGN KEY (country_id) REFERENCES country(id),
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
