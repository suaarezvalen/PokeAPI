const express = require("express");
const app = express();

app.set("view engine", "ejs");

//RUTAS
const apiRoutes = require("./routes/api");

app.use("/api", apiRoutes);


//LOCALHOST
app.listen(3000, () => {console.log("Servidor corriendo en el puerto 3000")})
