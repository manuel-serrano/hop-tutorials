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
