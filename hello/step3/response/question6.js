"use strict";

service timeTravel() {
   const box = <div/>;
   
   return <html>
     <button onclick=~{
	const start = Date.now();
	// services can be anonymous
        ${service() { return Date.now() }}()
	   .post( t => {
	      const end = Date.now();
	      ${box}.innerHTML = `client->server: ${t-start}ms, server->client: ${end-t}ms`
	   } ) }>
	refresh
     </button>
     ${box}
   </html>
}
