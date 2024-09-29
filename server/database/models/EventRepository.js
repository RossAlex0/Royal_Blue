const AbstractRepository = require("./AbstractRepository");

class EventRepository extends AbstractRepository {
  constructor() {
    super({ table: "event" });
  }

  async create(event) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, date_start, date_end, service_id) values (?, ?, ?, ?, ?)`,
      [
        event.name,
        event.description,
        event.date_start,
        event.date_end,
        event.service_id,
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

module.exports = EventRepository;
