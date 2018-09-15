"use strict"

const translate = require( "./translate.js" );

if( process.argv.length < 2 ) {
   console.error( 'usage: trans.js "text"' );
} else {
   translate( { q: process.argv[ 2 ], langpair: "fr|en" } )
      .then( console.log );
}
