module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        homeTeamID: DataTypes.STRING,
        roadTeamID: DataTypes.STRING,
        // Do I want to statically hold the box score in the Game model,
        // or do I want to dynamically add stats up from the data in all
        // possessions each time the those stats are needed
        didHomeTeamWin: DataTypes.BOOLEAN,
        // MySQL dates: https://dev.mysql.com/doc/refman/8.0/en/datetime.html#:~:text=MySQL%20retrieves%20and%20displays%20DATE,%3Amm%3Ass%20'%20format.
        // ** Check all of my time & location datatypes!
        startTime: DataTypes.TIMESTAMP,
        // In the GUI, game endtime should probably default to 2.5 or 3 hours after start time.
        // Should I set a default for endTime based on startTime?
        endTime: DataTypes.TIMESTAMP,
        timeZone: DataTypes.INTEGER,
        locationOfGame: DataTypes.STRING,
    });

    // Team.associate = function (models) {
    //     Team.belongsToMany(models.SteamUser, {
    //         through: "SteamUserGames",
    //         foreignKey: "gameId",
    //     });
    // };

    return Game;
};