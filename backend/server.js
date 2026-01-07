const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");   // ✅ Import model

const app = express();
app.use(cors());
app.use(express.json());    // ✅ Required for POST body

// ✅ Use environment variable
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Create message API
app.post("/api/messages", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const newMessage = await Message.create({ text });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Get all messages API
app.get("/api/messages", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
