/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import styles from "./list-sort.css";

export default class ListSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const { disabled } = this.props;
    return (
      <React.Fragment>
        <Localized id="sort-by">
          <label className={styles.label}
                 htmlFor="sort-options">sORT bY:</label>
        </Localized>
        <select id="listSortSelect" value={this.state.value}
                className={styles.select}
                onChange={this.handleChange}
                disabled={disabled}>
          <Localized id="sort-by-name">
            <option value="name">nAMe</option>
          </Localized>
          <Localized id="sort-by-last-used">
            <option value="last-used">lASt uSEd</option>
          </Localized>
          <Localized id="sort-by-last-changed">
            <option value="last-changed">lASt cHANGEd</option>
          </Localized>
        </select>
      </React.Fragment>
    );
  }


  static get propTypes() {
    return {
      sort: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      value: "name",
      disabled: false,
    };
  }
}
