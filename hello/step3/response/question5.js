"use strict";

service dates() {
   return <html>
     <button onclick=~{ alert( new Date() + "/" + ${new Date()} )}>date</button>
   </html>
}
