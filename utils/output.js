const db = require("../config/config");
const { DecryptPassword } = require("../middleware/hash");
const { CreateToken } = require("../middleware/token");

// response error
ErrorResponse = (err, res) => {
    console.log(err.message);
    return res.status(500).json({
        message: "server error: ",
        detail: err.message,
    });
};

// untuk response GET
GetOutput = (query, res) => {
    db.query(query, (err, result) => {
        if (err) {
            ErrorResponse(err, res);
        } else {
            return res.status(200).json({
                banyak: result.length,
                data: result,
            });
        }
    });
};

// untuk response POST
PostOutput = (query, res) => {
    db.query(query, (err, result) => {
        if (err) {
            ErrorResponse(err, res);
        } else {
            return res.status(200).json({
                message: "Input Success",
            });
        }
    });
};

// untuk response PUT
PutOutput = (query, res) => {
    db.query(query, (err, result) => {
        if (err) {
            ErrorResponse(err, res);
        } else {
            return res.status(200).json({
                message: "Edit Success",
                data: result.insertId,
            });
        }
    });
};


// untuk response DELETE
DeleteOutput = (query, res) => {
    db.query(query, (err, result) => {
        if (err) {
            ErrorResponse(err, res);
        } else {
            return res.status(200).json({
                message: "Delete Success",
            });
        }
    });
};

// untuk response PUT and GET 
PutandGetOutput = (query, query2, res) => {
    db.query(query, (err, result) => {
        if (err) {
            ErrorResponse(err, res);
        } else {
            db.query(query2, (err, result) => {
                if (err) {
                    ErrorResponse(err, res);
                } else {
                    return res.status(200).json({
                        message: "Edit Success",
                        data: result
                    })
                }
            });
        }
    });
};

// untuk check email saat registrasi
Registrasi = (queryEmail, queryInput, res) => {
    db.query(queryEmail, (err, result) => {
        if (err) {
            return ErrorResponse(err, res);
        } else if (result.length != 0) {
            return res.status(400).send({
                message: "Email telah digunakan",
            });
        } else {
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
    });
};

//untuk check email + check password saat login
CheckLogin = (query, password, res) => {
    db.query(query, (err, result) => {
        // cek email + password
        if (err) {
            return ErrorResponse(err, res);
        } else if (result.length == 0) {
            return res.status(400).json({
                message: "Email salah",
            });
        } else if (DecryptPassword(password, result[0]["password"])) {
            const accessToken = CreateToken({ id: result[0].id });
            res.header('auth-token', accessToken)
            return res.status(200).json({
                token: accessToken,
                data: result,
            });
        } else {
            return res.status(400).json({
                message: "Password salah",
            });
        }
    });
};

// untuk response POST input order
PostOutput1 = (query, res) => {
    db.query(query, (err, result) => {
        if (err) {
            ErrorResponse(err, res);
        } else {
            return res.status(200).json({
                message: "Input Success",


            }).get(query);

        }
    });
};

module.exports = { GetOutput, PostOutput, PutOutput, DeleteOutput, Registrasi, CheckLogin, ErrorResponse, PutandGetOutput };