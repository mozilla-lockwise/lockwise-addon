/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function makeItemSummary(item) {
  return {
    title: item.title,
    id: item.id,
    origins: item.origins,
    username: item.entry.username,
  };
}

export function classNames(classNames) {
  return classNames.filter((i) => i).join(" ");
}
