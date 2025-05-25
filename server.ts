import { app } from "./src/app";
import { dbConnection } from "./src/config/database";

const PORT = 8000;

async function db() {
    const connect = await dbConnection();

    connect.on("error", () => {
        console.log("Erro ao se conectar na base de dados!");
    })

    connect.once("open", () => {
        console.log("Conectado ao banco de dados!")
    })
}

db();

app.listen(PORT, () => {
    console.log("API LISTENING ON PORT " + PORT);
});