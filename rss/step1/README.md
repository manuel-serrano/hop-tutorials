RSS Feed
========

In this first step, we will see how to parse RSS feed and extract
relevant information.

Parsing RSS feed
----------------

Hop extends the `require` function in two direction.

  1. URL can be used to designate module names.
  2. It accepts an optional second parameter that specifies the language
 the module to be imported is implemented. The language can be designated by
 its name, for instance "hopscript", or by a Hop module that implements a
 language compiler.

It is beyond the scope of this tutorial to explain how to implement
such a compiler.  Here, we will simply use an already existing
compiler that parses RSS feeds and that constructs JavaScript
objects. It is located in the
[feed](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/feed)
directory. To use it form importing modules:

```javascript
require( "http://rss.slashdot.org/Slashdot/slashdotMain", "./feed" );
```

*****************************************************************************
#### Question 1 ####

Implement a server-side only program that parses RSS feeds, displays
the feed title, and that displays on the terminal the news titles.

*****************************************************************************

Rendering RSS feed
------------------

*****************************************************************************
#### Question 2 ####

Implement a Hop service that accepts as parameter an RSS URL and that
displays the RSS title and that place each news in a separated box
showing: the title, the new date, the summary, and, if present, the
news image.

*****************************************************************************

**************************************************************************
Continue to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step2/).

