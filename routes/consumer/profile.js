const express = require("express");
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { PutandGetOutput, PutOutput, ErrorResponse, GetOutput } = require("../../utils/output");

// disti
// show profile
router.get("/profile/:idConsumer", async(req, res) => {
    try {
        const id_consumer = req.params.idConsumer
        const query = `SELECT name, email, phone_number, address, photo_url 
        FROM consumer
        WHERE id = ${id_consumer};`

        await GetOutput(query, res)
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// etin
// edit profile
router.put("/profile/edit/:idConsumer", async(req, res) => {
    try {
        const id_consumer = req.params.idConsumer;
        const { name, phone_number, address, photo_url } = req.body;

        const schema = {
            name: { type: "string", nullable: true },
            phone_number: { type: "string", nullable: true, numeric: true },
            address: { type: "string", nullable: true },
            photo_url: { type: "string", nullable: true }
        };

        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validationResponse
            });
        };

        const query = `UPDATE consumer 
        SET name = '${name}', phone_number = '${phone_number}', address = '${address}', photo_url = '${photo_url}' WHERE id = '${id_consumer}'`

        const query2 = `SELECT name, email, phone_number, address, photo_url 
        FROM consumer
        WHERE id = ${id_consumer};`

        await PutandGetOutput(query, query2, res);

    } catch (err) {
        return ErrorResponse(err, res)
    }
})


// edit profile
// router.put("/profile/edit/:idConsumer", async(req, res) => {
//     try {
//         const id_consumer = req.params.idConsumer;
//         const { name, phone_number, address, photo_url } = req.body;

//         const schema = {
//             name: { type: "string", nullable: true },
//             phone_number: { type: "string", nullable: true, numeric: true },
//             address: { type: "string", nullable: true },
//             photo_url: { type: "string", nullable: true }
//         };

//         const validationResponse = v.validate(req.body, schema);
//         if (validationResponse !== true) {
//             return res.status(400).json({
//                 message: "Validation failed",
//                 errors: validationResponse
//             });
//         };

//         const query = `UPDATE consumer 
//         SET name = '${name}', phone_number = '${phone_number}', address = '${address}', photo_url = '${photo_url}' WHERE id = '${id_consumer}'`

//         await PutOutput(query, res);

//     } catch (err) {
//         return ErrorResponse(err, res)
//     }
// })


module.exports = router