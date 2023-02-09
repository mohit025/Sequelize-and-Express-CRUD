const {Sequelize,DataTypes}= require('sequelize');


const Mymodel=sequelize.define('Mymodel',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    body:{
        type:DataTypes.STRING
    }
});
Mymodel.sync()
.then(()=>{
    // console.log("Table created");

    var instance = Mymodel.build({
        title:'my title',
        body:'some body'
    })
    instance.save();


})
.catch((err)=>{

    console.log("cannot create table");
    console.log(err);
})

module.exports=Mymodel;