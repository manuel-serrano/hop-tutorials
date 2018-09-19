Pads Move
=========

In the first step we have handled the pad moves of the local player.
We will now implement the pad moves of the other player. For that, we
will use two new ingredients that were not used in the first
step. First, when the player pad moves, in addition to update the
graphical display we will notify the server that in turn, will notify
the other player. Second, we will wait for server notifications to be
informed that the other pad has moved.

Informaing the server of local pad move will be implemented using
regular services. Server notifications will be implemented using
server [broadcast] [http://hop-dev.inria.fr/home/00-hop.html#broadcast].

*****************************************************************************
#### Question 1 ####

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
  
*****************************************************************************
#### Question 2 ####

The `pingpong` service will now handle games. Several games
might be running simultaneously.

 1. Modify the `pingpong` implementation so that it keeps track of all
the running games. In the solution we propose, we use a global counter
`gameCnt` to count the number of running games and a global array
`games` to store all games.
 2. Modify the `client.js` and `pingpong.js` modules to implement a
service called `padMov` that is invoked each time a pad is moved.

*****************************************************************************
#### Question 3 ####

 1. Implement the server `padMove` that should notify the client that
the other pad moved.
 2. Implement the client part that waits for server pad notification
and update the `repaint` function to update the other pad.


*****************************************************************************
Return to [step1](https://github.com/manuel-serrano/hop-tutorials/tree/master/pipo/step1/).
Continue to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/pipo/step3/).

