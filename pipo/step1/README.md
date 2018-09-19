Game Initialization
===================

We will implement a simplified version of the Ping Pong game. The
server will wait for two clients to get connected. The last connected
client will have to start the game by clicking on the page.  The game
is over when the one of the player misses the ball. The ball bounce
against the wall and against the pads. The bouncing angle on pad
depends on the distrance of the ball from the center of the pad.

In this first tutorial step we will implement the main Ping Pong
services and implement the client graphical parts.

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


The Main Service
----------------

Each client side web page will be composed of a simple HTML canvas into
which the playground, the net, the ball, and the balls will be drawn.

*****************************************************************************
#### Question 1 ####

Implement a service named `pingpong` that when called creates a web page
with an HTML canvas. The size of the canvas can either be defined by
two constants or can be passed as a parameter of the service.
*****************************************************************************

#### Question 2 ####

Update your service definition to include in the web page a client-side
module named `client.js`. In this module, you will implement an `init`
that will be in charge of drawing the first graphical into the canvas
it will receive as parameter.

*****************************************************************************

#### Question 3 ####

The recommended technique for displaying graphical animations in a
canvas is to implement a `repaint` and to register in the graphical
browser loop so that it is called each time the screen is
refreshed. To register the callback, use the browser function
`window.requestAnimationFrame`.  Before returning, the callback must
call `window.requestAnimationFrame` to register itself to the next
repaint. See [mdn animation]
[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations]
for more details.

The simplest way to display a animation consists in first clearing the
canvas using the `clearRect` method and then draw each element one by one.
Check the [mdn canvas] 
[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API] for a complete
presentation of the canvas API. 

Implement the `repaint` function and draw a net, a simple thick line,
in the playground.

*****************************************************************************

#### Question 4 ####

Let's implement the other functions we will need to display the other
graphical elements.

Update the `client.js` to add two methods:

 1. `drawBall`, that displays a ball in the canvas. The argument of the
function will be a JavaScript object with three fields:
    - `x` and `y`: the coordinates of the center of the ball.
    - `radius`: the radius of the ball.
 2. `drawPad`, that displays a pad. It receives as argument a JavaScript object
with four fields:
    - `x` and `y`: the top left corner of the pad.
    - `width` and `height`: the pad width and height.

*****************************************************************************

#### Question 5 ####

Let's animate the player pad. 

From now on, the player pad will be stored in the `Pme` client side variable.
It will be updated when the mouse moves and it will be passed to the `drawPad`
function.

To get the mouse position, a listener must be associated to the `mousemove`
event. When triggered, that listener will be invoked with an event descriptor
whose properties `clientX` and `clientY` will be the mouse absolute position
in the page. To get the mouse position relative to the canvas, the 
absolute positions, denoted by the two canvas properties `offsetTop` and
`offsetLeft`, should be subtracted. Note that for the game, we only care for 
the mouse vertical position.

 1. Implement the `updatePadPosition` and modify the `repaint` function to
redisplay the user pad.
 2. Define a global variable for the ball and modify `repaint`
to draw it on the canvas.
  
**************************************************************************
Continue to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/pipo/step2/).
