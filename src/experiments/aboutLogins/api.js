/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/* globals AppConstants, browser, Components, dispatcher,
   ExtensionCommon, ExtensionAPI, Services, XPCOMUtils */

"use strict";

ChromeUtils.defineModuleGetter(this, "Services",
                               "resource://gre/modules/Services.jsm");
XPCOMUtils.defineLazyServiceGetter(this, "resProto",
                                   "@mozilla.org/network/protocol;1?name=resource",
                                   "nsISubstitutingProtocolHandler");

const resourceHost = "lockbox";
const processScriptPath = "experiments/aboutLogins/about-page-process-script.js";

this.aboutLogins = class extends ExtensionAPI {
  getAPI(context) {
    return {
      experiments: {
        aboutLogins: {
          register() {
            resProto.setSubstitution(resourceHost, context.extension.baseURI);
            const processScriptURL = context.extension.baseURI.resolve(processScriptPath);
            Services.ppmm.loadProcessScript(processScriptURL, true);
          },
        },
      },
    };
  }
};
