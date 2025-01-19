import mongoose from "mongoose";

const juegoSchema2 = new mongoose.Schema({
    nombre: { type: String, required: true }, // Nombre obligatorio (añadido)
    peso: { type: Number },
    img: { type: String }
});

const ModelJuegos2 = mongoose.model('coleccion2', juegoSchema2);

export default ModelJuegos2;