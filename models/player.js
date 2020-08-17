module.exports = function (sequelize, DataTypes) {
    const Player = sequelize.define("Player", {
        // I gotta think through who the player ID will be generated. It may not be a string.
        // Must auto generate. This will be the primary key.
        playerID: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        // We can hold other information about the player, such as physical characteristics & abilities (Ex: vertical jump)
        heightInches: DataTypes.STRING,
        weightPounds: DataTypes.STRING,

        // Sequelize will auto record when a player is first created in the DB, and when their profile was last updated.
    });

    // Need to write the team association. A player can belong to multiple teams at a time.
    // I'll need to note when they joined the team, and when they left, or if they're currently still on the team.
    // OR, is that handled somewhat automatically for me by seeing what games they played in. Not likely.

    // Team.associate = function (models) {
    //     Team.belongsToMany(models.SteamUser, {
    //         through: "SteamUserGames",
    //         foreignKey: "gameId",
    //     });
    // };

    return Player;
};

// Nate agreed that he needs to add taking charge, drawing a foul, and maybe some others

// FGA
// FGM
// 3 FGA
// 3 FGM
// FTA
// FTM
// Reb
// OReb
// DReb
// Assist
// Missed Assist / Pass
// STL
// BLK
// PF - Good
// PF - Bad
// TO - Good
// TO - Bad
// Deflections
// Screen - Good
// Screen - Bad
// Penetrate - Good
// Penetrate - Bad
// Ball Sticking - Bad
// Shot Selection - Good
// Shot Selection - Bad
// Hustle - Loose Ball
// Hustle - OREB
// Out of Position - Bad
// Execute Play - Good
// Execute Play - Bad
// Outlet Pass - Good
// Outlet Pass - Bad
// Initiate Fastbreak - Good
// Initiate Fastbreak - Bad
// Fastbreak Decisions - Good
// Fastbreak Decisions - Bad
// Fastbreak Finish - Good
// Fastbreak Finish - Bad
// Blockout - Good
// Blockout - Bad
// On - Ball Defense - Good
// On - Ball Defense - Bad
// Helpside Defense - Good
// Helpside Defense - Bad
// Denial Defense - Good
// Denial Defense - Bad
// Fastbreak Defense - Good
// Fastbreak Defense - Bad
// Fight Thru Screen - Good
// Fight Thru Screen - Bad
// Conditioning - Good
// Conditioning - Bad
// Defensive Switch - Good
// Defensive Switch - Bad
// Pressure on Def - Good
// Pressure on Def - Bad
// Pressure on Off - Good
// Pressure on Off - Bad
// Instincts on Def - Good
// Instincts on Def - Bad
// Instincts on Off - Good
// Instincts on Off - Bad
