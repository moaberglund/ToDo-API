const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");


// Import routes
const ToDoRoutes = require("./api/routes/todo");


// Initialize express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyparser.json());

// Start
app.listen(port, () => {
    console.log("Server running on port: " + port)
});

// Routes
app.use("/api/todo", ToDoRoutes);


// Connect to Database - Atlas MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connected to Atlas - MongoDB.");
}).catch((error) => {
    console.error("There was an error connecting to Atlas - MongoDB: " + error);
});