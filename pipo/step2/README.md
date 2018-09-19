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

The `pingpong` service will now handle games. Several games
might be running simultaneously.

 1. Modify the `pingpong` implementation so that it keeps track of all
the running games. In the solution we propose, we use a global counter
`gameCnt` to count the number of running games and a global array
`games` to store all games.
 2. Modify the `client.js` and `pingpong.js` modules to implement a
service called `padMov` that is invoked each time a pad is moved.

*****************************************************************************
#### Question 2 ####

 1. Implement the server `padMove` that should notify the client that
the other pad moved.
 2. Implement the client part that waits for server pad notification
and update the `repaint` function to update the other pad.
