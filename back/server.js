const app=require("./app");

//Seteo de archivo de configuracion

const dotenv=require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({path:'back/config/config.env'});

//configurar base de datos
connectDatabase();


//llamamos al server
const server= app.listen(process.env.PORT,  () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`);
}  )