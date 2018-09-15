"use strict"

const mymemoryURL = "http://mymemory.translated.net/api/get";
const mymemorySVC = hop.webService( mymemoryURL );

service translate( o ) {
   return mymemorySVC( o )
      .post()
      .then( function( r ) {
	 if( r.responseStatus === 200 ) {
            return r.responseData.translatedText;
	 }
      } );
}

module.exports = translate;
