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
`hop.webService` constructor. Check the Hop
[documentation](http://hop-dev.inria.fr/home/00-hop.html). We will use
them to call the [mymemory](http://mymemory.translated.net) services
that translate natural languages.

*****************************************************************************
Question 1

Write a server-side only program that declares a function that implements
a language translator. The text to be translated will be read from the
command line.

To pass arguments to Hop, use:

```shell
hop -- src.js arg arg ...
```

The value of the first argument is to be obtained with `process.argv[ 2 ]`.

*****************************************************************************
Return to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step3/).


