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

*****************************************************************************
Return to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step2/).
Continue to [step4](https://github.com/manuel-serrano/hop-tutorials/tree/master/rss/step4/).

