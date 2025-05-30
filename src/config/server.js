const express = require('express');
const cors = require('cors');
const connectDB = require('./database');

class Server {
  constructor() {
     this.app = express();
     this.port = process.env.PORT || 8080;

     this.generosPath = "/api/generos";
     this.authPath= "/api/auth";
     this.autoresPatch = "/api/autores";
     this.librosPath = "/api/libros";
     this.resenasPath = "/api/resenas";
    
     this.app.use(cors({}));
     this.app.use(express.json());
     this.routes();
        connectDB();
        require('../models/resena');
  }
    routes() {
        this.app.use(this.generosPath, require('../routes/generos'));
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.autoresPatch, require('../routes/autores'));
        this.app.use(this.librosPath, require('../routes/libros'));
        this.app.use(this.resenasPath, require('../routes/resenas'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`esto esta jalando en el puerto: ${this.port}`);
        });
    }
  
}
module.exports = Server;

