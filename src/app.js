const express = require('express');
const app = express();
const cors = require("cors")

const {resolve} = require('path');

const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE

const session = require('express-session');

app.listen(3004, function () {
    console.log("Servidor corriendo");
});

app.use(cors());
app.set('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(resolve(__dirname,'..','public/')));

/**bootstrap */
app.use("/css",express.static(resolve(__dirname, "node_modules/bootstrap/dist/css")))

app.use("/js",express.static(resolve(__dirname, "node_modules/bootstrap/dist/js")))
/**bootstrap  */
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(express.json());

const userRouter = require('./routes/userRouter');

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);
