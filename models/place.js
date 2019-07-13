module.exports = function (sequelize, DataTypes) {
    var Place = sequelize.define("Place", {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jurisdiction: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: true,
            isUppercase: true,
            len: 2
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        services: {
            type: DataTypes.STRING,
            allowNull: false
        },
        external_link: {
            type: DataTypes.STRING,
            isUrl: true
        }
    });

    Place.associate = function (models) {
        Place.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return Place;
};