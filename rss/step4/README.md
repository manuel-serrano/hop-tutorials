Translating
===========

We now have an operational RSS readers. It can reads different feeds and
switch from one to another by using the navigation bar. The list of feeds
it reads is configured in a json file located in the default directory
Hop uses. We will now extend the reader so that news will could be
translated into another natural language on demand.

Translation
-----------

With Hop, calling a third party service is almost as simple as calling
a native Hop service. Third party services are created using the
`hop.webService` constructor. Check the Hop [documentation][hop]. We
will use them to call the [mymemory][mym] services that translate
natural languages.

*****************************************************************************
Question 1

1. Write a server-side that exports a function that translate a text. The
 translator should return a JavaScript [Promise][mdn] that resolves
with the translated text.
2. Write a server-side only program that import the previous module
and that translates a text it receives from command line.

To pass arguments to Hop, use:

```shell
hop -- src.js arg arg ...
```

The value of the first argument is to be obtained with `process.argv[ 2 ]`.


Translating the News
--------------------

We will now connect 
*****************************************************************************
Return to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step3/).


[hop]: http://hop-dev.inria.fr/home/00-hop.html
[mym]: http://mymemory.translated.net
[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

