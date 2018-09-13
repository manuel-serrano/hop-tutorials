"use strict"

function rssCon( url ) {
   const feed = require( url, "../../../feed" );
   console.log( "**", feed.head.title[ 0 ], "**" );
   
   feed.items.forEach( i => console.log( " ", i.title[ 0 ] ) );
}

rssCon( "http://rss.slashdot.org/Slashdot/slashdotMain" );
rssCon( "https://www.techradar.com/rss/news/computing" );
