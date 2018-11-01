/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";
import PropTypes from "prop-types";

import { classNames } from "../common";
import Button from "./button";
import Toolbar from "./toolbar";

import buttonStyles from "./button.css";
import styles from "./panel.css";

const BORDER_CLASS_NAME = {
  "normal": styles.normalBorder,
  "floating": styles.floatingBorder,
  "none": null,
};

export function PanelHeader({className, toolbarClassName, border, onBack,
                             children}) {
  const imgSrc = browser.extension.getURL("/icons/arrowhead-left-16.svg");
  return (
    <header className={classNames([
              styles.panelHeader, BORDER_CLASS_NAME[border], className,
            ])}>
      {onBack ? (
        <Button theme="ghost" size="micro" onClick={onBack}>
          <Localized id="panel-back-button" attrs={{alt: true}}>
            <img src={imgSrc} alt="go bACk"/>
          </Localized>
        </Button>
      ) : null}
      <Toolbar className={classNames([
                 styles.panelHeaderToolbar, toolbarClassName,
               ])}>{children}</Toolbar>
    </header>
  );
}

PanelHeader.propTypes = {
  className: PropTypes.string,
  toolbarClassName: PropTypes.string,
  border: PropTypes.oneOf(Object.keys(BORDER_CLASS_NAME)),
  onBack: PropTypes.func,
  children: PropTypes.node,
};

PanelHeader.defaultProps = {
  className: "",
  toolbarClassName: "",
  border: "normal",
};

export function PanelBanner({className, border, children}) {
  return (
    <aside className={classNames([
            styles.panelBanner, BORDER_CLASS_NAME[border], className,
           ])}>
      {children}
    </aside>
  );
}

PanelBanner.propTypes = {
  className: PropTypes.string,
  border: PropTypes.oneOf(Object.keys(BORDER_CLASS_NAME)),
  children: PropTypes.node,
};

PanelBanner.defaultProps = {
  className: "",
  border: "normal",
};

export function PanelBody({className, scroll, children}) {
  return (
    <section className={classNames([
            styles.panelBody, scroll && styles.scroll, className,
          ])}>
      {children}
    </section>
  );
}

PanelBody.propTypes = {
  className: PropTypes.string,
  scroll: PropTypes.bool,
  children: PropTypes.node,
};

PanelBody.defaultProps = {
  className: "",
  scroll: true,
};

export function PanelFooter({className, border, children}) {
  return (
    <footer className={classNames([
              styles.panelFooter, BORDER_CLASS_NAME[border], className,
            ])}>
      {children}
    </footer>
  );
}

PanelFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  border: PropTypes.oneOf(Object.keys(BORDER_CLASS_NAME)),
};

PanelFooter.defaultProps = {
  className: "",
  border: "normal",
};

const THEME_CLASS_NAME = {
  primary: `${styles.primaryTheme}`,
  normal: `${styles.normalTheme}`,
};

export class PanelFooterButton extends React.Component {
  static get propTypes() {
    return {
      theme: PropTypes.oneOf(Object.keys(THEME_CLASS_NAME)),
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      theme: "normal",
      className: "",
    };
  }

  focus() {
    this.buttonElement.focus();
  }

  render() {
    const {theme, className, ...props} = this.props;
    return (
      <button {...props} className={classNames([
                buttonStyles.button, styles.panelFooterButton,
                THEME_CLASS_NAME[theme], className,
              ])} ref={(element) => this.buttonElement = element}/>
    );
  }
}

export default function Panel({className, children}) {
  return (
    <article className={classNames([styles.panel, className])}>
      {children}
    </article>
  );
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Panel.defaultProps = {
  className: "",
};
