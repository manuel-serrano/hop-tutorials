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
   // insert the date by simply "writing" into the produced document
   // when the page is fully loaded
   return <html>
     client date: ~{document.write( new Date() )}
   </html>
}

service clientDateAlt() {
   // insert the date by modified an initially empty HTML container
   const box = <span/>;

   return <html>
     ~{ window.onload = e => document.getElementById( "container" ).innerHTML = new Date().toString() }
     
     client date: <span id="container"/>
   </html>
}
