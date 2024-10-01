const AbstractRepository = require("./AbstractRepository");

class RoomRepository extends AbstractRepository {
  constructor() {
    super({ table: "room" });
  }

  async create(room) {
    const [result] = await this.database.query(
      `insert into ${this.table} (number, name, sea_view, nb_bed, price, description, picture, room_style_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        room.number,
        room.name,
        room.sea_view,
        room.nb_bed,
        room.description,
        room.room_style_id,
      ]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByStyle(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where room_style_id = ?`,
      [id]
    );

    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select ${this.table}.*, room_style.name AS style_name from ${this.table} 
      INNER JOIN room_style ON ${this.table}.room_style_id = room_style.id ORDER BY ${this.table}.number ASC`
    );
    return rows;
  }
}

module.exports = RoomRepository;
