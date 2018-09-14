Bootstrap
=========

[Bootstrap](https://getbootstrap.com/) is a popular web framework that
helps implementing responsive site. It is easy to use as only.
A few extra CSS and JavaScript files have to be included in the document
and HTML elements have to belong to Bootstrap classes.

*****************************************************************************
#### Question 1 ####

Define the `btutil.js` Hop module that exports two functions: `HEAD`
and `BODY`.  The former creates a HTML `head` section where the
bootstrap declarations are automatically inserted. The latter create
an HTML `body` whose nodes are included inside a `div` belonging to
the class `container`. Test your module with the following
[program](:

```javascript
const bt = require( "./response/btutils.js" );

service testbt( o ) {
   // browse with http://localhost:8080/hop/testbt?title=foo
   return <html>
     <bt.head>
       <title> ${ o.title } </title>
     </bt.head>
   
     <bt.body>
        <div class="nav-scroller py-1 mb-2">
         <nav class="nav d-flex justify-content-between">
	   <a class="p-2 text-muted" href="link1"/>
	   <a class="p-2 text-muted" href="link2"/>
	   <a class="p-2 text-muted" href="link3"/>
	 </nav>
       </div>
       
       <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
         <h1 class="display-4 font-italic"> My Document </h1>
       </div>
     </bt.body>
   </html>
}
```
*****************************************************************************

HSS
---

It is now time to add a little bit of graphical configuration. Hop HTML
documents can of course use CSS files but they can also use, so-called,
HSS files that are CSS files into which `${...}` expressions can be
evaluated. 

*****************************************************************************
#### Experiment 1 ####
Modify `testbt.hs` to use the following `hss` file.

```javascript
${
  var hop = require( "hop" );
   var hss = require( hop.hss );

   function nthColor( length, from, to, i ) {
      var cfrom = hss.parseWebColor( from );
      var cto = hss.parseWebColor( to );

      var rs = (cto.red - cfrom.red) / (length - 1);
      var gs = (cto.green - cfrom.green) / (length - 1);
      var bs = (cto.blue - cfrom.blue) / (length - 1);

      return hss.makeWebColor(
	 Math.round( cfrom.red + (i * rs) ),
	 Math.round( cfrom.green + (i * gs) ),
	 Math.round( cfrom.blue + (i * bs) ) );
   }
}

[href="link1"] { background-color: ${ nthColor( 4, "#ffd100", "#FF0000", 0 ) }; }
[href="link2"] { background-color: ${ nthColor( 4, "#ffd100", "#FF0000", 1 ) }; }
[href="link3"] { background-color: ${ nthColor( 4, "#ffd100", "#FF0000", 1 ) }; }
[href="link4"] { background-color: ${ nthColor( 4, "#ffd100", "#FF0000", 1 ) }; }
```

*****************************************************************************

RSS
---

We are now ready to use all our components for displaying the RSS feed
content. First, let us the Feed main title, date, copyright
information, and image, when the source provides one.

*****************************************************************************
#### Question 2 ####

Copy our previous `testbt.js` file into `rss.js` and in the `jumbotron`
dir element, add all the RSS pieces of information that you will find
in the `head` property of the feed and that you may find interesting.

In the solution we propose, we use the bootstrap grid rendering. It
decomposes rows in 12 columns and it makes it easy to create elements
that span over several columns.


*****************************************************************************
Return to [step1](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step1/).
Continue to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step3/).

