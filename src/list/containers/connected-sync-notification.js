import { connect } from "react-redux";
import { requestSelectItem } from "../actions";

import SyncNotification from "../components/sync-notification";

export default connect(
  null,
  dispatch => ({
    launchExistingEntry: (id) => requestSelectItem(id),
  })
)(SyncNotification);
