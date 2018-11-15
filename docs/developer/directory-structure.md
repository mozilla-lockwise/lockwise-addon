# Directory Structure

The following provides a brief outline of the directory structure of this project.

## `docs/`

Documentation that gets built and deploy to GitHub pages (you're reading it!).

## `src/`

This is where all of the source code for this project lives.

#### `src/background/`

Any code meant to run in a background page lives here. For more information, see the [`README.md`][background-readme] in this directory.

#### `src/list/`

Common code for all the list views in the extension, as well as the specific views themselves (in subdirectories). For more information, see the [`README.md`][list-readme] in this directory.

##### `src/list/manage/`

The full-tab management UI.

##### `src/list/popup/`

The "doorhanger" UI.

#### `src/locales/`

All the strings for each locale, in subdirectories with the locale name. For more information, see the [`README.md`][locales-readme] in this directory.

#### `src/widgets/`

All the common UI widgets used throughout the source. For more information, see the [`README.md`][widgets-readme] in this directory.

## `test/`

This is where all of the tests for this project live.

### `test/integration/`

End-to-end integration tests operating on a compiled version of the add-on running in Firefox. These tests are written in Javascript using Mocha and `webextensions-geckodriver`.

### `test/unit/`

Unit tests testing individual components of the source code. These are writen in Javascript using Mocha/Chai and run via Karma. The subdirectories of this directory match the subdirectories of `src/webextension`.

[background-readme]: https://github.com/mozilla-lockbox/lockbox-addon/blob/master/src/background/README.md
[list-readme]: https://github.com/mozilla-lockbox/lockbox-addon/blob/master/src/list/README.md
[locales-readme]: https://github.com/mozilla-lockbox/lockbox-addon/blob/master/src/locales/README.md
[widgets-readme]: https://github.com/mozilla-lockbox/lockbox-addon/blob/master/src/widgets/README.md
