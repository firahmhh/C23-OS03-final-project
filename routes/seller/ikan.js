const express = require("express");
const router = express.Router();

const Validator = require("fastest-validator");
const v = new Validator();
const { GetOutput, PostOutput, PutOutput, DeleteOutput, ErrorResponse } = require("../../utils/output");


// GET semua ikan
router.get("/ikan/:idSeller", async(req, res) => {
    try {
        const id_seller = req.params.idSeller;
        const query = `SELECT id as id_fish, name, weight, price, photo_url FROM fish WHERE id_seller = "${id_seller}"`;

        // baca data
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET search ikan
router.get("/ikan/:idSeller/:name", async(req, res) => {
    try {
        const id_seller = req.params.idSeller;
        const name = req.params.name;
        const query = `SELECT id as id_fish, name, weight, price, photo_url FROM fish where id_seller = "${id_seller}" and name = "${name}"`;
        // baca data
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// patokan
// POST input ikan
router.post("/ikan/input", async(req, res) => {
    try {
        const { id_seller, name, weight, description, price, photo_url } = req.body;

        // Validasi input
        const schema = {
            id_seller: { type: "string", nullable: false, numeric: true },
            name: { type: "string", nullable: false },
            weight: { type: "string", nullable: false, numeric: true },
            description: { type: "string", nullable: true },
            price: { type: "string", nullable: false, numeric: true },
            photo_url: { type: "string", nullable: false, numeric: false },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const query = `INSERT INTO fish (id_seller, name, weight, description, price, photo_url) VALUES ('${id_seller}', '${name}', '${weight}', '${description}', '${price}', '${photo_url}')`;
        // post input
        await PostOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// PUT edit ikan
router.put("/ikan/edit/:idFish", async(req, res) => {
    try {
        const id_fish = req.params.idFish;
        const { name, weight, description, price } = req.body;

        // validasi edit
        const schema = {
            name: { type: "string", nullable: false },
            weight: { type: "string", nullable: false, numeric: true },
            description: { type: "string", nullable: true },
            price: { type: "string", nullable: false, numeric: true },

        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const query = `UPDATE fish SET name = '${name}', description = '${description}', weight = '${weight}', price = '${price}' WHERE id = '${id_fish}'`;
        // edit data
        await PutOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// DELETE ikan
router.delete("/ikan/delete/:idFish", (req, res) => {
    try {
        const idFish = req.params.idFish;
        const query = `DELETE FROM fish WHERE id = ${idFish}`;
        // hapus data
        DeleteOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router;