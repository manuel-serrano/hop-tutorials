Configuration
=============

We will extend our application to support multiple RSS feeds. The list
of feeds will be stored in a configuration file that will be loaded
when the application starts.

RC file
-------

Hop expects the configuration files to be all located in the user
home directory. On a standard Linux configuration this directory is
likely to be `$HOME/.config/hop` but to provide a higher level of
abstraction and to provide flexibilty, the configuration directory path
is stored in the Hop variable: `rcDirectory` of the `hop.config` module.

*****************************************************************************
#### Question 1 ####

Implement a module `config.js` that checks if the configuration file
`rss.json` exists. If it exists it load its and makes all its fields
accessible. It it does not exist, it load the `default.json` file instead
which is located in the source tree of the application.

For now, the `default.json` file will merely contain a list of feeds. It will
be defined as:

```json
{ "feeds": [
   { "name": "Le Monde",
     "href": "https://www.lemonde.fr/rss/une.xml" },
   { "name": "Le Devoir",
     "href": "http://feeds2.feedburner.com/fluxdudevoir" },
   { "name": "New York Times",
     "href": "http://feeds.nytimes.com/nyt/rss/HomePage" },
   { "name": "The Guardian",
     "href": "http://feeds.guardian.co.uk/theguardian/rss" },
   { "name": "El Pais",
     "href": "http://ep00.epimg.net/rss/elpais/portada.xml" } ] 
}
```

Multi Feeds
-----------

*****************************************************************************
#### Question 2 ####

1. Modify the `rss.js` so that it displays the news of the first RSS feed
declared in the configuration file.
2. Modify the `rss.js` file so that the navigation bar shows all available
 feeds.
3. Modify your program so that clicking on a feed automatically shows
 its content.

*****************************************************************************
#### Question 3 ####

Some RSS feeds include too lare picture or too large text bodies. This can
be fixed by using an approprioate HSS file. To restrict that size of an image
so that it is scale to fit its container width, use:

```
image {
   max-wdith: 100%;
   height: auto;
}
```

For the text, it is enough to declare that its width is 100%. 

Add a `rss.hss` file used by `hss.js` to configure these graphical
elements.


*****************************************************************************
Return to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step2/).
Continue to [step4](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step4/).

