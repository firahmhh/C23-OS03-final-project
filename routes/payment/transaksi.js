const express = require("express");
const router = express.Router();

const db = require("../../config/config");
const { GetOutput, PostOutput, ErrorResponse } = require("../../utils/output");

// wika
router.post("/transaksi/input", async(req, res) => {
    try {
        const externalID = req.body.externalID;
        const id_consumer = req.body.id_consumer;
        const id_ordering = req.body.id_ordering;
        const created = req.body.created;
        const paid_at = req.body.paid_at;
        const status = req.body.status;

        const query = ` INSERT INTO transaction (id_external, id_consumer, dates_transaction, dates_payed, id_ordering, status) VALUES ('${externalID}', '${id_consumer}',  '${created}', '${paid_at}','${id_ordering}', '${status}')`;

        await PostOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

router.get("/transaksi/:id_consumer", async(req, res) => {
    try {
        const id_consumer = req.params.id_consumer;

        const query = `SELECT * FROM transaction where id_consumer = '${id_consumer}'`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router;