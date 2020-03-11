const {Model, DataTypes} = require('sequelize');

class Courses extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            load: DataTypes.INTEGER,
            description: DataTypes.TEXT,
        },{
            sequelize
        })
    }
}


module.exports = Courses;