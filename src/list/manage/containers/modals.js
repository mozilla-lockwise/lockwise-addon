/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import ModalRoot from "../../../widgets/modal-root";
import { LocalizedConfirmDialog } from "../../../widgets/dialog-box";
import DialogBox from "../../../widgets/dialog-box";
import { hideModal, removeItem, cancelEditing, selectItem, openHomepage, openSyncPrefs } from
       "../../actions";
import { classNames } from "../../../common";

import styles from "./modals.css";

export const DeleteItemModal = connect(
  (state) => ({
    l10nId: "modal-delete",
    theme: "danger",
  }),
  (dispatch, {itemId}) => ({
    onConfirm: () => { dispatch(removeItem(itemId)); },
  })
)(LocalizedConfirmDialog);

export const CancelEditingModal = connect(
  (state) => ({
    l10nId: "modal-cancel-editing",
  }),
  (dispatch, {nextItemId}) => {
    if (nextItemId !== undefined) {
      return {onConfirm: () => { dispatch(selectItem(nextItemId)); }};
    }
    return {onConfirm: () => { dispatch(cancelEditing()); }};
  }
)(LocalizedConfirmDialog);

function ConnectDeviceAllSet({allSetLabel, onDownloadClick, onClose, ...props}) {
  return (
    <DialogBox {...props}
      buttons={[{ name: "AllSet", label: allSetLabel, theme: "primary" }]}
      onClick={() => { }}
      onClose={onClose}>
      <div className={styles.connectDevice} >
        <Localized id="connect-another-device">
          <h1>cOnNeCt aNoThEr dEvIcE</h1>
        </Localized>
        <Localized id="easily-access-logins">
          <h2>eAsIlY GaIn aCcEsS To yOuR LoGiNs fRoM AnY DeViCe.</h2>
        </Localized>
        <ul>
          <li className={styles.desktopIcon}>
            <Localized id="access-on-another-computer">
              <h3>aCcEsS On aNoThEr cOmPuTeR</h3>
            </Localized>
            <Localized id="simply-sign-in-other-device">
              <p>sImPlY sIgN iN tO yOuR FiReFoX AcCoUnT On yOuR OtHeR DeViCe tO SyNc yOuR LoGiNs tO ThAt cOmPuTeR.</p>
            </Localized>
          </li>
          <li className={styles.mobileIcon}>
            <Localized id="download-mobile">
              <h3>dOwNlOaD ThE MoBiLe aPp</h3>
            </Localized>
            <Localized id="download-ios-android"
              learnmore={<a onClick={onDownloadClick}></a>}>
              <p>fIrEfOx LOCKWISe iS AvAiLaBlE On bOtH IoS AnD AnDrOiD. <learnmore>cLiCk hErE</learnmore> To lEaRn mOrE AnD To sEnD A LiNk tO YoUr pHoNe tO DoWnLoAd tHe aPp.</p>
            </Localized>
          </li>
        </ul>
      </div>
    </DialogBox>
  );
}
ConnectDeviceAllSet.propTypes = {
  closeLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDownloadClick: PropTypes.func.isRequired,
};

