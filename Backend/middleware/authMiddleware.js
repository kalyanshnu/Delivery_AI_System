const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    req.user = decoded; // Store the decoded user information in the request object
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = verifyToken;
// This middleware can be used in routes to protect them
