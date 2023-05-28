const express = require("express");
const router = express.Router();


const Xendit = require("xendit-node");
const x = new Xendit({
    secretKey: process.env.PAYMENT,
});

const { Invoice } = x;
const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);

// disti
// buat invoice
router.post("/create/invoice", async(req, res) => {
    try {
        const invoice = await i.createInvoice({
            // external id: id order
            externalID: req.body.externalID,
            payerEmail: req.body.payerEmail,
            description: req.body.description,
            amount: req.body.amount,
        });


        return res.status(200).json({
            message: "Input Success",
            data: invoice,
            invoice_url: invoice.payerEmail

        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: "server error: ",
            detail: err.message,
        });
    }
});

// get invoice
router.get("/invoice/:invoiceID", async(req, res) => {
    try {
        const invoice = await i.getInvoice({
            invoiceID: req.params.invoiceID,
        });

        return res.status(200).json({
            data: invoice,
        });

    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: "server error: ",
            detail: err.message,
        });
    }

});

module.exports = router;