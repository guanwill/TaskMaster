//we are using mongoose as our database
var mongoose = require('mongoose');

//connect to mongoose and activate the schema
mongoose.connect('mongodb://localhost/myappdatabase');
var Schema = mongoose.Schema;

//creating the model properties(columns) using a Schema
var taskSchema = new Schema ({
  task: String,
  done: Boolean,
  created_at: Date,
  updated_at: Date
});

//before .save in app.js, it runs this function first
taskSchema.pre('save', function(next){
  //get current Date
  var currentDate = new Date();
  //update Date
  this.updated_at = currentDate;
  //create date only if it doesnt exist
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

//creating the model with name Task
var Task = mongoose.model('Task', taskSchema);
//exporting the model and make it available for user
module.exports = Task;
