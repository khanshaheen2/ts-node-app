import * as express from "express";
import myclient from "../config/client";
import data from "../config/db_config";
import url from "../config/db_url";

let fetch = express.Router().get("/",(req,res)=>{
    myclient.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db(data.db_name);
            db.collection(data.collection_name).find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
export default fetch;