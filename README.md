# Basketball Coach's App
Descriptive Name: Simple Basketball Performance Metrics
Coachify

## Notes to self about initial build:
The package JSON is built from the MERN Start repo that Jonathan shared. I could instead reference my HW 21, which is based on the 1st activity in the MERN unit, which has a different build. It uses if-env npm package to check if the app is running in production (for example, on Heroku) or if the app is running in development. If running in production, it starts a specific way. If running in Dev, it starts with nodemon running in the back end. Unless I decide to change to that, I'll need to *npm run dev* to startup the app locally.

There is also a proxy setup. I didn't catch exactly why Jonathan did that. I'll need to ask later.

## Service Worker & PWA mindfulness

I'm going to see if I can build this as a PWA. So I'm not going to delete those files from the app just yet.

## Models

I've given this a lot of thought since initializing this project a couple of weeks ago, and I think that I'm going to have to go with a SQL DB. I started as a Mongo DB because that's what I was most recently working with. However, if I'm envisioning this correctly, there is going to have to be at least many to many relationship, maybe more. A player's stats can be recorded as individual games. I believe those games are going to have to be models. A player has many games, and a game has many players.

Additionally, I believe I'll need a team model. I think the player & team models will have to be separate because once in use, players will come and go from teams year over year. And if a player is tracking his own stats, he'll want to keep those once he'se left the team. So a team has many players, and a player, over time, will likely have more than 1 team.

Also, a team will have many games, and each game will have 2 teams playing. If I go so far as to organize games into seasons, that won't need a many to many relationship with games. (eg: a season has many games, but each game will only belong to one season.) However, a season will include many teams, and teams will have many seasons. Same with players to seasons.

That said, I'll have to find the right way to chain these together to make sure that I reduce the complication, without losing relationships. For example, I wonder if I'll be able to say player Jones belonged to team Hawks, and they played 22 games in the 2020 season. Maybe the relationships between player Jones and the 2020 season be inferred & assumed because he belonged to the Hawks that entire season. I'll have edge cases of players switching teams, but I'll cross that bridge later.

I'll bounce these ideas off of someone else, and see if I'm thinking of this correctly.



NOTES BELOW ARE FROM THE COPIED MERN START REPO JONATHAN SHARED
# MERN-start

Mongo-Express-React-Node

## Initial GitHub Setup

1. Create a new repository
2. Initialize with readme
3. Include Node for gitignore
4. Clone app locally

## Create Your Server

1. `touch server.js`
2. `npm init -y`
3. `npm install express dotenv`
4. Build out basic server.js with the following elements:

```js
require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
```

## React App Setup

1. Inside the root of your project, run `create-react-app client`
2. Install concurrently as a dev dependency: `npm install -D concurrently`
3. Add the following script to the package.json of your root:

```json
"dev": "concurrently \"nodemon server.js\" \"cd client && npm run start\""
```

4. Navigate to client/package.json
5. Add the following proxy:

```json
"proxy": "http://localhost:3001",
```

## Heroku Deploy

1. Include the following scripts inside your server package.json

```json
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
```
