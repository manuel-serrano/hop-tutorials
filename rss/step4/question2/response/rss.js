const bt = require( "../../../step2/question1/response/btutils.js" );
const config = require( "../../question1/response/config.js" );

service rss( url = config.feeds[ 0 ].href ) {
   const stream = require( url, hop.feed );
   const title = stream.head.title;

   return <html>
     <bt.head>
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
          ${ stream.items.map( feed ) }
       </div>
     </bt.body>
   </html>
}

function feed( e ) {
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
   return <div class="btn-group btn-group-sm">
     <div class="btn-group btn-group-sm" role="group">
       <button id="btnGroupDrop1" type="button"
	       class="btn btn-secondary dropdown-toggle"
	       data-toggle="dropdown" aria-haspopup="true"
	       aria-expanded="false">
           translate
       </button>
       <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
	 ${ config.languages.map(
	    l => 
	    <span class="dropdown-item"> ${l}
	    </span> ) }
       </div>
     </div>
   </div>
}
   
   

