"use strict";

let Can;

function drawNet() {
   Can.ctx.fillStyle = '#777';
   Can.ctx.fillRect( Can.hwidth - 2, 2, 4, Can.height - 4 );
}
   
function repaint() {
   Can.ctx.clearRect( 0, 0, Can.width, Can.height );

   drawNet();
   
   window.requestAnimationFrame( repaint );
}

exports.init = function( canvas, id, meid, otherid ) {
   Can = canvas;

   Can.ctx = Can.getContext( "2d" );
   Can.hwidth = Can.width / 2;
   
   repaint();
}
