/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Breadcrumbs, { Crumb } from "../../../widgets/breadcrumbs";
import { NEW_ITEM_ID } from "../../common";

export default function HomeBreadcrumbs({itemId, itemTitle, onClickHome}) {
  if (itemId) {
    const trimmedTitle = itemTitle.trim();
    const titleId = `breadcrumbs-item${itemId === NEW_ITEM_ID ? "-new" : ""}`;

    return (
      <Breadcrumbs>
        <Localized id="toolbar-go-home">
          <Crumb onClick={onClickHome}>hOMe</Crumb>
        </Localized>

        <Localized id={titleId} $title={trimmedTitle}
                   $length={trimmedTitle.length}>
          <Crumb>iTEm</Crumb>
        </Localized>
      </Breadcrumbs>
    );
  }
  return null;
}

HomeBreadcrumbs.propTypes = {
  itemId: PropTypes.string,
  itemTitle: PropTypes.string,
  onClickHome: PropTypes.func.isRequired,
};

HomeBreadcrumbs.defaultProps = {
  itemTitle: "",
};
