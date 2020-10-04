import * as express from "express";
import myclient from "../config/client";
import data from "../config/db_config";
import url from "../config/db_url";

let insert = express.Router().post("/",(req,res)=>{
    myclient.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let records = {
                "e_id":req.body.e_id,
                "e_name":req.body.e_name,
                "e_sal" : req.body.e_sal,
                "dob":req.body.dob,
                "e_designation":req.body.e_designation,
                "contact":req.body.contact,
                "hobbies":req.body.hobbies,
                "e_dept":req.body.e_dept,
                "gender":req.body.gender
            };
            let db = client.db(data.db_name);
            
            db.collection(data.collection_name).insertOne(records,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({insert: "Success"});
                }
            });
        }
    });
});
export default insert;