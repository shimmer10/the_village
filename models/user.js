/********************************
 * User Model for The Village
 * 
 * @author The Village People
 * 
 * 2019-07-13
 ********************************/

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return User;
};