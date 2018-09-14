const bt = require( "../../question1/response/btutils.js" );

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
		      title=${stream.head.image.title}/> : "" }
	   </div>
	 </div>
       </div>
     </bt.body>
   </html>
}
