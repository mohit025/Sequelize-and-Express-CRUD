const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize=new Sequelize('mynewsample', 'root', '',{
    host:'localhost',
    dialect:'mysql'

});

const connect=async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection open");
    }
    catch(e){
        console.log("Failed");
    }
}

module.exports = connect;
global.sequelize = sequelize;