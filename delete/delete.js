"use strict";
exports.__esModule = true;
var express = require("express");
var client_1 = require("../config/client");
var db_url_1 = require("../config/db_url");
var db_config_1 = require("../config/db_config");
var remove = express.Router()["delete"]("/", function (req, res) {
    client_1["default"].connect(db_url_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(db_config_1["default"].db_name);
            db.collection(db_config_1["default"].collection_name).deleteOne({ "e_id": req.body.e_id }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ "delete": "success" });
                }
            });
        }
    });
});
exports["default"] = remove;
