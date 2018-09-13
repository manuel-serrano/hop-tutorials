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

*****************************************************************************
Return to [step1](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step1/).
Continue to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step3/).

