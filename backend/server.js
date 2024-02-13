const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/auth.routes.js');
const messageRoute = require('./routes/message.route.js')
const userRoutes = require('./routes/user.route.js')
const { connectToMongodb } = require("./db/connectToMongodb.js");
const { app, server } = require("./socket/socket.js");
const PORT = process.env.PORT || 5000;

const __variableOfChoice = path.resolve();

 dotenv.config();

 app.use(express.json());
 app.use(cookieParser());

 app.use("/api/auth",authRoutes);
 app.use("/api/messages",messageRoute);
 app.use("/api/users",userRoutes);

 app.use(express.static(path.join(__variableOfChoice, "/frontend/dist")));

 app.get("*", (req, res) => {
   res.sendFile(path.join(__variableOfChoice, "frontend", "dist", "index.html"));
 });
 
 server.listen(PORT,() => {
   connectToMongodb()
   console.log(`server running on ${PORT} port`);
 })