"use strict";
exports.__esModule = true;
var express = require("express");
var client_1 = require("../config/client");
var db_config_1 = require("../config/db_config");
var db_url_1 = require("../config/db_url");
var update = express.Router().put("/", function (req, res) {
    client_1["default"].connect(db_url_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(db_config_1["default"].db_name);
            db.collection(db_config_1["default"].collection_name).updateOne({ "e_id": req.body.e_id }, { $set: { "e_sal": req.body.e_sal,
                    "e_designation": req.body.e_designation,
                    "contact": req.body.contact,
                    "e_dept": req.body.e_dept } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ update: "success" });
                }
            });
        }
    });
});
exports["default"] = update;
