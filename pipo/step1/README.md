Game Initialization
===================

In this tutorial will be implement a simplified version of the Ping Pong
game. The server will wait for two clients to be connected. The last
connected client will have to start the game by clicking on the page.
The game is over as soon as one of the player misses the ball. The ball
bounce against the wall and against the pads. The bouncing angle on pad
depends on the distrance from the center of the pad.

In this first part we will implement the main Ping Pong services and
implement the client graphical parts.

The whole application will be decomposed in three files. 

  1. `pingpong.js`: The main server side part that will define the server 
  services:
    a. `pinpong`: the game entry point.
    b. `clientReady`: the service the clients when they are full initialized.
	c. `startGame`: the service the second player calls to start the game.
	d. `padMove`: the service the clients will call when the pad is used by
      the user.
  2. 'client.js`: the client-side implementation that is mostly composed
    of an HTML canvas used for displaying the playground, the pads, and the balls.
  3. `game.js`: the server side handling of a game.



**************************************************************************
Continue to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/pipo/step2/).
