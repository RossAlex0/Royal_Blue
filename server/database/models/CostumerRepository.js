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
      `select ${this.table}.* , country.name as country 
      from ${this.table} 
      JOIN country ON country.id = ${this.table}.country_id
      where ${this.table}.id = ?`,
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
      `select ${this.table}.* , country.name as country 
      from ${this.table} 
      JOIN country ON country.id = ${this.table}.country_id
      where email = ?`,
      [mail]
    );
    return rows[0];
  }

  async update(user) {
    const result = await this.database.query(
      `UPDATE ${this.table} set lastname = ?, firstname = ? , email = ?, country_id = ? where id = ?`,
      [user.lastname, user.firstname, user.email, user.country, user.id]
    );
    return result.affectedRows;
  }

  async updatePassword(user) {
    const result = await this.database.query(
      `UPDATE ${this.table} set password = ? where id = ?`,
      [user.password, user.id]
    );
    console.info(result);
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = CostumerRepository;
