const db = require("../utils/database");

class SubjectService {
  async add_subject(params) {
    const values = Object.values(params);
    const query = `INSERT INTO subject_details(subject_code,subject_title,semester,subject_class,max_marks)VALUES($1,$2,$3,$4,$5) RETURNING subject_id`;
    let res = await db.query(query, values);
    return `Inserted Data with ID: ${res.rows[0].subject_id}`;
  }

  async edit_subject(params) {
    const values = Object.values(params.data);
    const query = `UPDATE subject_details SET subject_code=$1,subject_title=$2,semester=$3,subject_class=$4,max_marks=$5 WHERE subject_id=${params.subject_id}  AND deleted=0`;
    let res = await db.query(query, values);
    console.log(res);
    return `Subject Details Updated! Number of Rows Changed ${res.rowCount}`;
  }

  async get_subject(params) {
    const query = `SELECT * FROM subject_details WHERE subject_id=${params.subject_id} AND deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async get_all_subjects() {
    const query = `SELECT * FROM subject_details WHERE deleted=0`;
    let res = await db.query(query);
    console.log(res.rows);
    return res.rows;
  }

  async delete_subject(params) {
    const query = `UPDATE subject_details SET deleted=1 WHERE subject_id=${params.subject_id}`;
    let res = await db.query(query);
    res = await this.get_all_subjects();
    console.log(res);
    return res;
  }
}

module.exports = new SubjectService();
