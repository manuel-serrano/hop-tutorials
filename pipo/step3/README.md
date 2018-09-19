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

*****************************************************************************
#### Question 3 ####

We will now complete the client side implementation. 

 1. Modify the client initialization to add a `click` listener for the
 second player joining the game. The the user click, the game should start.
 For that the service `startGame` should be called. This is the server that
 we spawn the ball.
 2. The game cannot start before two players are connected. In the client
 side initialization function, add a call to the service `clientReady`
 that keeps track of connected player. When the game is ready to start
 the ball should be visible at the middle of the screen.
 
*****************************************************************************
#### Question 4 ####

To complete the game implementation we still have to animate the ball
and to handle bouncing against the walls and the pads.

To animate the ball we will use a JavaScript interval 
(see [mdn](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)) that calls a function regularly. Each time the function
is called, the new position of the ball will be computed and broadcast
to the two players. When the game is over because the ball has passed one
of the two pads, the interval should be cleared.

In our solution, when the ball hits a wall, it keeps its speed but the
vertical direction is reversed. When the ball hits a pad, its horizontal
direction is changed and its vertical direction is computed according to
the location of the hit on the pad.

Implement the `startGame` method.


*****************************************************************************
Return to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/pipo/step2/).



 

