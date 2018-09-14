"use strict"

const mymemoryURL = "http://mymemory.translated.net/api/get";
const mymemorySVC = hop.webService( mymemoryURL );

function translate( o ) {
   return mymemorySVC( o )
      .post()
      .then( function( r ) {
	 if( r.responseStatus === 200 ) {
            return r.responseData.translatedText;
	 }
      } );
}

if( process.argv.length < 2 ) {
   console.error( 'usage: trans.js "text"' );
} else {
   translate( { q: process.argv[ 2 ], langpair: "fr|en" } )
      .then( console.log );
}
   
   

