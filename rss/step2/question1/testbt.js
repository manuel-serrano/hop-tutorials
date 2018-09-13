const bt = require( "./response/btutils.js" );

service testbt( o ) {
   // browse with http://localhost:8080/hop/testbt?title=foo
   return <html>
     <bt.head>
       <link rel="stylesheet" href=${ require.resolve( "../testbt.hss" )}>
       <title> ${ o.title } </title>
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
         <h1 class="display-4 font-italic"> My Document </h1>
       </div>
     </bt.body>
   </html>
}
