# Basketball Coach's App

Coachify is a cliche working name. A more descriptive name would be: Simple Basketball Performance Metrics for Coaches.

# Description

Work-in-progress: An app to help basketball coaches best track & view data about individual & team performance. Starting late-May 2020. The idea originally came from my brother, who has coached basketball. He frankly thinks about basketball too much, and I'm feeding an addiction by developing this app. However, it's a really good idea, and a robust application to get practice in thinking about & executing a development plan.

# Development Plans

##

## Main Things to Focus on As I Build

### The Usual
- Responsiveness: Get really good at this!
- Beauty: Make it nice to look at

### Single Page App

Once a user is logged in (logging in capability to come later), they'll be taken to a single page that will use React to do everything they want to do, without going to a new URL, and loading a new page, to have to do that.

Maybe all of it, including login, can be handled from a single page. I'll have to do some learning & find out.

### Powerful Simplicity

I want to keep the app easy to understand at a glance. Though this app's purpose will heavily rely on data, find a way to keep this simple. Make drops downs, forms, navigation, etc. as simple as possible, with the goal of going easy on the user.


## Notes to self about initial build

The package JSON is built from the MERN Start repo that Jonathan shared. I could instead reference my HW 21, which is based on the 1st activity in the MERN unit, which has a different build. It uses if-env npm package to check if the app is running in production (for example, on Heroku) or if the app is running in development. If running in production, it starts a specific way. If running in Dev, it starts with nodemon running in the back end. Unless I decide to change to that, I'll need to *npm run dev* to startup the app locally.

There is also a proxy setup. I didn't catch exactly why Jonathan did that. I'll need to ask later.


## Techs / Tools / Packages to Consider Using

### Debugger!

In talking with past boot camp grads, I've heard a few times that they felt they were well prepared for their first jobs. However, a few have mentioned how crazy it is that we didn't learn to use the debugger. I don't know where to start with this, so I'll have to use some Google Fu and/or ask developer friends in order to get an idea of how to teach myself to use it.

### A Dev Server

I already have a production server. I'll want to setup a dev server for testing deployments before deploying to prod.

### Version Control

Gotta learn this. I'm not sure if I'll be able to learn this working solo, but let's see.

### Redux

Not sure that I'm going to try this out on this app. But maybe I will. I know basically nothing about Redux, so we'll see. I'm working on getting code down now, and if I have to rewrite it later to implement Redux or something else, then that is simply more practice for me.

### Bootstrap

Bootstrap isn't new to me. I have a decent amount of experience with the library. However, I only used React Bootstrap in my final boot camp project, and I was more back end focused on that one. I'll probably try to implement it, but I'll certainly use original Bootstrap.

## Stylesheets

Found [this video](https://www.youtube.com/watch?v=j5P9FHiBVNo) while researching the better ways to use CSS in React. Gotta consider this.

### Modals

A friend says they're using these a bunch in their new job

### Service Worker & PWA mindfulness

I'm going to see if I can build this as a PWA. So I'm not going to delete those files from the app just yet.


## Views

### 1st Views to Create
- Welcome
- Create Account
- Login
- Dashboard
- Create New Team

### Later Views to Come
- Individual Player's Page
- Settings Page: Allow the user to change how things are displayed
- Dashboard V2: Along with being able to change overall settings on the Settings page, we can allow the user to dial into their ideal experience by having more control over the dashboard
- *Individual Graphs & Breakdowns*: I'll have to figure out what other options we'll want to have. The dashboard will be the start, but soon after that, we'll want the user to be able to view simple views of very specific information.

### Much Later Views
- Player facing account, dashboard, and associated views
- Blogging / Updates Info
- Aggregate Data view for seeing what we're learning from a variety of teams, with data anonymized, of course
- Practice allowing ads or other sponsored content
- Implementing payment & billing views for practice of what it'd be like to sell this software on a subscription basis

### Optional Views to Consider Post-MVP
- Practice Design & Scheduling features: Directly plan practices around what has been learned from the data
- Video Playback of Previous Games, with giving the coach the ability to tag spots with custom labels & notes


## Models

I've given this a lot of thought since initializing this project a couple of weeks ago, and I think that I'm going to have to go with a SQL DB. I started as a Mongo DB because that's what I was most recently working with. However, if I'm envisioning this correctly, there is going to have to be at least many to many relationship, maybe more. A player's stats can be recorded as individual games. I believe those games are going to have to be models. A player has many games, and a game has many players.

Additionally, I believe I'll need a team model. I think the player & team models will have to be separate because once in use, players will come and go from teams year over year. And if a player is tracking his own stats, he'll want to keep those once he'se left the team. So a team has many players, and a player, over time, will likely have more than 1 team.

Also, a team will have many games, and each game will have 2 teams playing. If I go so far as to organize games into seasons, that won't need a many to many relationship with games. (eg: a season has many games, but each game will only belong to one season.) However, a season will include many teams, and teams will have many seasons. Same with players to seasons.

That said, I'll have to find the right way to chain these together to make sure that I reduce the complication, without losing relationships. For example, I wonder if I'll be able to say player Jones belonged to team Hawks, and they played 22 games in the 2020 season. Maybe the relationships between player Jones and the 2020 season be inferred & assumed because he belonged to the Hawks that entire season. I'll have edge cases of players switching teams, but I'll cross that bridge later.

I'll bounce these ideas off of someone else, and see if I'm thinking of this correctly.


## Controllers (or maybe View Model from MVVM)

I was recently exposed to MVVM briefly. I'll do some research there.


## Code that will likely need to be removed

Yarn: It came in the boilerplate. I don't use Yarn I may want to remove it later on, unless I find a use for it.

# Business Questions to Ask Myself

## How could I create the most value off season?

I'd have to sell the app subscriptions per year, anticipating high use & feature demand in-season. However, coaches are thinking about their sport all year round. What can I do to highlight useful information, build practice & game plans, and do self-development off-season?

