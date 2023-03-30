const express = require("express");
const router = express.Router();
const StaffService = require("../services/staff.service.js");

router.post("/add-staff", async (req, res) => {
  try {
    const result = await StaffService.add_staff(req.body);
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

router.post("/edit-staff", async (req, res) => {
  try {
    const result = await StaffService.edit_staff(req.body);
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

router.get("/get-staff", async (req, res) => {
  try {
    const result = await StaffService.get_staff(req.body);
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

router.get("/get-all-staff", async (req, res) => {
  try {
    const result = await StaffService.get_all_staff();
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

router.get("/delete-staff", async (req, res) => {
  try {
    const result = await StaffService.delete_staff(req.body);
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
