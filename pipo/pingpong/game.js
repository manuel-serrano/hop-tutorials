"use strict";

function Game( id, speed, width, height ) {
   this.id = id;
   this.ball = { x: width / 2, y: height / 2, radius: 7 };
   this.pads = {};
   this.speed = speed;
   this.width = width;
   this.height = height;
   this.dx = -2;
   this.dy = 0;
   this.started = false;
   this.ready = 0;
}

Game.prototype.clientReady = function clientReady( pid, pad ) {
   this.pads[ ( pid === this.id + 1 ) ? "left" : "right" ] = pad;
   if( ++this.ready === 2 ) {
      hop.broadcast( this.id, this.ball );
   }
}

Game.prototype.padMove = function padMove( pid, pad ) {
   hop.broadcast( pid, pad );
   if( pid & 1 ) {
      this.pads.left = pad;
   } else {
      this.pads.right = pad;
   }
}

Game.prototype.startGame = function startGame() {
   if( this.started ) return;
   
   const pads = this.pads;
   const ball = this.ball;
   const width = this.width;
   const height = this.height;
   
   this.started = true;
   const intv = setInterval( e => {
      // move the ball
      ball.x += this.dx;
      ball.y += this.dy;
      
      // direction adjustement
      if( ball.x < pads.left.x + pads.left.width ) {
	 if( ball.x <= 0 ) {
	    console.log( "game " + o.id + " over" );
	    clearInterval( intv );
	 } else {
	    if( pads.left.y <= ball.y && pads.left.y + pads.left.height >= ball.y ) {
	       updateBallTrajectory.call( this, pads.left );
	    }
	 }
      } else if( ball.x > pads.right.x ) {
	 if( ball.x >= width ) {
	    console.log( "game " + o.id + " over" );
	    clearInterval( intv );
	 } else {
	    if( pads.right.y <= ball.y && pads.right.y + pads.right.height >= ball.y ) {
	       updateBallTrajectory.call( this, pads.right );
	    }
	 }
      }

      if( ball.y <= 0 ) {
	 this.dy = -this.dy;
      } else if( ball.y >= height ) {
	 this.dy = -this.dy;
      }

      // broadcast the new ball position
      hop.broadcast( this.id, ball );
   }, this.speed );
}

function updateBallTrajectory( pad ) {
   const d = (this.ball.y - pad.y - pad.height / 2) >> 3;
   
   this.dy += d;
   if( this.dy < -10 ) this.dy = -10; else if( this.dy > 10 ) this.dy = 10;
   this.dx = -this.dx;
}
   
module.exports = Game;
