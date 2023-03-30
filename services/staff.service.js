const db = require("../utils/database");

class StaffService {
  async add_staff(params) {
    const values = Object.values(params);
    const query = `INSERT INTO staff_details(fname,mname,lname,address,account_no,bank_name,bank_branch,ifsc_code ) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING staff_id`;
    let res = await db.query(query, values);
    return `Inserted Data with ID: ${res.rows[0].staff_id}`;
  }
}

module.exports = new StaffService();
