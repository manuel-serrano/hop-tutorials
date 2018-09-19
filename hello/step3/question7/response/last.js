"use strict";

let count = 0;
const store = {};

service dates() {
   const box = <div/>;
   
   return <html>
     <button onclick=~{
	const start = Date.now();
        ${lastDate}( ${count++} )
	   .post( o => {
	      const end = Date.now();
	      ${box}.innerHTML = `date: ${o.time}, last: ${o.last}`
	   } ) }>
	refresh
     </button>
     ${box}
   </html>
}

service lastDate( key ) {
   const now = Date.now();
   const res = { time: now, last: key in store ? store[ key ] : -1 };
   
   store[ key ] = now;

   return res;
}
   
