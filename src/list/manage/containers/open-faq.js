/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { ExternalLink } from "../../../widgets/link";
import { openFAQ } from "../../actions";

import styles from "./open-faq.css";

function OpenFAQ({onOpenFAQ}) {
  return (
    <Localized id="toolbar-open-faq">
      <ExternalLink className={styles.faq} onClick={onOpenFAQ}>
        fAq
      </ExternalLink>
    </Localized>
  );
}

OpenFAQ.propTypes = {
  onOpenFAQ: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  (dispatch) => ({
    onOpenFAQ: () => { dispatch(openFAQ()); },
  })
)(OpenFAQ);
