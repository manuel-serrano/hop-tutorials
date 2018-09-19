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
}

module.exports = Game;
