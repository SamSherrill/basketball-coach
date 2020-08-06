module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        teams: DataTypes.STRING,
        score: DataTypes.INTEGER,
        rebounds: DataTypes.INTEGER,
    });

    // Team.associate = function (models) {
    //     Team.belongsToMany(models.SteamUser, {
    //         through: "SteamUserGames",
    //         foreignKey: "gameId",
    //     });
    // };

    return Game;
};