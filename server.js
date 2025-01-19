import mongoose from "mongoose";
import express from "express";
import { config } from "dotenv";
import ModelJuegos from "./model/esquemaJuegos.js"; // Importa el modelo
import ModelJuegos2 from "./model/esquemaJuegos2.js"; // Importa el modelo2
import cors from "cors"

config();

const app = express();
app.use(cors())
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON

// Rutas
app.get("/", (req, res) => {
    console.log("hola mundo");
    res.send("estas en el home");
});

app.post("/create", async (req, res) => { // Usa async para poder usar await
    try {
        const body = req.body; // req.body es un objeto, no una función
        const nuevoJuego = await ModelJuegos.create(body); // Espera a que se cree el juego
        res.status(201).json(nuevoJuego); // Responde con el juego creado y código 201 (Created)
    } catch (error) {
        console.error("Error al crear el juego:", error); // Imprime el error para depurar
        res.status(500).json({ error: error.message, message: "Error al crear el juego" }); // Responde con un error 500 y un mensaje más descriptivo
    }
});

app.get("/juegos", async (req, res) => { // Usa async para poder usar await
    try {
        const body = req.body; // req.body es un objeto, no una función
        const nuevoJuego = await ModelJuegos.find(); // Espera a que se cree el juego
        res.status(201).json(nuevoJuego); // Responde con el juego creado y código 201 (Created)
    } catch (error) {
        console.error("Error al crear el juego:", error); // Imprime el error para depurar
        res.status(500).json({ error: error.message, message: "Error al crear el juego" }); // Responde con un error 500 y un mensaje más descriptivo
    }
});
// rutas 2
app.get("/juegos2", async (req, res) => { // Usa async para poder usar await
    try {
        const body = req.body; // req.body es un objeto, no una función
        const nuevoJuego = await ModelJuegos2.find(); // Espera a que se cree el juego
        res.status(201).json(nuevoJuego); // Responde con el juego creado y código 201 (Created)
    } catch (error) {
        console.error("Error al crear el juego:", error); // Imprime el error para depurar
        res.status(500).json({ error: error.message, message: "Error al crear el juego" }); // Responde con un error 500 y un mensaje más descriptivo
    }
});

app.post("/create2", async (req, res) => { // Usa async para poder usar await
    try {
        const body = req.body; // req.body es un objeto, no una función
        const nuevoJuego = await ModelJuegos2.create(body); // Espera a que se cree el juego
        res.status(201).json(nuevoJuego); // Responde con el juego creado y código 201 (Created)
    } catch (error) {
        console.error("Error al crear el juego:", error); // Imprime el error para depurar
        res.status(500).json({ error: error.message, message: "Error al crear el juego" }); // Responde con un error 500 y un mensaje más descriptivo
    }
});

app.use((req, res) => {
    console.log("ruta no encontrada");
    res.status(404).send("la ruta no existe"); // Devuelve un código 404 (Not Found)
});

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.error("Error de conexión:", error));

const PORT = process.env.PORT || 3000; // Usa un puerto definido en .env o el 3000 por defecto
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));