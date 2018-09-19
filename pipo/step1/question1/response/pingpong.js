"use strict";

service pingpong( o ) {
   let width = o && ~~o.width || 600;
   let height = o && ~~o.height || 400;
   let canvas = <canvas width=${width} height=${height}/>;
   
   return <html>
     ${canvas}
   </html>;
}
