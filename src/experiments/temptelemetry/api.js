/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/* globals ExtensionAPI, ExtensionError, Services */

// This API exists to work around a bug in the `recordEvent` method where
// `value` is incorrectly specified as an integer, not a string (bug 1536877).
// Once all our users are on Firefox 68, this API can be removed. Until then,
// events containing any non-null `value` will be dropped by Firefox and log
// an error in the browser console--so we should use this API instead :-)

"use strict";

ChromeUtils.defineModuleGetter(this, "Services",
                               "resource://gre/modules/Services.jsm");

let testPlatformVersion;

this.temptelemetry = class extends ExtensionAPI {

  getAPI(context) {
    return {
      experiments: {
        temptelemetry: {
          recordEvent(category, method, object, value, extra) {
            try {
              Services.telemetry.recordEvent(category, method, object, value, extra);
            } catch (ex) {
              throw new ExtensionError(ex);
            }
          },
          shouldUseEmbedded() {
            const currentVersion = testPlatformVersion || Services.appinfo.platformVersion;
            // TODO: after the fix lands, update this to "68.0a1", the nightly
            // version number. Currently set to 68 beta, just to be safe.
            const requiredVersion = "68.0b1";
            // Services.vc.compare...
            //   - returns 1 if required version is greater than current (so
            //     the bug isn't fixed in the current browser, and we need to
            //     use this embedded API experiment)
            //   - returns 0 if required and current are equal (bug is fixed)
            //   - returns -1 if required is less than current (bug is fixed)
            return 1 === Services.vc.compare(requiredVersion, currentVersion);
          },
          setTestPlatformVersion(ver) {
            testPlatformVersion = ver;
          },
        },
      },
    };
  }
};
