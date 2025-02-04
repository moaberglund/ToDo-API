const express = require('express');
const router = express.Router();

// Model
const ToDoSchema = require("../models/todo");

// Controllers
const { createToDo, readToDos, updateToDo, deleteToDo } = require("../controllers/todo");


// Routes

// Create
router.post("/", createToDo);

// Read
router.get("/", readToDos);

// Update
router.put("/:id", updateToDo);

// Delete
router.delete("/:id", deleteToDo);

// Export
module.exports = router;