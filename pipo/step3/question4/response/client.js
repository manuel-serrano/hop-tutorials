"use strict";

service padMove();
service startGame();
service clientReady();

let Pme = { x: 0, y: 0, width: 10, height: 80 };
let Pother = { x: 0, y: 0, width: 10, height: 80 };
let Ball = { x: -10, y: -10, radius: 0 };

let Can;

function drawNet() {
   Can.ctx.fillStyle = '#777';
   Can.ctx.fillRect( Can.hwidth - 2, 2, 4, Can.height - 4 );
}
   
function drawPad( P ) {
   Can.ctx.fillStyle = '#FFF';
   Can.ctx.fillRect( P.x, P.y, P.width, P.height ); 
}

function drawBall( B ) {
   Can.ctx.beginPath();
   Can.ctx.fillStyle = '#FFC106';
   Can.ctx.arc( B.x, B.y, B.radius, 0, Math.PI *2,  false );
   Can.ctx.fill();
}
      
function repaint() {
   Can.ctx.clearRect( 0, 0, Can.width, Can.height );

   drawNet();
   drawPad( Pme );
   drawPad( Pother );
   drawBall( Ball );
   
   window.requestAnimationFrame( repaint );
}

function updatePadPosition( e ) {
   Pme.y = e.clientY - Can.offsetTop - Pme.height / 2;
   
   if( Pme.y + Pme.height > Can.height ) {
      Pme.y = Can.height - Pme.height;
   } else if( Pme.y < 0 ) {
      Pme.y = 0;
   }
}

exports.init = function( canvas, id, meid, otherid ) {
   Can = canvas;

   Can.ctx = Can.getContext( "2d" );
   Can.hwidth = Can.width / 2;
   
   if( meid > otherid ) {
      Pme.x = Can.width - Pme.width - 5;
      Pother.x = 5;
      
      Can.addEventListener( "click", e => {
	 startGame( id ).post();
      } );
   } else {
      Pme.x = 5;
      Pother.x = Can.width - Pother.width - 5;
   }
   
   server.addEventListener( otherid, e => {
      Pother = e.value;
   } );
   
   server.addEventListener( id, e => {
      Ball = e.value;
   } );
   
   Can.addEventListener( "mousemove", e => {
      updatePadPosition( e );
      padMove( id, meid, Pme ).post( e => undefined );
   } );
   
   repaint();
   
   server.addEventListener( "ready", e => {
      clientReady( id, meid, Pme ).post( e => undefined );
   } );
}
