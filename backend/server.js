const express = require("express")
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/auth.routes.js');
const messageRoute = require('./routes/message.route.js')
const userRoutes = require('./routes/user.route.js')
const { connectToMongodb } = require("./db/connectToMongodb.js");
const PORT = process.env.PORT || 5000

 dotenv.config();

 app.use(express.json());
 app.use(cookieParser());

 app.use("/api/auth",authRoutes);
 app.use("/api/messages",messageRoute);
 app.use("/api/users",userRoutes);
 
//  app.get("/", (req, res) => {
//     res.send("hello world")
//  })

 app.listen(PORT,() => {
   connectToMongodb()
   console.log(`server running on ${PORT} port`);
 })