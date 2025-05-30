const { response, request } = require('express');
const libro = require('../models/libro');

const libros = [];

const getLibro = (req = request, res = response) => {
    const { id } = req.params;

    res.status(200).json({
        msg: "getLibro",
        id
    });
}

const createLibro = async (req, res) => {
    try {
        const { isbn, autor, editorial, genero, titulo, sinopsis, portada, promedio_calificaciones, fecha_publicacion, numero_paginas } = req.body;

        const newLibro = new libro({
            isbn,
            autor,
            editorial,
            genero,
            titulo,
            sinopsis,
            portada,
            promedio_calificaciones,
            fecha_publicacion,
            numero_paginas
        });

        await newLibro.save();

        res.status(201).json(newLibro);
    } catch (error) {
        console.error('Error creating libro:', error);
        res.status(500).json({ message: error.message });
    }
};
const getLibros = async (req = request, res = response) => {
    const search = req.query.search || '';
    let filter = {};

    if (search) {
        filter = {
            $or: [
                { titulo: { $regex: search, $options: 'i' } },
                { autor: { $regex: search, $options: 'i' } }
            ]
        };
        console.log(filter);
    }

    try {
        const libros = await libro.find(filter);
        res.json(libros);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getGeneros = async (req = request, res = response) => {
    const search = req.query.search || '';
    let filter = {};
 
    if (search) {
        filter = {
            $or: [
                { nombre: { $regex: search, $options: 'i' } },
                { descripcion: { $regex: search, $options: 'i' } }
            ]
        };
        console.log(filter);
    }
 
    try {
        const generos = await Genero.find(filter);
        res.json(generos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateGenero = (req = request, res = response) => {
    res.status(200).json({
        msg: "updateGenero"
    });
}

const deleteGenero = async (req, res) => {
    try {
        const generoId = req.params.id;
        // Optional: Add authentication/authorization check here if needed
        // e.g., check if user is admin

        const deletedGenero = await Genero.findByIdAndDelete(generoId);

        if (!deletedGenero) {
            return res.status(404).json({ message: 'Genero not found' });
        }

        res.status(200).json({ message: 'Genero deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
module.exports = {
    getLibros,
    createLibro,
    updateLibro,
    deleteLibro,
    getGenero
}