const express = require("express");
const app = express();
const path = require('path');


//INSTALACIONES
app.set("view engine", "ejs");


//
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const publicPath2 = path.resolve(__dirname, "./views");
app.use(express.static(publicPath2));


//RUTAS
const apiRoutes = require("./routes/api");
const homeRoutes = require("./routes/home");

app.use("/api", apiRoutes);
app.use("/", homeRoutes);


//LOCALHOST
app.listen(3000, () => {console.log("Servidor corriendo en el puerto 3000")})
