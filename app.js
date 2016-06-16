//this file is for writing our logic

//requiring db.js
var Task = require('./db');



//create model content (test)
var mondayTask = new Task ({
  task: 'do stuff',
  done: 'true'
});

var tuesdayTask = new Task ({
  task: 'do stuff again',
  done: 'true'
});

//save the model content
mondayTask.save(function(err) {
  if (err) throw err;
  console.log('Task has been created successfully');
});

tuesdayTask.save(function(err) {
  if (err) throw err;
  console.log('Task has been created successfully');
});

//find all our tasks
// Task.find({}, function(err, tasks){
//   if (err) throw err;
//   console.log(tasks)
// })

//find one specific instance
Task.find({task: 'do stuff'}, function(err, task){
  if (err) throw err;
  console.log(task);
});
