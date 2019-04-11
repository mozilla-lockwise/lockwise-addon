/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { ItemListPlaceholder } from "../components/item-list";
import { Link } from "../../widgets/link";
import { openFAQ } from "../actions";

export function BaseNoMatchingPlaceholder({
  withTitle,
  className,
  onLearnMore,
}) {
  const header = (withTitle) ?
    <Localized id="all-items-no-results-title">
      <h2>nO rESULTs!</h2>
    </Localized> :
    null;
  return <ItemListPlaceholder className={className}>
    {header}
    <Localized id="all-items-no-results">
      <p>nO rESULTs</p>
    </Localized>
    <Localized id="all-items-no-results-footer"
      go={
        <Link onClick={onLearnMore}></Link>
      }
    >
      <p><go>lEARn mORe</go></p>
    </Localized>
  </ItemListPlaceholder>;
}

BaseNoMatchingPlaceholder.propTypes = {
  withTitle: PropTypes.bool,
  className: PropTypes.string,
  onLearnMore: PropTypes.func.isRequired,
};

BaseNoMatchingPlaceholder.defaultProps = {
  className: "",
};

export default connect(
  (state, ownProps) => ({
    ...ownProps,
  }),
  (dispatch, ownProps) => ({
    // sing doorhanger does not render a in-placeholder title ...
    // .. (ab)using the inverse of `withTitle` for the `close` flag
    onLearnMore: () => dispatch(openFAQ(null, !ownProps.withTitle)),
  })
)(BaseNoMatchingPlaceholder);
