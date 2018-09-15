"use strict";

exports.HEAD = function( attrs, ...nodes ) {
   return <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">,
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>,
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>,
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>,
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      ${ nodes }
   </head>;
}

exports.BODY = function( attrs, ...nodes ) {
   return <body>
     <div class="container">
       ${nodes}
     </div>
   </body>
}

exports.DROPDOWN = function( attrs, ... nodes ) {
   const arr = nodes.filter( n => n instanceof Array );
   const spans = Array.prototype.concat.apply( [], arr );
   const buttons = nodes.filter( n => typeof n === "xml-element" );
	 
   return <div class="btn-group btn-group-sm">
     ${ buttons }
     <div class="btn-group btn-group-sm" role="group">
       <button id="btnGroupDrop1" type="button"
	       class="btn btn-secondary dropdown-toggle"
	       data-toggle="dropdown" aria-haspopup="true"
	       aria-expanded="false">
           ${attrs.title}
       </button>
       <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
	 ${ spans.map( l => (l.className += " dropdown-item", l) ) }
       </div>
     </div>
   </div>
}
   
   

