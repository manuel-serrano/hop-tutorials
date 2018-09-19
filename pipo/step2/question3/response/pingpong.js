"use strict";

service padMove( id, padid, pad ) {
   hop.broadcast( padid, pad );
}
