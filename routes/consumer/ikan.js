const express = require("express");
const router = express.Router();
const db = require("../../config/config");
const { GetOutput, ErrorResponse } = require("../../utils/output");

// ++ wika
// get ikan
router.get("/ikan/cek/:idConsumer/:idIkan", async(req, res) => {
    try {
        const idConsumer = req.params.idConsumer;
        const idIkan = req.params.idIkan;

        const queryGetIkan = `SELECT * FROM fish WHERE id = '${idIkan}'`;
        const queryGetCart = `SELECT * FROM cart WHERE id_fish = '${idIkan}' && id_consumer = '${idConsumer}'`;
        db.query(queryGetCart, (err, result) => {
            if (err) {
                ErrorResponse(err, res);
            } else {
                if (result.length != 0) {
                    db.query(queryGetCart, (err, result) => {
                        if (err) {
                            ErrorResponse(err, res);
                        } else {
                            return res.status(200).json({
                                tabel: "Cart",
                                data: result,
                            });
                        }
                    });
                } else {
                    db.query(queryGetIkan, (err, result) => {
                        if (err) {
                            ErrorResponse(err, res);
                        } else {
                            return res.status(200).json({
                                tabel: "Ikan",
                                data: result,
                            });
                        }
                    });
                }
            }
        });
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET semua ikan
router.get("/ikan/all", async(req, res) => {
    try {
        const query = "select f.id as id_fish, f.name, f.price, s.location, f.photo_url from fish f JOIN seller s ON f.id_seller = s.id";
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

//  GET search ikan
router.get("/ikan/:namaIkan", async(req, res) => {
    try {
        const fishName = req.params.namaIkan;

        const query = `select id as id_fish, name, weight, price, photo_url from fish where name like "%${fishName}%"`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET detail_ikan (consumer)
router.get("/ikan/detail/:idIkan", async(req, res) => {
    try {
        const idIkan = req.params.idIkan;

        const query = `SELECT f.id as id_fish, f.name ,s.name as saller_name , s.location, f.weight,f.price, f.photo_url, s.email FROM fish f JOIN seller s ON f.id_seller = s.id WHERE f.id = "${idIkan}"`;
        await GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router;