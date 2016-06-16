//this file is for writing our logic

//requiring db.js
var Task = require('./db');



//create model content (test)
var mondayTask = new Task ({
  task: 'do stuff',
  done: 'true'
});

//save the model content
mondayTask.save(function(err) {
  if (err) throw err;
  console.log('Task has been created successfully');
});
