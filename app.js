var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var fileUpload = require("express-fileupload");

// Router
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// customer
var authConsumerRouter = require("./routes/consumer/auth");
var ikanConsumerRouter = require("./routes/consumer/ikan");
var keranjangConsumerRouter = require("./routes/consumer/keranjang");
var pesananConsumerRouter = require("./routes/consumer/pesanan");
var deteksiConsumerRouter = require("./routes/consumer/deteksi");
var profileConsumerRouter = require("./routes/consumer/profile");

// seller
var authSellerRouter = require("./routes/seller/auth");
var ikanSellerRouter = require("./routes/seller/ikan");
var pesananSellerRouter = require("./routes/seller/pesanan");
var profileSellerRouter = require("./routes/seller/profile");

// payment
var invoicePaymentRouter = require("./routes/payment/invoice");
var transaksi = require("./routes/payment/transaksi");

// foto file
// var fotoRouter = require("./routes/storage/gcs");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/auth", authConsumerRouter, authSellerRouter);
// app.use("/ikan", ikanConsumerRouter, ikanSellerRouter);
// app.use("/keranjang", keranjangRouter);
// app.use("/pesanan", pesananConsumerRouter, pesananSellerRouter);

app.use("/consumer", authConsumerRouter, ikanConsumerRouter, keranjangConsumerRouter, pesananConsumerRouter, deteksiConsumerRouter, profileConsumerRouter);
app.use("/seller", authSellerRouter, ikanSellerRouter, pesananSellerRouter, profileSellerRouter);
app.use("/payment", invoicePaymentRouter, transaksi);
// app.use("/foto", fotoRouter);

module.exports = app;