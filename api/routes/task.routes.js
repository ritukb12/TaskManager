// business.route.js

const express = require('express');
const app = express();
const taskRoutes = express.Router();

// Require Business model in our routes module
let Task = require('../models/task');

// Defined store route
taskRoutes.route('/add').post(function (req, res) {
    console.log("reached api layer router");
  let task = new Task(req.body);
  task.save()
    .then(task => {
      res.status(200).json({'task': 'task added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});




// Defined get data(index or listing) route
taskRoutes.route('/viewTasks').get(function (req, res) {
    console.log("reached this point");
    task.find(function (err, task){
    if(err){
      console.log(err);
    }
    else {
      res.json(task);
    }
  });
});

// Defined edit route
taskRoutes.route('/editTask/:id').get(function (req, res) {
  let id = req.params.id;
  task.findById(id, function (err, task){
      res.json(task);
  });
});

//  Defined update route
taskRoutes.route('/update/:id').post(function (req, res) {
    Task.findById(req.params.id, function(err, next, task) {
    if (!task)
      return next(new Error('Could not load Document'));
    else {
        task.task_name = req.body.task_name;
        // task.business_name = req.body.business_name;
        // task.business_gst_number = req.body.business_gst_number;

        task.save().then(task => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
taskRoutes.route('/delete/:id').get(function (req, res) {
    Task.findByIdAndRemove({_id: req.params.id}, function(err, task){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = taskRoutes;