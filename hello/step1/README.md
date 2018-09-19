Hop Installation
================

This first step will help you getting started with Hop. The procedure described
here uses the Hop Docker distribution.

Installation
------------
The Hop installation procedure is described from the
Hop [homepage](http://hop-dev.inria.fr). Select the `Download`
tab and follow the "Docker installation" instructions .

You will have to download two files:

  - `hop.dockerfile` that is used to build the docker image. Once the image
 is built this file is no longer needed.
  - `hop.docker`, a shell wrapper that is used to invoke Hop within docker
 as simply as possible. 

Hop Configuration
-----------------
The Hop execution environment is a full-fledged Web server. As it potentially
exposes all the resources the host has to offer, it is mandatory to
restrict its usages before running application. This is the purpose of the
Hop configuration. The simplest way to configure it is to proceed as
follows:

  1- Start Hop with `hop.docker -p 8080`. This will start the Docker
 image and run Hop inside it. As this point Hop can then only access
 the resources located inside the Docker virtual machine.
  2- From your host (i.e., your computer) browse the URL
 `http://localhost:8080/` using your regular browser.
 Note that on Windows, instead of `localhost`, you might have to use the
 IP address assigned to the virtual machine when the Docker daemon started.
  3- Follow the instructions by clicking on the `wizard` link.

The Hop wizard will generate two files:

  - `$HOME/.config/hop/hoprc.js`
  - `$HOME/.config/hop/wizard.js`

These two files have to be adapted to fit your applications need. When Hop
starts, it first loads the `$HOME/.config/hop/hoprc.js` file. As seen,
this generated file first starts loading the `wizard.js` file. This second
file declares several users. We will modify it to grant extra permissions
to the `anonymous` user.

The Hop server authenticate all the input requests according to the
HTTP authentication headers. Requests that contains no HTTP
authentications are associated with the Hop `anonymous` user. For
this tutorial, let's grant full permission to the anonymous user.
For that, modify its declaration with:

```javascript
user.add( { name: 'anonymous', services: '*', directories: '*' } );
```

The `wizard.js` is a regular JavaScript program and `user.add` is a
regular JavaScript function call. It can then be guard by a
conditional JavaScript test. This can be used to use conditional
permissions. For instance, we can choose to grand `anonymous` full
permissions only when Hop runs on a certain port. This can be achieved
with:

```javascript
if( hop.port === 8888 ) {
   // grant full permission when Hop runs on port 8888
   user.add( { name: 'anonymous', services: '*', directories: '*' } );
} else {
   // otherwise, only permit public services
   user.add( { name: 'anonymous', services: ['public'] } );
}

```

Note that it is required to always define an `anonymous` user.

This directory contains three files `hoprc.js`, `unsafe.js`, `safe.js` that
illustrate a possible Hop configuration. The `safe.js` file defines
a _regular_ user that can execute all services but that can only access
resources located in the `/tmp` and `$HOME` (home of the owner of the
Hop process) directory of the host. User passwords can be generated using
the `/hop/epassword` service.


Hop is now ready for being used. In the next step we will write our first
Hop program, for now, you can already check the pre-existing services
by browsing the URL `http://localhost:8080/hop` (provided Hop is run with
`hop.docker` or `hop.docker -p 8080`) or browse the Docker image disk
with `http://localhost:8080/`, or browse the Hop documentation located at:
`http://localhost:8080/usr/local/share/doc/hop/3.2.0-pre1/index.html`.


Finally, you may find useful to copy the Emacs mode on your disk. It can be
obtained with:

```shell
$ docker cp hop:/usr/local/share/site-lisp/hopjs.el
```

**************************************************************************
Continue to [step2](https://github.com/manuel-serrano/hop-tutorials/tree/master/hello/step2/).
