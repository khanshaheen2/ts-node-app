import * as express from "express";
import myclient from "../config/client";
import url from "../config/db_url";
import data from "../config/db_config";
let remove = express.Router().delete("/",(req,res)=>{
    myclient.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db(data.db_name);
            db.collection(data.collection_name).deleteOne({"e_id":req.body.e_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });
});
export default remove;