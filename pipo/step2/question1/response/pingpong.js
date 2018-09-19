"use strict";

const Game = require( "./game.js" );

let gameCnt = -1;
let games = [];

service pingpong( o ) {
   let width = o && ~~o.width || 600;
   let height = o && ~~o.height || 400;
   let speed = o && ~~o.speed || 20;
   let canvas = <canvas width=${width} height=${height}/>;
   let gameid, leftid, rightid;
   
   gameCnt++;
   
   if( gameCnt & 1 ) {
      gameid = gameCnt - 1;
      leftid = gameCnt + 1;
      rightid = gameCnt;
   } else {
      gameid = gameCnt;
      leftid = gameCnt + 1;
      rightid = gameCnt + 2;
      
      games.push( new Game( gameid, speed, width, height ) );
   }

   return <html>
     <head>
       <link href=${require.resolve( "./pingpong.hss" )} rel='stylesheet' type='text/css'/>
       <script src=${require.resolve( "./client.js" )} lang="hopscript"/>
       <script defer>
	 const client = require( "./client.js" );
	 window.onload = 
            () => client.init( ${canvas}, ${gameid}, ${leftid}, ${rightid} );
       </script>
     </head>
     ${canvas}
   </html>;
}

service padMove( id, padid, P ) {
}
