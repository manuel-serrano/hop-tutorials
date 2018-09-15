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

This documentation [page](http://hop-dev.inria.fr/home/00-command.html) 
explains how to invoke Hop from the command line. In short, to pass
arguments to a Hop JavaScript program, use:

```shell
hop -- src.js arg arg ...
```

The value of the first argument following `src.js` is to be obtained
with `process.argv[ 2 ]`.
*****************************************************************************


Adding a drop down menu to the news
-----------------------------------

We will now add a dropdown menu to each news so that its summary could
be translated into different natural langages that are specified in 
the user configuration file.

*****************************************************************************
Question 2

1. Extend the configuration file with an additional array of language
codes (two letters
[ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)code)
that denotes the languages available to translation.
2. Check the bootstrap [dropdown documentation](https://getbootstrap.com/docs/4.1/components/dropdowns/) and change your `rss.js` module to add a dropdown
button with the list of configured languages. For that, creates a new
HTML tag named `transbutton` and use that new tag in your program.
*****************************************************************************

Translating the News
--------------------

We will now use the `translate.js` function to translate news. 

*****************************************************************************
Question 3

Modify the implementation of the
*****************************************************************************



*****************************************************************************
Return to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step3/).


[hop]: http://hop-dev.inria.fr/home/00-hop.html
[mym]: http://mymemory.translated.net
[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

