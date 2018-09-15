"use strict";

const fs = require( "fs" );
const rcfile = require( hop.config ).rcDirectory + "/rss.json";

module.exports = fs.existsSync( rcfile ) ? require( rcfile ) : require( "./default.json" );

