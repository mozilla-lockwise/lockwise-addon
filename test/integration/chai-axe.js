/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const IMPACTS = [
  "minor", "moderate", "serious", "critical",
];

function filterImpact(results, impact) {
  const min = IMPACTS.indexOf(impact || "minor");
  return (results || []).filter((r) => IMPACTS.indexOf(r.impact) >= min);
}

export default function axeResults(chai, utils) {
  const Assertion = chai.Assertion;

  function filterViolations(impact) {
    let target = utils.flag(this, "object");
    target = target && target.violations;
    target = filterImpact(target, impact);
    utils.flag(this, "object", target);
  }

  Assertion.addChainableMethod("violations", filterViolations, filterViolations);
}
