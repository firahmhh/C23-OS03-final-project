const db = require("../../config/config");
const express = require("express");
const router = express.Router();
const idAutoIncrement = require("id-auto-increment");
const Validator = require("fastest-validator");
const v = new Validator();
const { PostOutput, PostOutput1, GetOutput, ErrorResponse } = require("../../utils/output");

// res error dan output error

// POST input ordering
router.post("/pesanan/input", (req, res) => {
    try {
        const { name, address, poi, latitude, longitude, mobile_number, goods, date, status, invoice_url } = req.body;

        // validasi
        const schema = {
            name: { type: "string", nullable: false },
            address: { type: "string", nullable: false },
            poi: { type: "string", nullable: false },
            latitude: { type: "string", nullable: false },
            longitude: { type: "string", nullable: false },
            mobile_number: { type: "string", nullable: false, numeric:  true  },
            goods: { type: "string", nullable: false },
            date: { type: "custom", nulable: false },
            status: { type: "string", nulable: false },
            invoice_url: { type: "string", nulable: false },

            // name: {},
            // date: { type: "custom", nulable: false },
            // notes: { type: "string", nullable: true },
            // status: { type: "string", nulable: false },
            // // kurir: { type: "string", nulable: false },
            // alamat: { type: "string", nulable: false },
            // invoice_url: { type: "string", nulable: false },
            // latitude: { type: "string", nullable: true },
            // longitude: { type: "string", nullable: true },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        // date must be YYYY-MM-DD hh:mm:ss
        const query = `INSERT INTO ordering (name, address, poi, latitude, longitude, mobile_number, goods, date, status, invoice_url) VALUES ('${name}', '${address}', '${poi}', '${latitude}', '${longitude}', '${mobile_number}', '${goods}', '${date}', '${status}', '${invoice_url}')`;
        // await PostOutput1(query, res);

        db.query(query, (err, result) => {
            if (err) {
                ErrorResponse(err, res);
            } else {
                return res.status(200).json({
                    message: "input success",
                    id_ordering: result.insertId,
                });
            }
        });
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// ++ wika
// POST input detail_ordering
// id_ordering harus sama dengan id di POST input ordering
router.post("/pesanan/input/detail/:id_consumer", async(req, res) => {
    try {
        const id_consumer = req.params.id_consumer;
        const data = req.body.data;
        const id_ordering = req.body.id_ordering;

        // // validasi
        const schema = {
            data: { type: "array", items: "number", nullable: false },
            id_ordering: { type: "string", nullable: false, numeric: true },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const queryGetCart = `SELECT * FROM cart where id_consumer = '${id_consumer}';`;
        db.query(queryGetCart, (err, result) => {
            if (err) {
                ErrorResponse(err, res);
            } else {
                result.forEach((itemResult) => {
                    data.forEach((itemData) => {
                        if (itemResult.id == itemData) {
                            const queryInputDetailOrder = `INSERT INTO detail_ordering (notes, weight, id_consumer, id_fish, id_ordering) VALUES ('${itemResult.notes}', '${itemResult.weight}', '${itemResult.id_consumer}', '${itemResult.id_fish}', '${id_ordering}')`;
                            const queryDeleteCart = `DELETE FROM cart WHERE id = ${itemResult.id}`;
                            db.query(queryInputDetailOrder, (err) => {
                                if (err) {
                                    ErrorResponse(err, res);
                                } else {
                                    db.query(queryDeleteCart, (err) => {
                                        if (err) {
                                            ErrorResponse(err, res);
                                        }
                                    });
                                }
                            });
                        }
                    });
                });

                return res.status(200).json({
                    message: "Input data Success",
                });
            }
        });
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

router.post("/pesanan/input/test", async(req, res) => {
    try {
        const { date, notes, status, weight, notes_detail, id_consumer, id_fish } = req.body;

        // validasi
        const schema = {
            date: { type: "custom", nulable: false },
            notes: { type: "string", nullable: true },
            status: { type: "string", nulable: false },
            notes_detail: { type: "string", nullable: true },
            weight: { type: "string", nullable: false, numeric: true },
            id_consumer: { type: "string", nullable: false, numeric: true },
            id_fish: { type: "string", nullable: false, numeric: true },
        };
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: validationResponse,
            });
        }

        const queryOrder = `INSERT INTO ordering ( date, notes, status) VALUES ( '${date}', '${notes}', '${status}')`;
        const queryGetId = `SELECT LAST_INSERT_ID();`;
        // input order
        const data = [];
        db.query(queryOrder, (err, result) => {
            if (err) {
                ErrorResponse(err, res);
            }
            console.log(result.insertId);
            console.log(typeof result.insertId);
            data.push(result.insertId);
            // const getDataLastInput = `SELECT * FROM ordering WHERE id = '${result.insertId}'`;
            // db.query(getDataLastInput, (err, result) => {
            //   if (err) {
            //     ErrorResponse(err, res);
            //   }
            //   request.setHeader("Content-Type", "application/json");
            //   return res.status(200).json({
            //     data: result,
            //   });
            // });
        });
        // const getLast = `SELECT LAST_INSERT_ID();`;
        // console.log("ini id : ", id);
        // console.log(typeof id);
        // var s = JSON.stringify(data[0].Spalte);
        // var d = JSON.parse(s);
        // console.log(d);
        // const queryDetailOrder = `INSERT INTO fishku.detail_ordering (notes, weight, id_consumer, id_fish, id_ordering) VALUES ('${notes_detail}', '${weight}', '${id_consumer}', '${id_fish}', '${JSON.stringify()}')`;
        // db.query(queryDetailOrder, (err, result) => {
        //   if (err) {
        //     ErrorResponse(err, res);
        //   } else {
        //     return res.status(200).json({
        //       data: "success",
        //     });
        //   }
        // });
        return res.status(200).json({
            data: "berhasil",
        });
    } catch (err) {
        ErrorResponse(err, res);
    }
});

// GET order by id order & id consumer
router.get("/pesanan/:idConsumer/:idOrder", (req, res) => {
    try {
        const id_consumer = req.params.idConsumer;
        const id_order = req.params.idOrder;

        const query = `select o.id as id_ordering, c.name as consumer_name , o.date , f.name as fish_name, do.weight, f.price as fish_price, o.status, f.photo_url, o.invoice_url, s.email as email_seller
        from ordering o 
        inner join detail_ordering do on o.id = do.id_ordering 
        inner join fish f on do.id_fish = f.id 
        inner join consumer c on do.id_consumer = c.id 
        inner join seller s on f.id_seller = s.id
        where do.id_ordering =${id_order} and do.id_consumer=${id_consumer}`;
        GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET order by id order
router.get("/pesanan/idOrder/:id_order", (req, res) => {
    try {
        const id_order = req.params.id_order;
        const query = `select o.id as id_ordering, o.name, o.address, o.poi, o.latitude, o.longitude, o.mobile_number, o.goods, o.date, o.status, o.invoice_url
        from ordering o 
        where id ="${id_order}"`;
        GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }

    // ini yg lama
    // try {
    //     const id_order = req.params.id_order;
    //     const query = `select o.id as id_ordering, c.name as consumer_name , o.date , f.name as fish_name, do.weight, f.price as fish_price, o.status, f.photo_url, o.invoice_url from ordering o inner join detail_ordering do on o.id = do.id_ordering inner join fish f on do.id_fish = f.id inner join consumer c on do.id_consumer = c.id where do.id_ordering ="${id_order}"`;
    //     GetOutput(query, res);
    // } catch (err) {
    //     return ErrorResponse(err, res);
    // }
});

// GET all order by id order
router.get("/pesanan/all/idOrder/:idOrder", (req, res) => {
    try {
        const id_order = req.params.idOrder;

        const query = `select o.id as id_ordering, o.date , sum(do.weight*f.price) as total_price, o.status 
        from ordering o 
        inner join detail_ordering do on o.id = do.id_ordering 
        inner join fish f on do.id_fish = f.id
        where do.id_ordering ="${id_order}"`;
        GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET all order by id consumer
router.get("/pesanan/all/idConsumer/:idConsumer", (req, res) => {
    try {
        const id_consumer = req.params.idConsumer;

        const query = `select o.id as id_ordering, o.date , sum(do.weight*f.price) as total_price, o.status, o.invoice_url 
        from ordering o 
        inner join detail_ordering do on o.id = do.id_ordering 
        inner join fish f on do.id_fish = f.id
        where do.id_consumer ="${id_consumer}"
        group by o.id, f.id`;
        GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET ordering by id consumer
router.get("/pesanan/idConsumer/:idConsumer", (req, res) => {
    try {
        const id_consumer = req.params.idConsumer;

        const query = `select o.id as id_ordering, c.name as consumer_name , o.date , f.name as fish_name, do.weight, f.price as fish_price, o.status, f.photo_url 
        from ordering o 
        inner join detail_ordering do on o.id = do.id_ordering 
        inner join fish f on do.id_fish = f.id 
        inner join consumer c on do.id_consumer = c.id 
        where do.id_consumer ="${id_consumer}"
        group by o.id, f.id`;
        GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// GET all ordering
router.get("/pesanan/all", (req, res) => {
    try {
        const query = `select o.id as id_ordering, o.date , sum(do.weight*f.price) as total_price, o.status 
        from ordering o 
        inner join detail_ordering do on o.id = do.id_ordering 
        inner join fish f on do.id_fish = f.id
        group by o.id, f.id
        ;`;
        GetOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

// cancel order
router.delete("/order/delete/:idOrder", (req, res) => {
    try {
        const idOrder = req.params.idOrder;
        const query = `DELETE FROM ordering WHERE id = ${idOrder}`;
        // hapus data
        DeleteOutput(query, res);
    } catch (err) {
        return ErrorResponse(err, res);
    }
});

module.exports = router;