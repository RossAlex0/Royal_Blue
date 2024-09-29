const AbstractRepository = require("./AbstractRepository");

class ServiceRepository extends AbstractRepository {
  constructor() {
    super({ table: "service" });
  }

  async create(service) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, price) values (?, ?, ?)`,
      [service.name, service.description, service.price]
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

module.exports = ServiceRepository;
