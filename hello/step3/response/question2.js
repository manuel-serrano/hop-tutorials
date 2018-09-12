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
     // insert the date by simply "writing" into the produced document
     // when the page is fully loaded
     ~{ window.onload = e => document.getElementById( "container" ).innerHTML = new Date().toString() }
     
     client date: <span id="container"/>
   </html>
}

service clientDateAltHop() {
   const box = <span/>;
   
   return <html>
     // insert the date into the "box" container that has been first
     // created on the server and that is used at two different locations
     // in the client side program: in the HTML specification and in the
     // tilde script.
     ~{ window.onload = e => ${box}.innerHTML = new Date().toString() }
     
     client date: ${box}
   </html>
}
