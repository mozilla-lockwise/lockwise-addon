/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import { mount, getInjectNode } from "test/unit/enzyme";
import ScrollingList from "src/widgets/scrolling-list";

chai.use(sinonChai);

describe("widgets > <ScrollingList/>", () => {
  let wrapper, onChange, onClick;

  const data = [
    {id: "1", name: "item 1"},
    {id: "2", name: "item 2"},
    {id: "3", name: "item 3"},
  ];

  beforeEach(() => {
    onChange = sinon.spy();
    onClick = sinon.spy();
  });

  it("merge classNames", () => {
    wrapper = mount(
      <ScrollingList className="foo" data={[]} onChange={onChange}>
        {({item, ...props}) => {
          return (
            <li {...props}>{item.name}</li>
          );
        }}
      </ScrollingList>
    );
    expect(wrapper.find("ul").prop("className")).to.match(
      /^\S+ foo$/
    );
  });

  describe("empty list", () => {
    beforeEach(() => {
      wrapper = mount(
        <ScrollingList data={[]} onChange={onChange} onClick={onClick}>
          {({name}) => {
            return <div>{name}</div>;
          }}
        </ScrollingList>
      );
    });

    it("render list", () => {
      expect(wrapper.find("ul")).to.have.length(1);
      expect(wrapper.find("li")).to.have.length(0);
    });

    describe("onChange()", () => {
      it("not dispatched on arrow down", () => {
        wrapper.simulate("keydown", {key: "ArrowDown"});
        expect(onChange).to.have.callCount(0);
      });

      it("not dispatched on arrow up", () => {
        wrapper.simulate("keydown", {key: "ArrowUp"});
        expect(onChange).to.have.callCount(0);
      });
    });

    describe("onClick()", () => {
      it("not dispatched on enter", () => {
        wrapper.simulate("keydown", {key: "Enter"});
        expect(onClick).to.have.callCount(0);
      });

      it("not dispatched on space", () => {
        wrapper.simulate("keydown", {key: "Space"});
        expect(onClick).to.have.callCount(0);
      });
    });
  });

  describe("filled list", () => {
    beforeEach(() => {
      wrapper = mount(
        <ScrollingList data={data} onChange={onChange} onClick={onClick}>
          {({name}) => {
            return <div>{name}</div>;
          }}
        </ScrollingList>
      );
    });

    it("render list", () => {
      expect(wrapper.find("ul")).to.have.length(1);
      expect(wrapper.find("li")).to.have.length(3);
    });

    describe("onChange()", () => {
      it("dispatched on clicking item", () => {
        wrapper.find("li").first().simulate("mousedown", {button: 0});
        expect(onChange).to.have.been.calledWith("1");
      });

      it("not dispatched on clicking selected item", () => {
        wrapper.setProps({selected: "1"});
        wrapper.find("li").first().simulate("mousedown", {button: 0});
        expect(onChange).to.have.callCount(0);
      });

      it("not dispatched on right-clicking item", () => {
        wrapper.find("li").first().simulate("mousedown", {button: 1});
        expect(onChange).to.have.callCount(0);
      });

      it("dispatched on arrow down", () => {
        wrapper.setProps({selected: "1"});
        wrapper.simulate("keydown", {key: "ArrowDown"});
        expect(onChange).to.have.been.calledWith("2");
      });

      it("dispatched on arrow up", () => {
        wrapper.setProps({selected: "3"});
        wrapper.simulate("keydown", {key: "ArrowUp"});
        expect(onChange).to.have.been.calledWith("2");
      });

      it("dispatched on arrow down for no selection", () => {
        wrapper.simulate("keydown", {key: "ArrowDown"});
        expect(onChange).to.have.been.calledWith("1");
      });

      it("dispatched on arrow up for no selection", () => {
        wrapper.simulate("keydown", {key: "ArrowUp"});
        expect(onChange).to.have.been.calledWith("1");
      });

      it("not dispatched on arrow down for last item", () => {
        wrapper.setProps({selected: "3"});
        wrapper.simulate("keydown", {key: "ArrowDown"});
        expect(onChange).to.have.callCount(0);
      });

      it("not dispatched on arrow up for first item", () => {
        wrapper.setProps({selected: "1"});
        wrapper.simulate("keydown", {key: "ArrowUp"});
        expect(onChange).to.have.callCount(0);
      });

      it("not dispatched for irrelevant key press", () => {
        wrapper.simulate("keydown", {key: "A"});
        expect(onChange).to.have.callCount(0);
      });
    });

    describe("onClick()", () => {
      it("dispatched on clicking item", () => {
        wrapper.find("li").first().simulate("mousedown", {button: 0});
        expect(onClick).to.have.been.calledWith("1");
      });

      it("dispatched on clicking selected item", () => {
        wrapper.setProps({selected: "1"});
        wrapper.find("li").first().simulate("mousedown", {button: 0});
        expect(onClick).to.have.been.calledWith("1");
      });

      it("dispatched on arrow down", () => {
        wrapper.setProps({selected: "1"});
        wrapper.simulate("keydown", {key: "Enter"});
        expect(onClick).to.have.been.calledWith("1");
      });

      it("dispatched on arrow up", () => {
        wrapper.setProps({selected: "1"});
        wrapper.simulate("keydown", {key: "Space"});
        expect(onClick).to.have.been.calledWith("1");
      });

      it("not dispatched for irrelevant key press", () => {
        wrapper.simulate("keydown", {key: "A"});
        expect(onClick).to.have.callCount(0);
      });
    });
  });

  describe("scrolling", () => {
    beforeEach(() => {
      const inject = getInjectNode({
        id: "scrolling-inject-node",
        style: "display: grid; height: 5px; grid-template-rows: 1fr;",
      });
      wrapper = mount(
        <ScrollingList data={data} onChange={onChange}>
          {({name}) => {
            return <div>{name}</div>;
          }}
        </ScrollingList>,
        { attachTo: inject }
      );
    });

    it("scroll up into view", () => {
      const scrollIntoView = sinon.spy();
      wrapper.find("ul").instance().scrollTop = 42;
      wrapper.find("li").at(0).instance().scrollIntoView = scrollIntoView;
      wrapper.setProps({selected: "1"});

      expect(scrollIntoView).to.have.been.calledWith({
        behavior: "smooth", block: "start",
      });
    });

    it("scroll down into view", async () => {
      const scrollIntoView = sinon.spy();
      wrapper.find("li").at(2).instance().scrollIntoView = scrollIntoView;
      wrapper.setProps({selected: "3"});
      expect(scrollIntoView).to.have.been.calledWith({
        behavior: "smooth", block: "end",
      });
    });

    it("does not scroll if selection is unchanged", () => {
      const scrollIntoView = sinon.spy();
      wrapper.find("ul").instance().scrollTop = -42;
      wrapper.find("li").at(2).instance().scrollIntoView = scrollIntoView;
      wrapper.setProps({selected: "3"});
      scrollIntoView.resetHistory();
      wrapper.setProps({selected: "3"});

      expect(scrollIntoView).to.have.callCount(0);
    });
  });
});
