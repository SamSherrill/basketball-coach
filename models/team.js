// Example model code from my game library comparison app

module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        name: DataTypes.STRING,
        appId: DataTypes.STRING,
        playtime: DataTypes.STRING,
        gameBanner: DataTypes.STRING
    });

    Game.associate = function (models) {
        Game.belongsToMany(models.SteamUser, {
            through: "SteamUserGames",
            foreignKey: "gameId",
        });
    };

    return Game;
};