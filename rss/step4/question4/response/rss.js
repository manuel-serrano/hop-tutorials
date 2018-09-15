const bt = require( "./btutils.js" );
const config = require( "../../question2/response/config.js" );
const translate = require( "./translate.js" );

service rss( url = config.feeds[ 0 ].href ) {
   const stream = require( url, hop.feed );
   const title = stream.head.title;
   const lang = stream.head.language 
	 ? stream.head.language.replace( /[-][a-z]+/, "" )
	 : "en";
   
   return <html>
     <bt.head>
       <link rel="stylesheet" href=${require.resolve( "../../../step3/question3/response/rss.hss" )}/>
       <title> ${ title } </title>
     </bt.head>
   
     <bt.body>
       <div class="nav-scroller py-1 mb-2">
         <nav class="nav d-flex justify-content-between">
	     ${ config.feeds.map( f => {
		return <a class="p-2 text-muted" href=${rss( f.href )}>
		   ${f.name}
		</a>
	     } ) }
	 </nav>
       </div>
       
       <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
	 <div class="row mb-2">
           <div class="col-md-8 px-0">
             <h1 class="display-4 font-italic"> ${ title } </h1>
             <p class="lead my-3"> ${ stream.head.date } </p>
             <p class="lead mb-0"> ${ stream.head.rights } </p>
           </div>
           <div class="col-md-4 px-0 image-head">
	      ${ stream.head.image ?
		 <img src=${stream.head.image.url}
		      title=${stream.head.image.title} /> : "" }
	   </div>
         </div>
       </div>
     
       <div class="row mb-2">
          ${ stream.items.map( e => feed( e, lang ) ) }
       </div>
     </bt.body>
   </html>
}

function feed( e, lang ) {
   const summary = e.summary || "";
   const summaryel = <div class="card-text mb-auto"> ${ summary } </div> ;
   
   return <div class="col-md-4 card-deck">
     <div class="card mb-4 shadow-sm h-md-250">
       <div class="card-header text-center">
	 <h4> ${e.title} </h4>
       </div>
       <div class="card-body d-flex flex-column align-items-start">
	 <div class="card-img-right flex-auto d-none d-lg-block">
	    ${ feedImage( e ) }
	 </div>
	 ${ e.categories && e.categories[ 0 ] &&
	    <strong class="d-inline-block mb-2 text-primary">
                ${ e.categories[ 0 ][ 0 ] }
	    </strong> }
	    <div class="mb-1 text-muted"> ${ e.date }</div>
	    ${ summaryel }
	    <a href=${e.links.alternate.href}>Continue reading</a>
	    <transbutton el=${summaryel} lang=${lang} q=${summary.toString()}/>
       </div>
     </div>
   </div>
}

function feedImage( e ) {
   if( e.content && e.content.medium === "image" ) {
      return <img src=${e.content.url}/>
   } else if( e.links.enclosure ) {
      return <img src=${e.links.enclosure.href}/>
   } else if( e.content && e.content.width && e.content.url ) {
      return <img src=${e.content.url}/>;
   }
}

function TRANSBUTTON( attrs, ... nodes ) {
   return <bt.dropdown title="translate">
     <button type="button"
	     class="btn btn-secondary"
	     onclick=~{ ${attrs.el}.innerHTML = ${attrs.q} }>
       ${attrs.lang}
     </button>
      ${ config.languages
	 .map( l => <span onclick=~{ ${translate}( { q: ${attrs.q},	       
						     langpair: ${`${attrs.lang}|${l}`}} )
				     .post()
				     .then( t => ${attrs.el}.innerHTML = t ) }>
	               ${l}
		    </span> ) }
   </bt.dropdown>
}
   
   

