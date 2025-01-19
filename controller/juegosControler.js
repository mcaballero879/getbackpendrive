import juegos from "../model/esquemaJuegos";

const createJuegosController = async(req, res) => {
    const juegoNuevo = await juegos.create(req.body)
    res.status(201).juegos(juegoNuevo) 

} 