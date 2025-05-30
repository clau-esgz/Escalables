const { Router } = require('express');
const { getLibro, createLibro, updateLibro, deleteLibro, getLibro } = require('../controllers/albums');
const { validateJWT } = require('../middleware/verifyJWT');
const { verifyAdminRole } = require('../middleware/verifyAdminRole');

const router = Router();

router.get("/", getLibros);

router.get("/:id", getLibro);

router.post("/", createLibro);

router.put("/", updateLibro);

router.delete('/:id', deleteLibro);

module.exports = router;