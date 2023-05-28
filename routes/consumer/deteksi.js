const express = require("express");
const router = express.Router();
const { GetOutput, ErrorResponse } = require("../../utils/output");


// GET ikan deteksi
router.get("/detect/fish", async(req, res) => {
    try {
        const query = "SELECT * FROM detect_fish ";
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET foto ikan deteksi
router.get("/detect/photo/fish", async(req, res) => {
    try {
        const query = "";
        await GetOutput(query, res);
    } catch (error) {
        return ErrorResponse(err, res);

    }
})
module.exports = router;