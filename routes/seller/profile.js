const express = require("express");
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { PutOutput, ErrorResponse, GetOutput } = require("../../utils/output");

// show profile
router.get("/profile/:idSeller", async(req, res) => {
    try {
        const id_seller = req.params.idSeller
        const query = `SELECT name, store_name, phone_number, email, location, roles, photo_url 
        FROM seller
        WHERE id = ${id_seller};`

        await GetOutput(query, res)
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// edit profile
router.put("/profile/edit/:idSeller", async(req, res) => {
    try {
        console.log(req);
        const id_seller = req.params.idSeller;
        const { name, store_name, phone_number, location, roles, photo_url, nama_pemilik_rekening, nomor_rekening, nama_bank } = req.body;

        const schema = {
            name: { type: "string", nullable: false },
            store_name: { type: "string", nullable: false },
            phone_number: { type: "string", nullable: false},
            location: { type: "string", nullable: false },
            roles: { type: "string", nullable: false },
            photo_url: { type: "string", nullable: true },
            nama_pemilik_rekening: { type: "string", nullable: false },
            nomor_rekening: { type: "string", nullable: false, numeric: true },
            nama_bank: { type: "string", nullable: false }
        };

        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validationResponse
            });
        }

        const query = `UPDATE seller SET name = '${name}', store_name = '${store_name}', phone_number = '${phone_number}', location = '${location}', roles = '${roles}', photo_url = '${photo_url}', nama_pemilik_rekening = '${nama_pemilik_rekening}', nomor_rekening = '${nomor_rekening}', nama_bank = '${nama_bank}' 
            WHERE id = '${id_seller}';`

        await PutOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router