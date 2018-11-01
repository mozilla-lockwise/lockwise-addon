/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function simulateTyping(wrapper, value, {clear = false} = {}) {
  if (clear) {
    wrapper.instance().value = value;
  } else {
    wrapper.instance().value += value;
  }
  wrapper.simulate("change");
}
