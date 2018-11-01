/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Button from "./button";

import styles from "./dialog-box.css";

export default class DialogBox extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.node.isRequired,
      buttons: PropTypes.arrayOf(
        PropTypes.oneOf([
          PropTypes.shape({ label: PropTypes.string }),
          PropTypes.shape({
            label: PropTypes.string,
            theme: Button.propTypes.theme,
          }),
        ])
      ).isRequired,
      onClick: PropTypes.func.isRequired,
      onClose: PropTypes.func.isRequired,
    };
  }

  componentDidMount() {
    this._primaryButton.focus();
  }

  render() {
    const {children, buttons, onClick, onClose} = this.props;
    return (
      <section className={styles.modalDialog}>
        <div>
          {children}
        </div>
        <menu>
          {buttons.map(({label, theme}, i) => {
            let extraProps = {};
            if (i === 0) {
              if (!theme) {
                theme = "primary";
              }
              extraProps = {
                ref: (element) => this._primaryButton = element,
              };
            }

            return (
              <Button {...extraProps} key={i} theme={theme}
                      onClick={() => { onClick(i); onClose(); }}>
                {label}
              </Button>
            );
          })}
        </menu>
      </section>
    );
  }
}

export function ConfirmDialog({confirmLabel, cancelLabel, theme, onConfirm,
                               ...props}) {
  return (
    <DialogBox {...props} buttons={[
                 {label: confirmLabel, theme},
                 {label: cancelLabel},
               ]}
               onClick={(i) => { if (i === 0) { onConfirm(); } }}/>
  );
}

ConfirmDialog.propTypes = {
  children: PropTypes.node.isRequired,
  confirmLabel: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string.isRequired,
  theme: Button.propTypes.theme,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export function LocalizedConfirmDialog({l10nId, theme, onConfirm, onClose}) {
  return (
    <Localized id={l10nId} attrs={{confirmLabel: true, cancelLabel: true}}>
      <ConfirmDialog confirmLabel="yEs" cancelLabel="no" theme={theme}
                     onConfirm={onConfirm} onClose={onClose}>
        aRe yOu sURe?
      </ConfirmDialog>
    </Localized>
  );
}

LocalizedConfirmDialog.propTypes = {
  l10nId: PropTypes.string.isRequired,
  theme: Button.propTypes.theme,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
