The Ball
========

We will now add the ball moves and complete the Ping Pong implementation.
A game will be represented by a JavaScript object witht the following
properties:

  * `id`: the game identifier used in the exchanges between servers and clients.
  * `ball`: the screen position of the ball in the game.
  * `pads`: the left and right player pads.
  * `width`, `height`: the canvas width and height.
  * `dx`, `dy`: the current direction of the ball.
  * `started`: a boolean equal to `true` when the game is started
  * `ready`: the current number of ready player. The game can only start when
equal to 2.

*****************************************************************************
#### Question 1 ####

Create a module `game.js` that exports the Game constructor. Modify
`pingping.js` to keep track of created games.


*****************************************************************************
#### Question 2 ####

Add a method `padMove` to games that handles pad move. That method
must keep track of the position of the two pads as this will be needed
for computing the ball trajectory. Modify the `padMove` service to
use that method.
