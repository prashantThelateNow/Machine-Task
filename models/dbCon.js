const { Sequelize, DataTypes } = require('sequelize');

//Instance for connection
const sequelize = new Sequelize('isotank', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql',
    pool: {max:5, min:0, idle:10000}
});

//Establish Database connection
let establishConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
}
establishConnection();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.assets = require('./assets')( sequelize, DataTypes );
sequelize.sync({force: false}).then(() => { 

})

module.exports = { sequelize, db };