const db = require("../utils/database");

class StaffService {
  async add_staff(params) {
    const values = Object.values(params);
    const query = `INSERT INTO staff_details(fname,mname,lname,address,account_no,bank_name,bank_branch,ifsc_code ) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING staff_id`;
    let res = await db.query(query, values);
    return `Inserted Data with ID: ${res.rows[0].staff_id}`;
  }

  async edit_staff(params) {
    const values = Object.values(params.data);
    const query = `UPDATE staff_details SET fname=$1,mname=$2,lname=$3,address=$4,account_no=$5,bank_name=$6,bank_branch=$7,ifsc_code=$8 WHERE staff_id=${params.staff_id}  AND deleted=0`;
    let res = await db.query(query, values);
    console.log(res);
    return `Staff Details Updated! Number of Rows Changed ${res.rowCount}`;
  }

  async get_staff(params) {
    const query = `SELECT * FROM staff_details WHERE staff_id=${params.staff_id} AND deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async get_all_staff() {
    const query = `SELECT * FROM staff_details WHERE deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async delete_staff(params) {
    const query = `UPDATE staff_details SET deleted=1 WHERE staff_id=${params.staff_id}`;
    let res = await db.query(query);
    res = await this.get_all_staff();
    console.log(res);
    return res;
  }
}

module.exports = new StaffService();
