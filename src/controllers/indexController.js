const fs = require('fs');
const path = require('path');

const novedadesFilePath = path.join(__dirname, '../database/novedades.json');
let novedades = JSON.parse(fs.readFileSync(novedadesFilePath, 'utf-8'));

const {validationResult} = require('express-validator');

const db = require ('../database/models')

const { name } = require('ejs');

const { Sequelize } = require('sequelize');

const controller ={

        index: (req,res) => {
        res.render("index");
        },

        nosotros: (req,res) => {
            res.render("nosotros");
        },

        perfumes: (req,res) => {
            res.render("perfumes");
        },

        novedades: (req,res) => {
            novedades = JSON.parse(fs.readFileSync(novedadesFilePath, 'utf-8'));
		    res.render('novedades', {novedades});
        },

        detalleNovedades : (req, res) => {

            let id = req.params.id;
            novedades = JSON.parse(fs.readFileSync(novedadesFilePath, 'utf-8'));
            novedades = novedades.find(novedades => novedades.id == id);
            if (novedades){
            res.render('detalleNovedades', {novedades: novedades});
            }
        },

        contacto: (req,res) => {
            res.render("contacto");
        },
        
        register: (req, res) => {
            res.render('register');
        }, 

        pagoNoCliente: (req,res) => {
            res.render("pagoNoCliente");
        },

        pagoCliente: (req,res) => {

         res.render('pagoCliente');
         
        },

        registerPOST: async (req, res) => {
            try {
                const { dni } = req.body;
        
                // Verificar si el usuario ya existe en la base de datos
                const userToLogin = await db.usuario.findOne({ where: { dni } });

                
        
                if (userToLogin) {
                    // Usuario encontrado
                    return res.render('pagoCliente', { dni: dni });

                } else {
                    
                    // Usuario encontrado
                    return res.redirect('pagoNoCliente');

                }
            } catch (error) {
                console.error("Error en registerPOST:", error);
                return res.status(500).json({
                    message: "Ocurrió un error al procesar tu solicitud. Por favor, intenta nuevamente."
                });
            }
        },
        
        

};

module.exports = controller;