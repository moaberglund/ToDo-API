const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: String, 
        enum: ["todo", "active", "done"], // Lista med tillåtna värden
        default: "todo",
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


// Export the model
module.exports = mongoose.model("ToDo", ToDoSchema);