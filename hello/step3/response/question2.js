"use strict";

const date = new Date();

service appDate() {
   return <html>
     server app date: ${date};
   </html>
}

service reqDate() {
   return <html>
     server request date: ${new Date()}
   </html>
}

service clientDate() {
   return <html>
     client date: ~{document.write( new Date() )}
   </html>
}

service clientDateAlt() {
   const box = <span/>;
   
   return <html>
     ~{ window.onload = e => document.getElementById( "container" ).innerHTML = new Date().toString() }
     
     client date: <span id="container"/>
   </html>
}

service clientDateAltHop() {
   const box = <span/>;
   
   return <html>
     ~{ window.onload = e => ${box}.innerHTML = new Date().toString() }
     
     client date: ${box}
   </html>
}
