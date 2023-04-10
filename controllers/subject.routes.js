const express = require("express");
const router = express.Router();
const SubjectService = require("../services/subject.service.js");

router.post("/add-subject", async (req, res) => {
  try {
    const result = await SubjectService.add_subject(req.body);
    const response = {};
    response.data = result;
    response.success = true;
    response.datetime = new Date();
    res.send(response);
  } catch (err) {
    const response = {};
    response.data = err.message;
    response.success = false;
    response.datetime = new Date();
    res.status(500).send(response);
  }
});

router.post("/edit-subject", async (req, res) => {
  try {
    const result = await SubjectService.edit_subject(req.body);
    const response = {};
    response.data = result;
    response.success = true;
    response.datetime = new Date();
    res.send(response);
  } catch (err) {
    console.log(err);
    const response = {};
    response.data = err.message;
    response.success = false;
    response.datetime = new Date();
    res.status(500).send(response);
  }
});

router.get("/get-subject", async (req, res) => {
  try {
    const result = await SubjectService.get_subject(req.body);
    const response = {};
    response.data = result;
    response.success = true;
    response.datetime = new Date();
    res.send(response);
  } catch (err) {
    console.log(err);
    const response = {};
    response.data = err.message;
    response.success = false;
    response.datetime = new Date();
    res.status(500).send(response);
  }
});

router.get("/get-all-subjects", async (req, res) => {
  try {
    const result = await SubjectService.get_all_subjects();
    const response = {};
    response.data = result;
    response.success = true;
    response.datetime = new Date();
    res.send(response);
  } catch (err) {
    console.log(err);
    const response = {};
    response.data = err.message;
    response.success = false;
    response.datetime = new Date();
    res.status(500).send(response);
  }
});

router.get("/delete-subject", async (req, res) => {
  try {
    const result = await SubjectService.delete_subject(req.body);
    const response = {};
    response.data = result;
    response.success = true;
    response.datetime = new Date();
    res.send(response);
  } catch (err) {
    console.log(err);
    const response = {};
    response.data = err.message;
    response.success = false;
    response.datetime = new Date();
    res.status(500).send(response);
  }
});

module.exports = router;
