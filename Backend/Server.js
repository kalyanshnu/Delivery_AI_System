const express = require("express");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const db = require("./config/database");
const multer = require("multer");
const path = require("path");
// const setup = require("./setup/setup");

dotenv.config();

const app = express();

app.use(express.json()); // MIddleware to parse JSON bodies

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Test_Uploads/"); // Save in 'Test_Uploads/' folder
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  },
});

// Multer middleware
const upload = multer({ storage: storage });

db.connect((err) => {
  if (err) {
    console.error("MYSQL connection  failed:", err.stack);
  } else {
    console.log("Connected to MYSQL database");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the Delivery AI System Backend");
});

app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
