module.exports = function (sequelize, DataTypes) {
    const StatIDCodes = sequelize.define("StatIDCodes", {});
    return StatIDCodes;
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