import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import { create } from "express-handlebars";
import morgan from "morgan"; //Modulo para ver las consultas hechas en consola

const app = express();

app.set("views", path.join(__dirname, "/views"));

//Motor de plantillas Handlebars
var hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);

/*
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extName: ".hbs",
  })
);
*/

app.set("view engine", ".hbs");

//Middlewares o servicio para vistas de consultas de peticiones GET, POST, PUT en consola
app.use(morgan("dev"));

//Con este codigo vamos poder visualizar los objetos llamados por get o post, res resp en  formato json
app.use(express.urlencoded({ extended: false }));

//Rutas de la aplicacion
app.use(indexRoutes);

//Rutas publicas (Carpeta publica) | con esto hacemos accesible a todo el proyecto la carpeta public y todos los archivos en su interior
app.use(express.static(path.join(__dirname, "public")));

export default app;
