"use strict";
exports.__esModule = true;
var express = require("express");
var client_1 = require("../config/client");
var db_config_1 = require("../config/db_config");
var db_url_1 = require("../config/db_url");
var insert = express.Router().post("/", function (req, res) {
    client_1["default"].connect(db_url_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var records = {
                "e_id": req.body.e_id,
                "e_name": req.body.e_name,
                "e_sal": req.body.e_sal,
                "dob": req.body.dob,
                "e_designation": req.body.e_designation,
                "contact": req.body.contact,
                "hobbies": req.body.hobbies,
                "e_dept": req.body.e_dept,
                "gender": req.body.gender
            };
            var db = client.db(db_config_1["default"].db_name);
            db.collection(db_config_1["default"].collection_name).insertOne(records, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ insert: "Success" });
                }
            });
        }
    });
});
exports["default"] = insert;
