const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/user")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Failed to connect database:", err);
  });

// Define credential schema
const credentialSchema = new mongoose.Schema({
  time: String,
  date: String,
  name: String,
  work: Array,
});
const Credential = mongoose.model("datas", credentialSchema, "userdata");

// Route to save employee data
app.post("/employeedata", async (req, res) => {
  try {
    const { time, date, name, work } = req.body;

    // Validate input data
    if (!time || !date || !name || !work) {
      return res.status(400).send("Invalid input data");
    }

    // Check if the name already exists
    const existDate = await Credential.findOne({ date });
    if (existDate) {
      return res.status(400).send("Already submit your work in this date");
    }
    // Create a new data object
    const newData = new Credential({
      time:time,
      date:date,
      name:name,
      work:work
     });

    // Save data to the database
    await newData.save();
    res.send("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
