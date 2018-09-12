"use strict";

let cansrc = false;

var defaultColors = [
   {red: 252, green: 27, blue: 0},
   {red: 125, green: 167, blue: 129},
   {red: 255, green: 122, blue: 10}
];

function colorize( frame, colorset ) {
   var data = frame.data;
   var l = data.length / 4;

   for( var i = 0; i < l; i++ ) {
      var r = data[ i*4 ];
      var g = data[ i*4 + 1 ];
      var b = data[ i*4 + 2 ];
      var range = Math.floor( (0.65*r + 0.22*g + 0.13*b) / 86 );

      var cs = colorset[ range ];
      
      data[ i*4 ] = 0.7*cs.red + 0.3*r;
      data[ i*4 + 1 ] = 0.7*cs.green + 0.3*g;
      data[ i*4 + 2 ] = 0.7*cs.blue + 0.3*b;
   }

   return frame;
}

exports.draw = function( url, candst, colors = defaultColors ) {
   if( !cansrc ) {
      cansrc = <canvas style="display:none"/>;
      hop_config.body.appendChild( cansrc );
   }
      
   const ctxdst = candst.getContext( "2d" );
   const ctxsrc = cansrc.getContext( "2d" );
   let img = new Image();

   img.src = url;

   img.onload = function( e ) {
      cansrc.width = img.width;
      cansrc.height = img.height;
      candst.width = img.width;
      candst.height = img.height;

      ctxsrc.drawImage( img, 0, 0 );
      var f = ctxsrc.getImageData( 0, 0, img.width, img.height );
      ctxdst.putImageData( colorize( f, colors ), 0, 0 );
   }
}
