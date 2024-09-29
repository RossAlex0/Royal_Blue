const AbstractRepository = require("./AbstractRepository");

class RoomRepository extends AbstractRepository {
  constructor() {
    super({ table: "room" });
  }

  async create(room) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, sea_view, nb_bed, price, description, picture, room_style_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        room.name,
        room.sea_view,
        room.nb_bed,
        room.price,
        room.description,
        room.picture,
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

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = RoomRepository;
