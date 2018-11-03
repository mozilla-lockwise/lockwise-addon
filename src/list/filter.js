/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export function parseFilterString(filter) {
  filter = filter.trim();
  if (!filter) {
    return [];
  }
  return filter.split(/\s+/).map((i) => i.toLocaleLowerCase());
}

function match(filterElement, value) {
  return value.includes(filterElement);
}

function matchAny(filterElement, values) {
  for (let i of values) {
    if (match(filterElement, i)) {
      return true;
    }
  }
  return false;
}

export function filterItem(filter, item) {
  const title = item.title.toLocaleLowerCase();
  const username = item.username.toLocaleLowerCase();
  const origins = item.origins.map((i) => i.toLocaleLowerCase());

  for (let i of filter) {
    if (!match(i, title) && !match(i, username) && !matchAny(i, origins)) {
      return false;
    }
  }
  return true;
}
