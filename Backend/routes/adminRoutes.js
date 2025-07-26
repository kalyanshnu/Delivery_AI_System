const express = require("express");
const Router = express.Router();
const adminController = require("../controllers/adminController");
const verifyToken = require("../middleware/authMiddleware");

Router.post("/login", adminController.login);
Router.post("/register", adminController.register);
Router.get("/profile", verifyToken, adminController.profile );


Router.post("/notes/post", verifyToken, adminController.postNote);
Router.get("/notes/get", verifyToken, adminController.getNotes);



module.exports = Router;
