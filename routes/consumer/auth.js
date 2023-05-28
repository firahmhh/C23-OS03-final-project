const express = require("express");
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { HashPasswrod } = require("../../middleware/hash");
const { CheckLogin, Registrasi, ErrorResponse } = require("../../utils/output");

// POST registrasi
router.post("/regist", async (req, res) => {
  try {
    const { name, email, password, phone_number, address } = req.body;

    // validation
    const schema = {
      name: { type: "string", nullable: false },
      email: { type: "email", nullable: false },
      password: { type: "string", min: 6, nullable: false },
      phone_number: { type: "string", nullable: false, numeric: true },
      address: { type: "string", nullable: false },
    };
    const validationResponse = v.validate(req.body, schema);
    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: validationResponse,
      });
    }

    // Hashing
    const hashedPassword = HashPasswrod(password);

    const queryEmail = `select * from consumer where email = "${email}"`;
    const queryInput = `INSERT INTO consumer (name, email, password, phone_number, address) VALUES ('${name}', '${email}', '${hashedPassword}', '${phone_number}', '${address}')`;
    // check email + input data
    await Registrasi(queryEmail, queryInput, res);
  } catch (err) {
    return ErrorResponse(err, res);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    const schema = {
      email: { type: "email", nullable: false },
      password: { type: "string", min: 6, nullable: false },
    };
    const validationResponse = v.validate(req.body, schema);
    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: validationResponse,
      });
    }

    const queryEmail = `select * from consumer where email = "${email}"`;
    await CheckLogin(queryEmail, password, res);
  } catch (err) {
    return ErrorResponse(err, res);
  }
});

module.exports = router;
