const express = require('express');

const router = express.Router();

const controller = require('../controllers/indexController');

router.get('/', controller.index );

router.get('/Sobre-nosotros', controller.nosotros );

router.get('/perfumes', controller.perfumes);

router.get('/novedades', controller.novedades);

router.get('/novedades/:id', controller.detalleNovedades);

router.get('/contacto', controller.contacto);

router.get('/pagoCliente/:dni', controller.pagoCliente );

router.get('/pagoNoCliente', controller.pagoNoCliente );

router.get('/register', controller.register );

router.post('/register', controller.registerPOST)

module.exports = router;