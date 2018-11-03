/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { filterItems } from "../actions";
import FilterInput from "../../widgets/filter-input";

function ItemFilter({inputRef, ...props}) {
  return (
    <Localized id="item-filter" attrs={{
      "aria-label": true, "placeholder": true,
    }}>
      <FilterInput {...props} aria-label="fILTER…" placeholder="fILTEr…"
                   ref={inputRef}/>
    </Localized>
  );
}

ItemFilter.propTypes = {
  inputRef: PropTypes.func,
};

export default connect(
  (state) => ({
    value: state.list.filter.query,
    disabled: state.cache.items.length === 0,
  }),
  (dispatch) => ({
    onChange: (value) => { dispatch(filterItems(value)); },
  })
)(ItemFilter);
