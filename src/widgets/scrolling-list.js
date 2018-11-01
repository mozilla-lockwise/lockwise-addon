/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./scrolling-list.css";

export default class ScrollingList extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      itemClassName: PropTypes.string,
      styledItems: PropTypes.bool,
      children: PropTypes.func.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
        }).isRequired
      ).isRequired,
      tabIndex: PropTypes.string,
      selected: PropTypes.string,
      onChange: PropTypes.func.isRequired,
      onClick: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      className: "",
      itemClassName: "",
      styledItems: true,
      tabIndex: "0",
      selected: null,
    };
  }

  handleKeyDown(e) {
    const changeSelection = (index) => {
      this.props.onChange(this.props.data[index].id);
    };
    const currentIndex = this.getCurrentIndex();

    switch (e.key) {
    case "ArrowDown":
      if (this.props.data.length) {
        if (currentIndex === -1) {
          changeSelection(0);
        } else if (currentIndex < this.props.data.length - 1) {
          changeSelection(currentIndex + 1);
        }
      }
      break;
    case "ArrowUp":
      if (this.props.data.length) {
        if (currentIndex === -1) {
          changeSelection(0);
        } else if (currentIndex > 0) {
          changeSelection(currentIndex - 1);
        }
      }
      break;
    case "Enter":
    case "Space":
      if (currentIndex !== -1 && this.props.onClick) {
        this.props.onClick(this.props.data[currentIndex].id);
      }
      break;
    default:
      return;
    }

    e.stopPropagation();
    e.preventDefault();
  }

  handleMouseDown(e, id) {
    if (e.button !== 0) {
      return;
    }

    if (this.props.selected !== id) {
      this.props.onChange(id);
    }
    if (this.props.onClick) {
      this.props.onClick(id);
    }
  }

  getCurrentIndex() {
    return this.props.data.findIndex((i) => i.id === this.props.selected);
  }

  scrollIntoViewIfNeeded(item) {
    const root = this._rootElement;

    const overlapsTop = (item.offsetTop - root.offsetTop) < root.scrollTop;
    const overlapsBottom = (
      item.offsetTop + item.clientHeight - root.offsetTop
    ) > (root.scrollTop + root.clientHeight);

    if (overlapsTop) {
      item.scrollIntoView({behavior: "smooth", block: "start"});
    } else if (overlapsBottom) {
      item.scrollIntoView({behavior: "smooth", block: "end"});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected && this.props.selected !== prevProps.selected) {
      this.scrollIntoViewIfNeeded(this._selectedElement);
    }
  }

  render() {
    const { className, itemClassName, styledItems, children, data, tabIndex,
            selected } = this.props;
    const finalItemClassName = classNames([
      styledItems && styles.styledItem, itemClassName,
    ]);

    return (
      <ul className={classNames([
            styles.scrollingList, className,
          ])} tabIndex={tabIndex} onKeyDown={(e) => this.handleKeyDown(e)}
          ref={(element) => this._rootElement = element}>
        {data.map((item) => {
          let props = {
            onMouseDown: (e) => this.handleMouseDown(e, item.id),
            className: finalItemClassName,
          };
          if (item.id === selected) {
            Object.assign(props, {
              "data-selected": true,
              "ref": (element) => this._selectedElement = element,
            });
          }

          return (
            <li {...props} key={item.id}>
              {children(item)}
            </li>
          );
        })}
      </ul>
    );
  }
}
