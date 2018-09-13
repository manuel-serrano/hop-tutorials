"use strict"

function rssCon( url ) {
   const feed = require( url, "../../../feed" );
   console.log( "**", feed.head.title[ 0 ], "**" );
   
   feed.items.forEach( i => console.log( " ", i.title[ 0 ] ) );
}

rssCon( "https://www.lemonde.fr/rss/une.xml" );
console.log();
rssCon( "http://feeds.nytimes.com/nyt/rss/HomePage" );
