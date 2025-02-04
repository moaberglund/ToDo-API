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
const readToDos = async (req, res) => {
    try {
        let result = await ToDoSchema.find({}); 
        return res.json(result);
    } catch (error) {
        return res.status(500).json({error: error.message + "Server error."});
    }
};


// Update
const updateToDo = async (req, res) => {
    try {
        // Get the id
        const {id} = req.params;
        const todo = await ToDoSchema.findByIdAndUpdate(id, req.body);

        // If not found
        if (!todo) {
            return res.status(404).json({message: "Could not find selected object."});
        }

        // Get the updated object
        const updatedToDo = await ToDoSchema.findById(id);
        // Return the updated object
        res.status(200).json(updatedToDo);

    } catch (error) {
        res.status(500).json({error: error.message + "Server error."});
    }
};

// Delete
const deleteToDo = async (req,res) => {
    try {
        // Get the id
        const {id} = req.params;
        const todo = await ToDoSchema.findByIdAndDelete(id);

        // If not found
        if (!todo) {
            return res.status(404).json({message: "Could not find selected object."});
        }

        res.status(200).json({message: "ToDo deleted successfully."});
    } catch (error) {
        res.status(500).json({error: error.message + "Server error."});
    }
};

module.exports = {
    createToDo,
    readToDos,
    updateToDo,
    deleteToDo
}