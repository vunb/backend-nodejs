"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var ToDoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isDone: Boolean
});
exports["default"] = mongoose.model('ToDo', ToDoSchema);
