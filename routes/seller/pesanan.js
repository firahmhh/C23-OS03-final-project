const express = require("express");
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { ErrorResponse, GetOutput, PutOutput } = require("../../utils/output");

// get semua pesanan
router.get("/pesanan/:idSeller", async(req, res) => {
    try {
        const id_seller = req.params.idSeller;

        const query = `select o.id as id_order, o.date,o.notes, o.status, sum(do.weight*f.price) as total_price, f.photo_url from ordering o right join detail_ordering do on o.id = do.id_ordering inner join fish f on do.id_fish = f.id where f.id_seller = "${id_seller}" group by o.id, f.id;`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});
// get detail pesanan
router.get("/pesanan/detail/:idOrder", async(req, res) => {
    try {
        const id_order = req.params.idOrder;

        const query = `select c.name as consumer_name, c.phone_number as consumer_phone_number, o.date, c.address, o.notes as note_order, f.name as fish_name, do.notes as fish_note, do.weight,f.price as fish_price, do.weight*f.price as price, f.photo_url from ordering o inner join detail_ordering do on o.id = do.id_ordering inner join fish f on do.id_fish = f.id inner join consumer c on do.id_consumer = c.id where o.id = "${id_order}"`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});
// edit status pesanan
router.put("/pesanan/edit/:idOrder", async(req, res) => {
    try {
        const id_pesanan = req.params.idOrder;
        const { status } = req.body;

        const schema = {
            status: { type: "string", nullable: false },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const query = `UPDATE fishku.ordering SET status = '${status}' WHERE (id = '${id_pesanan}')`;
        await PutOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router;