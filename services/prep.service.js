const db = require("../utils/database");

class PrepService {
  async add_prep(params) {
    const values = Object.values(params);
    const query = `INSERT INTO prep_details(prep_task,prep_charge) VALUES($1,$2) RETURNING prep_id`;
    let res = await db.query(query, values);
    return `Inserted Data with ID: ${res.rows[0].prep_id}`;
  }

  async edit_prep(params) {
    const values = Object.values(params.data);
    const query = `UPDATE prep_details SET prep_task=$1,prep_charge=$2 WHERE prep_id=${params.prep_id}  AND deleted=0`;
    let res = await db.query(query, values);
    console.log(res);
    return `Preparation Details Updated! Number of Rows Changed ${res.rowCount}`;
  }

  async get_prep(params) {
    const query = `SELECT * FROM prep_details WHERE prep_id=${params.prep_id} AND deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async get_all_prep() {
    const query = `SELECT * FROM prep_details WHERE deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async delete_prep(params) {
    const query = `UPDATE prep_details SET deleted=1 WHERE prep_id=${params.prep_id}`;
    let res = await db.query(query);
    res = await this.get_all_prep();
    console.log(res);
    return res;
  }
}

module.exports = new PrepService();
