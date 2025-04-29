function usuariosData (sequelize, Datatypes){
    
    let alias = 'usuario';

    let cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(150)},
        dni: {type: Datatypes.STRING(50)},
        telefono: {type: Datatypes.STRING(50)},
        email: {type: Datatypes.STRING(100)},
    }

    let config = {camelCase: false, timestamps: false};

    const usuario = sequelize.define(alias, cols, config);

    return usuario;

}

module.exports = usuariosData; 