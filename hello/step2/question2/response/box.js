"use hopscript"

function makeBox( x, class=false ) {
   return <div class=${"box" + (class ? class : "")}><span>${x}</span></div>;
}

function MAKEBOX( attr, ... nodes ) {
   return makeBox( attr ? attr.class : false, nodes[ 0 ] );
}

exports.MAKEBOX = MAKEBOX;
