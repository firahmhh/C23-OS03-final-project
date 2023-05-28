const e = require("express");
const jwt = require("jsonwebtoken");
const rahasia = "ini_adalah_rahasia";

// membuat token
CreateToken = (payload) => {
  return jwt.sign(payload, rahasia);
};
// membuka token
ParseToken = (token) => {
  return jwt.verify(token, rahasia);
};

// verify token
VerifyToken = (req, res, next) => {
  try {
    const authorizerd = req.header("auth-token");
    if (!authorizerd) {
      return res.status(401).json({
        message: "Unauthorizerd, token is missing",
      });
    }
    req.user = this.ParseToken(token.split(" ")[1]);
    next();
  } catch (err) {
    return res.status(400).json({
      message: err.toString(),
    });
  }
};

module.exports = { CreateToken, ParseToken, VerifyToken };
