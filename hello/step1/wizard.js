// generated file, Hop Wizard Wed, 12 Sep 2018 11:41:00 +0200
var user = require( hop.user )

// anonymous user
if( hop.port === 8888 ) {
   // grant full permission when Hop runs on port 8888
   user.add( { name: 'anonymous', services: '*', directories: '*' } );
} else {
   // otherwise, only permit public services
   user.add( { name: 'anonymous', services: ['public'] } );
}

// admin user
user.add( { name: 'admin', 
            groups: ['admin', 'exec' ],
            password: '+c9b0f9982aedfae0cf6f8e107b260fd4',
            directories: ['/tmp', '/tmp/serrano/cache/hop', '.', '/home/serrano/.config/hop', '/usr/local/share/hop/'+ hop.version, '/usr/local/lib/hop/'+ hop.version+ '/weblets', '/usr/local/share/hop/contribs'],
            services: '*' } );

