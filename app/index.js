const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());

app.use((_req, res, next) => { res.header("Access-Control-Allow-Origin", "http://localhost:3001"); res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization" ); next(); });
app.use("/todos", todoRoutes);
app.use("/user", authRoutes);

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});