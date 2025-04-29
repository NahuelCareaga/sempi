const {body} = require('express-validator');

let registerValidations = [
    body('nombre')
        .notEmpty().withMessage('El campo está vacío'),
    body('email')
        .isEmail().withMessage('Debes escribir un correo válido'),
    body('dni')
        .notEmpty().withMessage('El campo está vacío'),
    body('telefono')
        .notEmpty().withMessage('El campo está vacío'),
    
];

module.exports = registerValidations