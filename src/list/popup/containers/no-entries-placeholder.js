/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { ItemListPlaceholder } from "../../components/item-list";
import { Link } from "../../../widgets/link";
import { openFAQ } from "../../actions";

export function BaseNoEntriesPlaceholder({className, onLearnMore}) {
  return <ItemListPlaceholder className={className}>
    <Localized id="all-items-get-started">
      <p>wHEn yOu cREATe an eNTRy...</p>
    </Localized>
    <Localized id="all-items-get-started-footer"
        go={
          <Link onClick={onLearnMore}/>
        }>
      <p>{"<go>fINd oUt wHy</go>"}</p>
    </Localized>
  </ItemListPlaceholder>;
}

BaseNoEntriesPlaceholder.propTypes = {
  className: PropTypes.string,
  onLearnMore: PropTypes.func.isRequired,
};

BaseNoEntriesPlaceholder.defaultProps = {
  className: "",
};

export default connect(
  (state, ownProps) => ({
    ...ownProps,
  }),
  (dispatch) => ({
    onLearnMore: () => dispatch(openFAQ({
      target: "how-do-i-get-my-saved-logins-into-firefox-lockbox",
      close: true,
    })),
  }),
)(BaseNoEntriesPlaceholder);
