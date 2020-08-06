module.exports = function (sequelize, DataTypes) {
    const Team = sequelize.define("Team", {
        name: DataTypes.STRING,
        wins: DataTypes.INTEGER,
        loses: DataTypes.INTEGER,
    });

    // Team.associate = function (models) {
    //     Team.belongsToMany(models.SteamUser, {
    //         through: "SteamUserGames",
    //         foreignKey: "gameId",
    //     });
    // };

    return Team;
};

// Example model code from my game library comparison app
// module.exports = function (sequelize, DataTypes) {
//     const Game = sequelize.define("Game", {
//         name: DataTypes.STRING,
//         appId: DataTypes.STRING,
//         playtime: DataTypes.STRING,
//         gameBanner: DataTypes.STRING
//     });

//     Game.associate = function (models) {
//         Game.belongsToMany(models.SteamUser, {
//             through: "SteamUserGames",
//             foreignKey: "gameId",
//         });
//     };

//     return Game;
// };