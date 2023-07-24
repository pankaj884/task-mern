var express = require("express");
var router = express.Router();

const {
  addTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

/* GET tasks listing. */
router.get("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // res.send('respond with a resource');
  getTask(req, res);
});

/* GET tasks listing. */
router.post("/", function (req, res, next) {
  if (!req.body.id || req.body.id === "") {
    return res.send(400, "Title id is required");
  }

  if (!req.body.title || req.body.title === "") {
    return res.send(400, "Title is required");
  }

  if (!req.body.description || req.body.description === "") {
    return res.send(400, "Description is required");
  }

  addTask(req, res);
});

/* Update tasks. */
router.put("/:id", function (req, res, next) {
  if (!req.body.id || req.body.id === "") {
    return res.send(400, "Title id is required");
  }

  if (!req.body.title || req.body.title === "") {
    return res.send(400, "Title is required");
  }

  if (!req.body.description || req.body.description === "") {
    return res.send(400, "Description is required");
  }

  updateTask(req, res);
});

/* Delete tasks. */
router.delete("/:id", function (req, res, next) {
  deleteTask(req, res);
});

module.exports = router;
