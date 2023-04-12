const express = require("express");
const router = express.Router();
const PrepService = require("../services/prep.service.js");

router.post("/add-prep", async (req, res) => {
  try {
    const result = await PrepService.add_prep(req.body);
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

router.post("/edit-prep", async (req, res) => {
  try {
    const result = await PrepService.edit_prep(req.body);
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

router.get("/get-prep", async (req, res) => {
  try {
    const result = await PrepService.get_prep(req.body);
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

router.get("/get-all-prep", async (req, res) => {
  try {
    const result = await PrepService.get_all_prep();
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

router.get("/delete-prep", async (req, res) => {
  try {
    const result = await PrepService.delete_prep(req.body);
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
