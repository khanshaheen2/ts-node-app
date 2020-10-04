import * as express from "express";
import * as bodyparser from "body-parser";
import * as cors from "cors";
let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
import fetch from "./fetch/fetch";
import insert from "./insert/insert";
import update from "./update/update";
import remove from "./delete/delete";
app.use("/fetch",fetch);
app.use("/insert",insert);
app.use("/update",update);
app.use("/delete",remove);

var port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started at the port no: ",port);
});
