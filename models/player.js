module.exports = function (sequelize, DataTypes) {
    const Player = sequelize.define("Player", {
        name: DataTypes.STRING,
        points: DataTypes.INTEGER,
        rebounds: DataTypes.INTEGER,
    });

    // Team.associate = function (models) {
    //     Team.belongsToMany(models.SteamUser, {
    //         through: "SteamUserGames",
    //         foreignKey: "gameId",
    //     });
    // };

    return Player;
};