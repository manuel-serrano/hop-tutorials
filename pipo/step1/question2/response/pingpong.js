"use strict";

service pingpong( o ) {
   let width = o && ~~o.width || 600;
   let height = o && ~~o.height || 400;
   let speed = o && ~~o.speed || 20;
   let canvas = <canvas width=${width} height=${height}/>;
   
   return <html>
     <head>
       <link href=${require.resolve( "./pingpong.hss" )} rel='stylesheet' type='text/css'/>
       <script src=${require.resolve( "./client.js" )} lang="hopscript"/>
       <script defer>
	 const client = require( "./client.js" );
	 window.onload = 
           () => client.init( ${canvas} );
       </script>
     </head>
     ${canvas}
   </html>;
}
