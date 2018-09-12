"use strict";

service image() {
   const can = <canvas/>;
   return <html>
     <head>
       <script src="../drawimage.js" lang="hopscript"/>
       <script defer>
         const drawimage = require( "../drawimage.js" );
	 window.onload = e =>
            drawimage.draw( ${require.resolve( "../marilyn.jpeg" )}, ${can} );
       </script>
     </head>
     <body>
       <img src=${require.resolve( "../marilyn.jpeg" )}/>
       ${can}
     </body>
   </html>
}
		  
		   
