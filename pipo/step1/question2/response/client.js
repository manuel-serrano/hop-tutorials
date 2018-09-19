"use strict";

let Can;

exports.init = function( canvas ) {
   Can = canvas;

   Can.ctx = Can.getContext( "2d" );

   Can.ctx.clearRect( 0, 0, Can.width, Can.height );
}
