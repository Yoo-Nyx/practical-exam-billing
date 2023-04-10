const express = require("express");
const router = express.Router();
const ChargesService = require("../services/charges.service.js");

router.post("/add-charges", async (req, res) => {
  try {
    const result = await ChargesService.add_charges(req.body);
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

router.post("/edit-charges", async (req, res) => {
  try {
    const result = await ChargesService.edit_charges(req.body);
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

router.get("/get-charges", async (req, res) => {
  try {
    const result = await ChargesService.get_charges(req.body);
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

router.get("/get-all-charges", async (req, res) => {
  try {
    const result = await ChargesService.get_all_charges();
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

router.get("/delete-charges", async (req, res) => {
  try {
    const result = await ChargesService.delete_charges(req.body);
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
