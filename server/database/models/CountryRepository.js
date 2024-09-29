const AbstractRepository = require("./AbstractRepository");

class CountryRepository extends AbstractRepository {
  constructor() {
    super({ table: "country" });
  }

  async create(name) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [name]
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

module.exports = CountryRepository;
