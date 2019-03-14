/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { openWebsite } from "../common";
import CopyToClipboardButton from "../../widgets/copy-to-clipboard-button";
import FieldText from "../../widgets/field-text";
import Input from "../../widgets/input";
import Button from "../../widgets/button";
import LabelText from "../../widgets/label-text";
import PasswordInput from "../../widgets/password-input";
import PasswordText from "../../widgets/password-text";

import styles from "./item-fields.css";

const fieldsPropTypes = PropTypes.shape({
  isPopup: PropTypes.bool,
  origin: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export function ItemFields({fields, onCopy, isPopup, onReveal}) {
  const originEl = isPopup ? (
      <h4 className={styles.popupOrigin}>{new URL(fields.origin).host}</h4>
  ) : (
      <a className={styles.originLink} onClick={() => openWebsite(fields.origin)}>{fields.origin}</a>
  );

  const originLabel = isPopup ? null : (
      <Localized id="item-fields-origin">
      <LabelText>oRIGIn</LabelText>
      </Localized>
  );

  const launchButton = isPopup ? null : (
      <Button theme="normal" title={"launch"}
              onClick={() => openWebsite(fields.origin)}>
      <Localized id="item-fields-origin-button">
      <span>lAUNCh</span>
      </Localized>
      </Button>
  );

  return (
    <div className={styles.itemFields}>
      <div className={styles.field}>
        {originLabel}
        <div className={styles.inlineButton}>
          <FieldText data-name="origin">{originEl}</FieldText>
          {launchButton}
        </div>
      </div>
      <div className={styles.field}>
        <Localized id="item-fields-username">
          <LabelText>uSERNAMe</LabelText>
        </Localized>
        <div className={styles.inlineButton}>
          <FieldText data-name="username">
            {fields.username}
          </FieldText>
          <Localized id="item-fields-copy-username">
            <CopyToClipboardButton value={fields.username} isPopup={isPopup}
                                   onCopy={toCopy => onCopy("username", toCopy)}/>
          </Localized>
        </div>
      </div>
      <div className={styles.field}>
        <Localized id="item-fields-password">
          <LabelText>pASSWORd</LabelText>
        </Localized>
        <div className={styles.inlineButton}>
          <PasswordText data-name="password" value={fields.password} onReveal={onReveal} />
          <Localized id="item-fields-copy-password">
            <CopyToClipboardButton value={fields.password} isPopup={isPopup}
                                   onCopy={toCopy => onCopy("password", toCopy)}/>
          </Localized>
        </div>
      </div>
    </div>
  );
}

ItemFields.propTypes = {
  fields: fieldsPropTypes,
  isPopup: PropTypes.bool,
  onCopy: PropTypes.func.isRequired,
  onReveal: PropTypes.func.isRequired,
};

export class EditItemFields extends React.Component {
  static get propTypes() {
    return {
      itemId: PropTypes.string,
      fields: fieldsPropTypes.isRequired,
      onChange: PropTypes.func.isRequired,
      onReveal: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    // Focus the first editable field...
    if (this.props.fields.itemId) {
      // For existing items, the first field is disabled.
      this._secondField.focus();
    } else {
      this._firstField.focus();
    }
  }

  render() {
    const {fields, onChange, onReveal} = this.props;
    const controlledProps = (name, maxLength = 500) => {
      return {name, value: fields[name],
              onChange: (e) => onChange(e),
              maxLength: maxLength.toString()};
    };

    return (
      <div className={styles.itemFields}>
        <div className={styles.inputWrap}>
          <label>
            <Localized id="item-fields-origin">
              <LabelText>oRIGIn</LabelText>
            </Localized>
            <Localized id="item-fields-origin-input" attrs={{placeholder: true}}>
              <Input className={styles.originInput} type="url"
                     disabled={!!fields.itemId}
                     required={!fields.itemId}
                     placeholder="hTTps://wWw.eXAMPLe.cOm"
                     {...controlledProps("origin")}
                     ref={(element) => this._firstField = element} />
            </Localized>

            <div className={`${styles.tooltip} ${styles.infoMsg}`}>
              <div className={styles.arrowLeft}></div>
              <Localized id="item-fields-origin-info-message">
                <p>iNFo mESSAGe</p>
              </Localized>
            </div>
          </label>
        </div>

        <label>
          <Localized id="item-fields-username">
            <LabelText>uSERNAMe</LabelText>
          </Localized>
          <Localized id="item-fields-username-input"
                     attrs={{placeholder: true}}>
            <Input className={styles.input} type="text"
                   placeholder="nAMe@eXAMPLe.cOm"
                   {...controlledProps("username")}
                   ref={(element) => this._secondField = element} />
          </Localized>
        </label>
        <label>
          <Localized id="item-fields-password">
            <LabelText>pASSWORd</LabelText>
          </Localized>
          <PasswordInput className={styles.password}
                         required
                         onReveal={onReveal}
                         {...controlledProps("password")}/>
        </label>
      </div>
    );
  }
}
