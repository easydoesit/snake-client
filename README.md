# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer.git). 



## Getting Started

### To Get a Snake server going.

cd /vagrant
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer
npm install
npm run play

### To Play

clone this repo
in the same directory node play.js

#### If you want to change your name:
1. Edit constants.js
2. on line 5 where it says 'const PLAYER = "Name: MCG";' replace 'MCG' with whatever you want. Note that there is a character limit so keep it short. Recommend 3 letters.

#### If you want to change the key inputs:
1. Edit constants.js
2. In the Object CONTROLS change any of the keys (letters) to what you want. Do not change the values or your snake won't respond.
3. If you want to add more things to say create a key: value pair for example ' z: "Say: Move" where "Move" is what you'd like to say and "z" is the key you'd press.