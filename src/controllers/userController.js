const fs = require('fs');
const path = require('path');

const {validationResult} = require('express-validator');

const db = require ('../database/models')

const { name } = require('ejs');

const { Sequelize } = require('sequelize');

const userController ={

    register: (req, res) => {
        res.render('register');
    },  

    }


module.exports = userController;