import { connect } from "react-redux";
import { openSyncPrefs } from "../common";

import ErrorNotification from "../components/error-notification";

export default connect(({
  app: {
    profileWrap: {
      hasProfileNeedsAttn,
    },
  },
}) => ({
  hasProfileNeedsAttn,
}),
  dispatch => ({
    reconnectToSync: () => openSyncPrefs(),
  })
)(ErrorNotification);

