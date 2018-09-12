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
They start with `${` and with the closing curly bracket `}`.

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
This is the solution implemented in the service `clientDataAlt` of
the solution we propose.

Hop alleviates this programming pattern by removing the need for
creating explicit identifiers. Instead, the container can be created
first on the server, inserted in the produced HTML document, and modified
by the client side script. This is implemented in the `clientDateAltHop`
service.


*****************************************************************************
Return to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step2/).

