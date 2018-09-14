This tutorial shows how to design and implement an "almost realistic
rss agregator". It will show the content of several configurable rss
feeds. Each news will be displayed with a summary, an image when provided,
and a link to the actual resource. The reader will also enable an
automatic translation of the news summaries.

To implement this application we will use:

  1. The extension Hop adds to the `require` form. This will be used
 to "import" RSS feeds.
  2. HTML generation that can naturally cope with web frameworks
 such as [bootstrap](https://getbootstrap.com/).
  3. The smooth JSON files import for configuring our application.
  4. The ability Hop offers to call external services. This  will be used
 to translate the news summaries.


**************************************************************************

Start with [step1](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step1/).


