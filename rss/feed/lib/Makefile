#*=====================================================================*/
#*    .../prgm/project/hop/3.2.x/node_modules/feed/lib/Makefile        */
#*    -------------------------------------------------------------    */
#*    Author      :  Manuel Serrano                                    */
#*    Creation    :  Fri Aug 28 10:00:50 2015                          */
#*    Last change :  Thu Sep  6 15:31:04 2018 (serrano)                */
#*    Copyright   :  2015-18 Manuel Serrano                            */
#*    -------------------------------------------------------------    */
#*    feed precompilation                                              */
#*=====================================================================*/
do: build

#*---------------------------------------------------------------------*/
#*    Configuration                                                    */
#*---------------------------------------------------------------------*/
PACKAGE=feed
include ../../Makefile.modules

#*---------------------------------------------------------------------*/
#*    The entries                                                      */
#*---------------------------------------------------------------------*/
.PHONY: build install uninstall feed _feed

build: .afile o
	$(MAKE) o/feed_s-$(HOPRELEASE).$(SHAREDSUFFIX) \
            TARGETNAME=feed \
            OBJECTS=o/feed.o
	$(MAKE) o/_feed_s-$(HOPRELEASE).$(SHAREDSUFFIX) \
            TARGETNAME=_feed \
            OBJECTS="o/_feed.o"

install:
	$(MAKE) mkdir DIR=$(DESTDIR)$(HOPLIBDIR)/$(LIBSDIR)
	$(MAKE) install-module TARGETNAME=_feed
	$(MAKE) install-module TARGETNAME=feed
	$(RM) -rf $(DESTDIR)$(HOPLIBDIR)/$(HOPFILDIR)/node_modules/$(PACKAGE)/lib/o
	chmod -R $(MODDIR) $(DESTDIR)$(HOPLIBDIR)/$(LIBSDIR)

install-module:
	$(MAKE) install-shared-lib \
                INSTALL="$(INSTALL)" \
                BOOTLIBDIR=$(BUILDDIR)/$(DIR)/o \
                FILDIR=$(LIBSDIR) \
                LIBDIR=$(DESTDIR)$(HOPLIBDIR) \
                LIB=$(TARGETNAME)_s-$(HOPRELEASE)
	chmod -R $(MODDIR) $(DESTDIR)$(HOPLIBDIR)/hop/$(HOPRELEASE)/$(DIR)
	cp -r ../../$(PACKAGE) $(DESTDIR)$(HOPLIBDIR)/$(HOPFILDIR)/node_modules
	chmod $(MODEXE) $(DESTDIR)$(HOPLIBDIR)/$(LIBSDIR)/$(TARGETNAME)_s-$(HOPRELEASE).$(SHAREDSUFFIX)

uninstall:
	$(MAKE) uninstall-module TARGETNAME=_feed
	$(MAKE) uninstall-module TARGETNAME=feed

uninstall-module:
	$(MAKE) uninstall-shared-lib LIB=$(TARGETNAME)_s-$(HOPRELEASE).$(SHAREDSUFFIX)

#*---------------------------------------------------------------------*/
#*    lib                                                              */
#*---------------------------------------------------------------------*/
o:
	mkdir o

feed: o
	$(MAKE) o/$(TARGETNAME)_s-$(HOPRELEASE).$(SHAREDSUFFIX)

_feed: o
	$(MAKE) o/$(TARGETNAME)_s-$(HOPRELEASE).$(SHAREDSUFFIX)

o/$(TARGETNAME)_s-$(HOPRELEASE).$(SHAREDSUFFIX): $(OBJECTS)
	$(MAKE) shared-lib \
             LDINSTALLNAMEDIR=$(DESTDIR)$(HOPLIBDIR)/$(LIBSDIR) \
             BOOTLIBDIR=$(BUILDDIR)/$(DIR)/o \
             FORCELD=true \
             LIBDEST=$@ \
             SONAME=$(TARGETNAME)_s-$(HOPRELEASE).$(SHAREDSUFFIX) \
             LDOPTS="-L$(BUILDLIBDIR) -L$(BIGLOOLIBDIR) $(LDOPTS)" \
             CLOSELIBS="-lbigloo_s-$(RELEASE) $(HOPCLOSELIBS_S)"

#*---------------------------------------------------------------------*/
#*    .afile                                                           */
#*---------------------------------------------------------------------*/
.afile: _feed.hop
	(cd $(dir $@) && $(AFILE) -suffix hop $(notdir $^) -o $(notdir $@))

#*---------------------------------------------------------------------*/
#*    clean                                                            */
#*---------------------------------------------------------------------*/
clean:
	$(RM) -rf o

devclean:
	$(RM) -f .afile

distclean: devclean

#*---------------------------------------------------------------------*/
#*    Suffixes                                                         */
#*---------------------------------------------------------------------*/
.SUFFIXES:
.SUFFIXES: .scm .o .hop .js

#*---------------------------------------------------------------------*/
#*    explicit rules                                                   */
#*---------------------------------------------------------------------*/
o/_feed.o: _feed.hop
	@ $(call compile3,$(HOPC),$(HFLAGS),$(BCFLAGS) -dload-sym,$(BLFLAGS),-c,$< -o $@)

#*---------------------------------------------------------------------*/
#*    The implicit rules                                               */
#*---------------------------------------------------------------------*/
o/%.o: %.scm
	@ $(call compile2,$(BIGLOO),$(BCFLAGS),$(BLFLAGS),-c,$< -o $@)

o/%.o: %.hop
	@ $(call compile3,$(HOPC),$(HFLAGS),$(BCFLAGS),$(BLFLAGS),-c,$< -o $@)

%.scm: %.hop
	@ $(call compile3,$(HOPC),$(HFLAGS),$(BCFLAGS),$(BLFLAGS),-s,$< -o $@)

o/%.o: %.js
	@ $(call compile3,$(HOPC),$(HFLAGS),$(BCFLAGS) -dload-sym,$(BLFLAGS),$(BHOPCFLAGS) -c --js-no-module-main --js-module-name __nodejs_$* --js-module-path $*,$< -o $@)

