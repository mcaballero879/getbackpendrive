import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Nombre obligatorio (añadido)
    peso: { type: Number },
    img: { type: String }
});

const ModelJuegos = mongoose.model('Juegos', juegoSchema);

export default ModelJuegos;