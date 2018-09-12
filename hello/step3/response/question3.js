"use strict"

service ellapseTime() {
   return <html>
     ellapsed time: 
     ~{
	const dclient = Date.now();
	const dserver = ${Date.now()};
        document.write( dclient - dserver );
     }
   </html>
}
