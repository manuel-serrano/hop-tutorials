const bt = require( "../../../step2/question1/response/btutils.js" );

service rss( url = "http://feeds.nytimes.com/nyt/rss/HomePage" ) {
   const stream = require( url, hop.feed );
   const title = stream.head.title;

   return <html>
     <bt.head>
       <title> ${ title } </title>
     </bt.head>
   
     <bt.body>
        <div class="nav-scroller py-1 mb-2">
         <nav class="nav d-flex justify-content-between">
	   <a class="p-2 text-muted" href="link1">link1</a>
	   <a class="p-2 text-muted" href="link2">link2</a>
	   <a class="p-2 text-muted" href="link3">link3</a>
	   <a class="p-2 text-muted" href="link4">link4</a>
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


