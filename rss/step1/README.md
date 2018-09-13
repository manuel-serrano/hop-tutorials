RSS Feeds
=========

Hop's `require` function accepts an optional second parameter that
specifies the language the module to be imported is implemented. The
language can be designated by its name, for instance "hopscript", or
by a Hop module that implements a language compiler. It is beyond the
scope of this tutorial to explain how to implement such a compiler.
Here, we will simply use an already existing compiler that parses
RSS feeds and that constructs JavaScript objects. It is located
in the [feed](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/feed) directory. To use is from a Hop module, use:

```javascript
require( "https://www.lemonde.fr/rss/une.xml", "./feed" );
```


**************************************************************************
Continue to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step2/).

