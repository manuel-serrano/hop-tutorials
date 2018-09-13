"use strict"

service rssCon( url = "http://feeds.guardian.co.uk/theguardian/rss" ) {
   const feed = require( url, "../../../feed" );

   return <html>
     <h1> ${feed.head.title} </h1>

     ${feed.items.map( e =>
	<div>
	  <h2> ${e.title} </h2>
	  <div> ${e.date} </div>
	  ${ feedImage( e ) }
	  <div> ${e.summary }</div>
	</div>
     ) }
   </html>
}

function feedImage( e ) {
   if( e.content && e.content.medium === "image" ) {
      return <img src=${e.content.url}/>
   } else if( e.links.enclosure ) {
      return <img src=${e.links.enclosure.href}/>
   } else if( e.content && e.content.width && e.content.url ) {
      return <img src=${hop.decodeHTML( e.content.url )}/>;
   }
}
