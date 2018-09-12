Hop Modules
===========

Hop Module are similar to Nodejs. In short, a module can export
bindings and can import other modules. A module is stored in a single
file. Module resolution names is based on the on the file
system. Check the Nodejs
[documentation](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html)
to understand how to export bindings and how to import other modules.


-----------------------------------------------------------------------------
### Question 1 ###

Implement the modules `bar` and `gee` such that executing the module `foo`
defined as:

```javascript
"use strict";

const bar = require( "./bar.js" );
const gee = require( "./gee.js" );

console.log( "x=", bar.x, gee( bar.f( bar.x ) ) );
```


displays `x=10, gee=15`.
-----------------------------------------------------------------------------


Hop Services
============

Hop [services](http://localhost:8080/usr/local/share/doc/hop/3.2.0-pre1/index.html)
are JavaScript function associated it URLs. They look all similar to
functions but they are declared with the `service` keyword instead of
`function`.

-----------------------------------------------------------------------------
### Experiment 1 ###

Create a Hop module that defines a service returning a string. Display
the result of calling that service the display the result of the service
call converted into a string using the `.toString()` method (use
`console.log( .... )` to display the result).
-----------------------------------------------------------------------------


-----------------------------------------------------------------------------
### Experiment 2 ###

Modify your service so that in now accepts one argument, displays
that argument, and returns the concatenation of the previous string and
the parameter. Call it again to display the result conversion into a
string.

This second experiment establishes that calling a service does not
evaluate its body. Instead it merely returns an `hop.HopFrame`
object. When converted into a string, a `HopFrame` produces the URL
that is to be used to invoked that service, that is to evaluate its
body. Cut and past the result of your last service call (preceded with
`http://localhost:8080` as service constructed URLs are relative).
-----------------------------------------------------------------------------


HTML
====

HTML are regular Hop values. They can be declared using the genuine
HTML syntax that can be inserted inline inside JavaScript. By default
HTML body are strings, with two escapes:

  - an HTML syntax within an HTML context is evaluated as an HTML expression
  - the `${expr}` evaluates its expression, whether it is used in the
 position of an HTML body or an HTML attribute value.


-----------------------------------------------------------------------------
### Question 2 ###

Define a Hop function `makeBox` that takes one argument and that
returns an HTML `div` containing one `span` whose content is the value
of the argument of the function. Define that function into a module
called `box.js`.

Modify the definition of `makeBox` so that the return `div` belongs to the
HTML class `box`.

Modify the definition of `makeBox` so that it accepts an optional parameter
that, when passed, is concatenate to the `box` class.


Actually, the HTML syntax is a mere extension to JavaScript that represents
function calls in XML. An XML expression

```xml
<tag attr1=val1 attr2> node1 node2 ... </tag>
```

is equivalent to

```hopscript
TAG( { attr1: val1, attr2: "" }, node1, node2, ... )
```

Modify the definition of makeBox so it can be used as any other HTML
tag, export it and use it inside an HTML fragment from another module.
-----------------------------------------------------------------------------

Return to [step1](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step1/).
Continue to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step3/).
