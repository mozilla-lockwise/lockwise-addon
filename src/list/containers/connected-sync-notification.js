import { connect } from "react-redux";
import { openSyncPrefs } from "../actions";

import SyncNotification from "../components/sync-notification";

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
)(SyncNotification);
