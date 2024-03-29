/********************************
 * Review Model for The Village
 * 
 * @author The Village People
 * 
 * 2019-07-13
 ********************************/

module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 5
            }
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
    return Review;
};