function ConnectDeviceSteps({isComplete, profile, closeLabel, onClose, onSyncPrefsClick, ...props}) {
  const completed = <Localized id="connection-complete"><span>(cOmPlEtE)</span></Localized>;
  return (
    <DialogBox {...props}
      buttons={[{ name: "Close", theme: "primary", label: closeLabel }]}
      onClick={() => { }}
      onClose={onClose}>
      <div className={styles.connectDevice} >
        <Localized id="connect-another-device">
          <h1>cOnNeCt aNoThEr dEvIcE</h1>
        </Localized>
        <Localized id="before-access">
          <h2>bEfOrE YoU CaN AcCeSs yOuR LoGiNs oN AnOtHeR DeViCe, YoU WiLl nEeD To cOnNeCt a fIrEfOx aCcOuNt.</h2>
        </Localized>
        <ol>
          <li className={classNames([styles.connect, isComplete ? styles.complete : styles.incomplete])}>
            <Localized id="connect-a-firefox-account"><h3>cOnNeCt a fIrEfOx aCcOuNt {isComplete ? completed : ""}</h3></Localized>
            <Localized id="sync-requires-account"
              signin={<a onClick={() => onSyncPrefsClick("connect-device-step-one")}></a>}>
              <p>tO SyNc yOuR LoGiNs tO AnOtHeR DeViCe, YoU WiLl nEeD To <signin>SiGn iN Or cReAtE A FiReFoX AcCoUnT</signin>.</p>
            </Localized>
          </li>
          <li className={classNames([styles.sync, profile && profile.hasProfile && profile.syncEnabled ? styles.complete : styles.incomplete])}>
            <Localized id="ensure-logins-checked">
              <h3>eNsUrE ThE &ldquo;lOgInS&rdquo;cHeCkBoX Is sElEcTeD In sYnC PrEfErEnCeS</h3>
            </Localized>
            <Localized id="setting-to-allow-sync"
              go={<a onClick={() => onSyncPrefsClick("connect-device-step-two")}></a>}>
              <p>iN OrDeR To aLlOw yOuR LoGiNs tO Be sYnCeD To oThEr dEvIcEs, ThIs sEtTiNg mUsT Be cHeCkEd. <go>oPeN SyNc pReFeReNcEs</go></p>
            </Localized>
          </li>
        </ol>
      </div>
    </DialogBox>
  );
}
ConnectDeviceSteps.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  closeLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDownloadClick: PropTypes.func.isRequired,
  onSyncPrefsClick: PropTypes.func.isRequired,
};


export function ConnectDevice({profile, onClose, onDownloadClick, onSyncPrefsClick, ...props}) {
  const isComplete = profile && profile.hasProfile && !profile.hasProfileNeedsAttn;

  if (isComplete && profile.syncEnabled) {
    return (
      <Localized id="connect-another-device" attrs={{ allSetLabel: true}}>
        <ConnectDeviceAllSet allSetLabel="aLl sEt" onClose={onClose}
                             onDownloadClick={onDownloadClick}
                             {...props} />
      </Localized>
    );
  }
  return (
    <Localized id="connect-another-device" attrs={{ closeLabel: true }}>
      <ConnectDeviceSteps isComplete={isComplete} profile={profile}
                          closeLabel="cLOSe" onClose={onClose}
                          onSyncPrefsClick={onSyncPrefsClick}
                          {...props} />
    </Localized>
  );
}

ConnectDevice.propTypes = {
  profile: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onDownloadClick: PropTypes.func.isRequired,
  onSyncPrefsClick: PropTypes.func.isRequired,
};

export const ConnectDeviceModal = connect(
  (state) => {
    return {
      l10nId: "modal-connect-another-device",
      profile: {
        hasProfile: state.app.profileWrap.hasProfile,
        hasProfileNeedsAttn: state.app.profileWrap.hasProfileNeedsAttn,
        syncEnabled: state.app.profileWrap.profile && state.app.profileWrap.profile.syncEnabled,
      },
    };
  },
  (dispatch) => ({
    onClose: () => { dispatch(hideModal()); },
    onDownloadClick: () => { dispatch(openHomepage()); },
    onSyncPrefsClick: (menuitem) => { dispatch(openSyncPrefs(menuitem)); },
  })
)(ConnectDevice);

const MODALS = {
  "delete": DeleteItemModal,
  "cancel-editing": CancelEditingModal,
  "connect-another-device": ConnectDeviceModal,
};

export default connect(
  (state) => ({
    modals: MODALS,
    modalId: state.modal.id,
    modalProps: state.modal.props,
  }),
  (dispatch) => ({
    onClose: () => { dispatch(hideModal()); },
  })
)(ModalRoot);
