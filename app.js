var mongoose = require('mongoose');

//connect to mongoose and activate the schema
mongoose.connect('mongodb://localhost/myappdatabase');
var Schema = mongoose.Schema;

//creating the model properties(columns) using a Schema
var taskSchema = new Schema ({
  task: string,
  done: boolean,
  created_at: Date,
  updated_at: Date
});

//creating the model with name Task
var Task = mongoose.model('Task', taskSchema);

//exporting the model and make it available for user
module.exports = Task;

//test model content
var mondayTask = new Task ({
  task: 'do stuff'
  done: 'true'
});
