import app from "./app";
import "./database"
import { MONGO_PORT } from "./config";

app.listen(MONGO_PORT);
console.log("Server on port: ", MONGO_PORT);
