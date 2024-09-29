const AbstractRepository = require("./AbstractRepository");

class ReservationServiceRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation_service" });
  }

  async create(reservation) {
    const [result] = await this.database.query(
      `insert into ${this.table} (costumer_id, service_id, date_start, date_end) values (?, ?, ?, ?)`,
      [
        reservation.costumer_id,
        reservation.service_id,
        reservation.date_start,
        reservation.date_end,
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

module.exports = ReservationServiceRepository;
