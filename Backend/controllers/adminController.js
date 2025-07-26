const db = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM login WHERE email = ?", [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const login = result[0];
    // without bcrypt 
    // if (password !== login.password) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // }

    // Compare the plain text password with the hashed password by using bcrypt
    const match = await bcrypt.compare(password, login.password);

    if (!match) {
      console.log("Password entered:", password);
      console.log("Password in DB:", login.password);
      console.log("Match result:", match);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: login.id,
        email: login.email,
        role: login.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
    console.log(password, login.password);
  });
};

exports.register = (req, res) => {
  const { username, email, password, role } = req.body;

  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Error hashing password" });
    }

    const query = "INSERT INTO login (username, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(query, [username, email, hashedPassword, role], (err) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      return res.status(201).json({ message: "User registered successfully" }),
      console.log(hashedPassword);
    });
  });
};

exports.profile = (req, res) => {
  const userId = req.user.id;
  db.query("SELECT * FROM login WHERE id = ?", [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error"});
    }

    if (result.length === 0) {
      return res.status(404).json({ message : "User not found"});
    }

    return res.status(200).json({
      message: "Got the user profile",
      user: {
        id: result[0].id,
        username: result[0].username,
        email: result[0].email,
        role: result[0].role,
        //created_at: result[0].created_at
      }
    });
  });
};

exports.postNote = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const query = "INSERT INTO notes (Title, Description) VALUES (?, ?)";
  db.query(query, [title, description], (err) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    return res.status(201).json({ message: "Note created successfully" });
  });
};

exports.getNotes = (req, res) => {
  const query = "SELECT * FROM notes";
  db.query(query, (err, results) => {
    if (err){
      return res.status(500).json({ error: "Database error"});
    }
    if (results. length === 0){
      return res.status(404).json({ message: "No notes found"});
    }

    return res.status(200).json({
      message: "Notes retrived Successfully ",
      notes: results[0]
    })
  })
}