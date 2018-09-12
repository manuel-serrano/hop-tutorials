Multitier Programming
=====================

This final step is an introduction to *multitier* programming. It will show
how to manipulate HTML on the server-side and on the client-side. It will
use services to implement dynamic web applications.


Server values, Client values
----------------------------

*****************************************************************************
#### Question 1 ####

Implement a module with two services:

  1. `appDate` that creates a web page showing the application start date.
  1. `reqDate` that creates a web page showing the request date.
*****************************************************************************

A Hop program specifies the server behavior *and* the client behavior.
The client part is described by the HTML document or HTML fragment that
is shipped to clients. This HTML elements can contains JavaScript expressions
to be evaluated on the client. These are designated as *tilde* expressions.
See the Hop syntax [documentation](http://localhost:8080/usr/local/share/doc/hop/3.2.0-pre1/00-syntax.html). They are regular JavaScript expressions
that use syntactic marks to be distinguished from regular expressions.
They start with `~{` and with the closing curly bracket `}`.

*****************************************************************************
#### Question 2 ####

Add a third service to the previous module that implement the `clientDate`
that delivers a web page showing the client date.
*****************************************************************************

The question is more difficult that it may first look like for two
reasons:
  1. A tilde expression is evaluated on the client side at some point when the
 browser construct the document but it not specified precisely when
 this evaluation should happen.
  2. A tilde expression is evaluated on the server for its effect but it
 produces no value.

We have work around these difficutly by simply "writing" into the HTML
document. A more general solution consists in creating an initially
empty HTML container inserted in the document and fill that container
later on. This is traditionally implemented by designated the container
with a known HTML identifier, obtaining that element from within a client
side script, and modifying its content using an `innerHTML` assignement.
This is the solution implemented in the service `clientDateAlt` of
the solution we propose.


Mixing Server Values and Client Values
--------------------------------------

In the previous we have seen that Hop expressions can be evaluated on
the server or on the client. They can also been mixed as server-side
values can be injected inside client-side expression using the regular
JavaScript injection syntax. That is expressions used inside tilde
expression that are enclosed between `${` and `}` are evaluated when
the expression tilde expression is constructed. For instance,
`~{clientX + ${serverX}}` will sum on the client the value of the
client-side `clientX` variable and the value, the server side variable
`serverX` contained when the tilde expression has been constructed.

*****************************************************************************
#### Question 3 ####

Define a Hop service that create a web page that time interval ellapsed
from the server response and the complemention of the browser rendering.
(Use `Date.now()` to obtain the millisecond number since epoch.)
*****************************************************************************

of course, not only literals can be exchanged, compound data
structures, and even HTML elements. This might be used to alleviate
the recurrent pattern of questions 2, which consists in assigning an
element identifier, obtaining that element using `getElementById` and
modifying that element. Instead, the container can be created first on
the server, inserted in the produced HTML document, and modified by
the client side script. This is implemented in the `clientDateAltHop`
service.

*****************************************************************************
#### Question 4 ####

Re-implement the last service of Question 2 using this technique.
*****************************************************************************

Tilde expressions can be used inside HTML body but also in HTML attribute,
for instance on the `onclick` attribute of a button. Server side values
can, of course, be injected in that tilde expression too.

*****************************************************************************
#### Question 5 ####

Implement a service delivering a web page with a button that show pops up
a window displaying the client date and the page generation date.
*****************************************************************************

Services and Multitier Programming
----------------------------------

In the previous step, we have seen how to define services and how to
use them to generate URL. We will now invoke them from client side programs.
`HopFrame` created by service invocation implement the `post` method
that triggers the service body evaluation. The `post` method accepts
two arguments. The first is a success callback, which is a function of
one argument, the result of the call. The second is a failure callback,
also a function of one argument, an error descriptor.

*****************************************************************************
#### Question 6 ####

Implement a Hop service that creates a web page with one button that, each
time pressed, show the round-trip time to the server and comeback.
*****************************************************************************

Hop services can receive arguments and return compound JavaScript object.

*****************************************************************************
#### Question 7 ####

Implement a Hop service that creates a web page with one button. Each
time clicked, it invokes a service with a JavaScript object with a
unique identifier. That service returns a JavaScript object with two
fields: the current request time and the last request time or -1 on the first
visit. These results are displayed on the web page.
*****************************************************************************

HTML Documents
--------------

HTML documents refers to other resources, amongst which some are remote and
some are located on the same host. The Hop services use abstract URL
prefixed with `/hop` that do not refer to existing paths, so resources
located on the same host as the main server cannot be designated using
relative URLs. The simplest solution is to use the module name resolution
to refer to a locate resource. For instance, if one application needs
to serve an image located in the `img` directory of the source tree
of the application, it may designate this image with an absolute path
that can be obtained with `require.resolve( "./img/background.png" )`. Other
means exist not to expose absolute resources but for simplicity this is
the only method exposed in that tutorial.

Hop modules are available on the server *and* on the client components
of the application. That is, the form `require` is available to both
server-side and client-side programming but additionally, client-side
program must have loaded the file implementing the module with a prior
`<script src=<path> lang="hopscript"/>` declarations. All
implementation files must be provided explicitly and the file path
used in the `require` form must match exactly those used in the
corresponding `script>` tag.

Client-side loading is asynchronous and but a client-side `require`
can only be executed after the implementation has been loaded. The
recommended way to ensure the correct execution times is to place
the `require` forms inside a `<script defer>...</script>` element.

*****************************************************************************
#### Question 8 ####

Implement a web page whose client-side code requires the module
[drawimage.js](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step3/question8/drawimage.js)
that exports a function accepting two arguments, an image URL, a
canvas, and an optional color map, which is an array of RGB color
specification. For Instance, `drawImage` could be used as:

```javascript
var mycolors = [
   {red: 252, green: 27, blue: 0},
   {red: 125, green: 167, blue: 129},
   {red: 255, green: 122, blue: 10}
];

drawImage( url, mycanvas, mycolors );
```

The web page should display
the unmodified image and the modified one. The color
*****************************************************************************

Return to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step2/).
