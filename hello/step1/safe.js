// generated file, Hop Wizard Wed, 12 Sep 2018 11:41:00 +0200
const user = require( hop.user )
const cfg = require( hop.config );

// server configuration
cfg.httpAuthenticationMethod = "digest";

// anonymous user
user.add( { name: 'anonymous', services: ['public'] } );

// regular user
user.add( { name: 'regular',
            password: '+b1ba7b3820503ad8f843e5c068a88e35',
            directories: ['/tmp', process.env.HOME ],
            services: '*' } );
	    
// admin user
user.add( { name: 'admin', 
            groups: ['admin', 'exec' ],
            password: '+c9b0f9982aedfae0cf6f8e107b260fd4',
            directories: ['/tmp', '/tmp/serrano/cache/hop', '.', '/home/serrano/.config/hop', '/usr/local/share/hop/'+ hop.version, '/usr/local/lib/hop/'+ hop.version+ '/weblets', '/usr/local/share/hop/contribs'],
            services: '*' } );

