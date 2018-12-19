import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import { copyToClipboard } from "src/background/clipboard";

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe("background > copyToClipboard", () => {

  let clipboardText, mockClipboard, realSetTimeout, realClearTimeout;

  beforeEach(() => {
    realSetTimeout = window.setTimeout;
    realClearTimeout = window.clearTimeout;
    window.setTimeout = sinon.spy(() => Date.now() + Math.random());
    window.clearTimeout = sinon.spy();

    clipboardText = "";
    mockClipboard = {
      readText: sinon.spy(async () => clipboardText),
      writeText: sinon.spy(async (newText) => clipboardText = newText),
    };
  });

  afterEach(() => {
    window.setTimeout = realSetTimeout;
    window.clearTimeout = realClearTimeout;
  });

  const subject = (text = "textToCopy") =>
    copyToClipboard("testField", text, mockClipboard);

  it("copies to clipboard", async () => {
    await subject();

    expect(mockClipboard.writeText.firstCall.args)
      .to.deep.equal(["textToCopy"]);
  });

  it("clears the clipboard after a delay", async () => {
    await subject();

    expect(window.setTimeout.callCount).to.equal(1);
    expect(window.setTimeout.firstCall.args[1]).to.equal(60000);

    const clearFn = window.setTimeout.firstCall.args[0];
    await clearFn();

    expect(mockClipboard.readText.callCount).to.equal(1);
    expect(mockClipboard.writeText.callCount).to.equal(2);
    expect(mockClipboard.writeText.lastCall.args).to.deep.equal([""]);
  });

  it("cancels the previous clearing delay on subsequent copy", async () => {
    await subject();
    expect(window.setTimeout.callCount).to.equal(1);
    expect(window.clearTimeout.callCount).to.equal(0);

    await subject("new value");
    expect(window.setTimeout.callCount).to.equal(2);
    expect(window.clearTimeout.callCount).to.equal(1);
  });

  it("skips clearing the clipboard if contents have changed", async () => {
    await subject();

    clipboardText = "Something completely different";

    const clearFn = window.setTimeout.firstCall.args[0];
    await clearFn();

    expect(mockClipboard.readText.callCount).to.equal(1);
    expect(mockClipboard.writeText.callCount).to.equal(1);
  });
});
