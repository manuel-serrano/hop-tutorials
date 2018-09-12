"use strict"

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
