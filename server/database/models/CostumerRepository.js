const AbstractRepository = require("./AbstractRepository");

class CostumerRepository extends AbstractRepository {
  constructor() {
    super({ table: "costumer" });
  }

  async create(costumer) {
    const [result] = await this.database.query(
      `insert into ${this.table} (lastname, firstname, password, email, phone, country_id ) values (?, ?, ?, ?, ?, ?)`,
      [
        costumer.lastname,
        costumer.firstname,
        costumer.password,
        costumer.email,
        costumer.phone,
        costumer.country_id,
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

  async readByEmail(mail) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [mail]
    );
    return rows[0];
  }
}

module.exports = CostumerRepository;
