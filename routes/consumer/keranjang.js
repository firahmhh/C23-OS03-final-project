const express = require("express");
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { PostOutput, GetOutput, PutOutput, ErrorResponse, DeleteOutput } = require("../../utils/output");
const db = require("../../config/config");
const { response } = require("express");

// ++ wika
// post cart
router.post("/keranjang/input/edit", async(req, res) => {
    try {
        const { id_fish, id_consumer, notes, weight } = req.body;
        // validasi
        const schema = {
            id_fish: { type: "string", nullable: false, numeric: true },
            id_consumer: { type: "string", nullable: false, numeric: true },
            notes: { type: "string", nullable: true },
            weight: { type: "string", nullable: false, numeric: true },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const queryGetCart = `SELECT * FROM cart WHERE id_fish = '${id_fish}' && id_consumer = '${id_consumer}'`;

        db.query(queryGetCart, (err, result) => {
            if (err) {
                ErrorResponse(err, res);
            } else {
                if (result.length != 0) {
                    const id_cart = result[0].id;
                    const queryEdit = `UPDATE cart SET weight = "${weight}" WHERE id = "${id_cart}";`;
                    db.query(queryEdit, (err, result) => {
                        if (err) {
                            ErrorResponse(err, res);
                        } else {
                            return res.status(200).json({
                                message: "Edit Success",
                            });
                        }
                    });
                } else {
                    const queryInput = `INSERT INTO cart (notes, weight, id_fish, id_consumer) VALUES ('${notes}', '${weight}', '${id_fish}', '${id_consumer}')`;
                    db.query(queryInput, (err, result) => {
                        if (err) {
                            ErrorResponse(err, res);
                        } else {
                            return res.status(200).json({
                                message: "Input Success",
                            });
                        }
                    });
                }
            }
        });
    } catch (err) {
        ErrorResponse(err, res);
    }
});

// POST input cart
router.post("/keranjang/input", async(req, res) => {
    try {
        const { id_fish, id_consumer, notes, weight } = req.body;

        // validasi
        const schema = {
            id_fish: { type: "string", nullable: false, numeric: true },
            id_consumer: { type: "string", nullable: false, numeric: true },
            notes: { type: "string", nullable: true },
            weight: { type: "string", nullable: false, numeric: true },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const query = `INSERT INTO cart (notes, weight, id_fish, id_consumer) VALUES ('${notes}', '${weight}', '${id_fish}', '${id_consumer}')`;

        await PostOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET cart berdasarkan ID
router.get("/keranjang/id/:idCart", async(req, res) => {
    try {
        const id_cart = req.params.idCart;
        const query = `select c.id as id_cart, c.notes, c.weight, c.id_fish, c.id_consumer, f.photo_url from cart c inner join fish f on c.id_fish = f.id where c.id="${id_cart}";`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET ikan consumer
router.get("/keranjang/:idConsumer", async(req, res) => {
    try {
        const id_consumer = req.params.idConsumer;

        const query = `select c.id as id_cart, c.id_fish, f.name as name_fish, c.weight, f.price, c.notes, c.id_consumer, f.photo_url, s.email as email_seller 
        from cart c 
        inner join fish f on c.id_fish = f.id 
        inner join seller s on f.id_seller = s.id
        where c.id_consumer =${id_consumer}`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// PUT cart berdasarkan berat
router.put("/keranjang/edit/weight/:idCart", async(req, res) => {
    try {
        const id_cart = req.params.idCart;
        const { weight } = req.body;

        // validasi
        const schema = {
            weight: { type: "string", nullable: false, numeric: true },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const query = `UPDATE cart SET weight = "${weight}" WHERE id = "${id_cart}";`;
        await PutOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// delete 2x tetap success harusnya data tidak ada
// DELETE cart
router.delete("/keranjang/delete/:idCart", async(req, res) => {
    try {
        const idCart = req.params.idCart;
        const query = `DELETE FROM cart WHERE id = ${idCart}`;
        await DeleteOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router;