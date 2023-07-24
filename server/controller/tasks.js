const {
  addTaskInRedis,
  getTaskFromRedis,
  updateTaskInRedis,
  deleteTaskFromRedis,
} = require("../db/redis");

const addTask = (req, res) => {
  addTaskInRedis(req.body, function (err, result) {

    if(err){
        console.log("addTask-err : ", err);
        return res.err(err);
    }
    console.log("addTask-result : ", result);
    res.send("Task added successfully");
   
  });
};

const getTask = (req, res) => {
  getTaskFromRedis(function (err, result) {
    if(err){
        console.log("getTask-err : ", err);
        return res.err(err);
    }
    console.log("getTask-result : ", result);
    res.send(result);
  });
};

const updateTask = (req, res) => {
  updateTaskInRedis(req.body, req.params.id, function (err, result) {
    if(err){
        console.log("updated-err : ", err);
        return res.err(err);
    }
    console.log("updated-result : ", result);
    res.send(result);
  });
};

const deleteTask = (req, res) => {
  deleteTaskFromRedis(req.params.id, function (err, result) {
    if(err){
        console.log("err : ", err);
        return res.err(err);
    }
    console.log("Deleted-result : ", result);
    res.send("Task Deleted successfully");
  });
};

module.exports = {
  addTask,
  getTask,
  updateTask,
  deleteTask,
};
