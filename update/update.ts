import * as express from "express";
import myclient from "../config/client";
import data from "../config/db_config";
import url from "../config/db_url";

let update = express.Router().put("/",(req,res)=>{
    myclient.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db(data.db_name);
            db.collection(data.collection_name).updateOne(
                {"e_id":req.body.e_id},
                {$set:{"e_sal" : req.body.e_sal,
                "e_designation":req.body.e_designation,
                "contact":req.body.contact,
                "e_dept":req.body.e_dept}},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({update:"success"});
                    }
                });
        }
    });
});
export default update;