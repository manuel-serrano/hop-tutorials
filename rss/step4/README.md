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
#### Question 1 #### 

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
#### Question 2 ####

1. Extend the configuration file with an additional array of language
codes (two letters
[ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)code)
that denotes the languages available to translation.
2. Check the bootstrap [dropdown documentation](https://getbootstrap.com/docs/4.1/components/dropdowns/) and change your `rss.js` module to add a dropdown
button with the list of configured languages. For that, creates a new
HTML tag named `transbutton` and use that new tag in your program. 
*****************************************************************************

#### Question 3 #### 

Let's make some refactoring for clarity. 

1. Define a `dropdown` tag that you add to the `btutils.js` module.
  a. Pass the dropdown label as an attribute.
  b. Pass the languages as children nodes. Each language in a different
`span` element. You will notice that Hop's argument flattening is not
smart enough to package children nodes correctly. Hence, you will have to
filter the arguments explicitly.
2. Use that new function to cleanup `rss.js`.

*****************************************************************************

Translating the News
--------------------

We will now use the `translate.js` function to translate news. 

*****************************************************************************
#### Question 4 ####

It is now time to complete our RSS multi-lingual, multi-feed
reader. 

  1. Most RSS feed declare their language. Whem present, this information 
is to be found in the `stream.head.language` property. Modify `rss.js` so
that when the language is declared filter it out to extract the ISO 639
code. When the declaration is abstent, we will assume the English language.
Pass that language information to the `feed` function that builds the
feed graphical element.
  2. In Question 1, we have prepared a translation function. As client code
 are not allowed (*) to randomly request third party services, we will use
 the Hop server as a proxy to the remote MyMemory services. Modify the `trans.js`
 module to turn the function `translate` into a service.
  3. Modify the `rss.js` file of Question 3, to call the
translation service with the source language (question 4.1) and the 
target language. 
  4. Check the result of the translation, on success, update the News
display.
  5. Add another button next to the translation to restore the original
summary.  

*****************************************************************************
Return to [step3](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step3/).


[hop]: http://hop-dev.inria.fr/home/00-hop.html
[mym]: http://mymemory.translated.net
[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

