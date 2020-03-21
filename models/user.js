module.exports = function(sequelize, Sequelize){
    // define a model for our database
    const User = sequelize.define("User", {
        name: Sequelize.STRING ,
        password:  Sequelize.STRING
    })

    return User
}