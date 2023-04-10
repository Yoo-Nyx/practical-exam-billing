const db = require("../utils/database");

class ChargesService {
  async add_charges(params) {
    const values = Object.values(params);
    const query = `INSERT INTO charges_details(role_id,charge) VALUES($1,$2) RETURNING role_id`;
    let res = await db.query(query, values);
    return `Inserted Data with ID: ${res.rows[0].role_id}`;
  }

  async edit_charges(params) {
    const values = Object.values(params.data);
    const query = `UPDATE charges_details SET charge=$1 WHERE role_id=${params.role_id}  AND deleted=0`;
    let res = await db.query(query, values);
    console.log(res);
    return `charges Details Updated! Number of Rows Changed ${res.rowCount}`;
  }

  async get_charges(params) {
    const query = `SELECT * FROM charges_details WHERE role_id=${params.role_id} AND deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async get_all_charges() {
    const query = `SELECT * FROM charges_details WHERE deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async delete_charges(params) {
    const query = `UPDATE charges_details SET deleted=1 WHERE role_id=${params.role_id}`;
    let res = await db.query(query);
    res = await this.get_all_charges();
    console.log(res);
    return res;
  }
}

module.exports = new ChargesService();
