// Import model
const ToDoSchema = require("../models/todo");

// Create
const createToDo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        if (!title) {
            return res.status(400).json({error: "Empty input, please fill in the title."});
        }

        const todo = new ToDoSchema({
            title,
            description,
            completed
        });
        await todo.save();
        res.status(201).json({message: "ToDo created successfully."});
    } catch (error) {
        res.status(500).json({error: error.message + "Server error."});
    }
};

// Read


// Update


// Delete