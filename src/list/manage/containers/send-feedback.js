/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { PanelFooterButton } from "../../../widgets/panel";
import { sendFeedback } from "../../actions";

import styles from "./send-feedback.css";

function SendFeedback({onSendFeedback}) {
  return (
    <Localized id="send-feedback-button">
      <PanelFooterButton className={styles.sendFeedback}
                         onClick={onSendFeedback}>
        fEEDBACk
      </PanelFooterButton>
    </Localized>
  );
}

SendFeedback.propTypes = {
  onSendFeedback: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  (dispatch) => ({
    onSendFeedback: () => { dispatch(sendFeedback()); },
  })
)(SendFeedback);
