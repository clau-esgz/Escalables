const mongoose = require("mongoose");
 
const connectDB = () => {
 
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "readwise",
    }).then(
        () => {
            console.log("Conexión existosa con la BD");
        }
    ).catch(
        (error) => {
            console.log("Error de conexión con la BD");
            console.log(error);
        }
    )
}
 
module.exports = connectDB;