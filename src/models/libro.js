const mongoose = require("mongoose");

const libroSchema = mongoose.Schema({
    isbn: Number,
    autor: String,
    editorial: String,
    genero: String,
    titulo: String,
    sinopsis: String,
    portada: String,
    promedio_calificaciones: Number,
    fecha_publicacion: String,
    numero_paginas: Number,
    resenas: [String]
})

module.exports = mongoose.model("Libro", libroSchema);