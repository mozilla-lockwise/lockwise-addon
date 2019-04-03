import { connect } from "react-redux";
import { selectItem } from "../actions";

import DuplicateNotification from "../components/duplicate-notification";

export default connect(
  null,
  dispatch => ({
    launchExistingEntry: (id) => dispatch(selectItem(id)),
  })
)(DuplicateNotification);
