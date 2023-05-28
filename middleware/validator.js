const Validator = require("fastest-validator");
const v = new Validator({
    secretKey: "364517fdef24070994c6b518de138e37fe0e43ec"
});

const Validation = (cek, schema, res) => {
    const validationResponse = v.validate(cek, schema);
    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation Failed",
            errors: validationResponse,
        });
    }
};
module.exports = Validation;