/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const Cm = Components.manager.QueryInterface(Ci.nsIComponentRegistrar);

const classID = Components.ID("{8ddaffa4-0598-47c8-a966-ee9cbb76868f}");

if (!Cm.isCIDRegistered(classID)) {
  const {XPCOMUtils} = ChromeUtils.import("resource://gre/modules/XPCOMUtils.jsm", {});

  const factory = XPCOMUtils.generateSingletonFactory(function() {
    const {AboutLogins} = ChromeUtils.import("resource://lockbox/experiments/aboutLogins/about-logins.jsm", {});
    return new AboutLogins();
  });

  Cm.registerFactory(classID, "about:logins",
                     "@mozilla.org/network/protocol/about;1?what=logins",
                     factory);
}
