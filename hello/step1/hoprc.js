var fs = require( 'fs' );
var path = require( 'path' );
var cfg = require( hop.config );
var etchoprc = path.join( cfg.etcDir, 'hoprc.hop' );

if( fs.exists( etchoprc ) ) #:hop-load( etchoprc );

// wizard file
require( hop.port === 8888 ? "./unsafe.js" : "./safe.js" );

// proxying
cfg.enableProxying = false;

// WebDAV
cfg.enableWebdav = true;

