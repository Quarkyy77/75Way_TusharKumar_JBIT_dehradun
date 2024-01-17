import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from 'http'
import mongoose from 'mongoose'
import router from "./router/authentication";
import router1 from "./router/users"
// import router2 from "./router/jobsroute";
dotenv.config();

const helmet = require('helmet')

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();


 app.use(helmet());
app.use(cors());
app.use(express.json());


const server=http.createServer(app);    

server.listen(4000,()=>{
    console.log("Server is running on port 4000 at http://localhost:4000");
});
console.log(process.env.MONGO_URI);
const MONGO_URL=process.env.MONGO_URI;
mongoose.Promise=Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error: Error)=>console.log("HELLO THERE"));

app.use('/auth', router);
app.use('/', router1);
// app.use('/', router2);