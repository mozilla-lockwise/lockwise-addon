# Installing the Lockbox Addon

## Installing dependencies

To **install the project dependencies**, you can run:

```sh
npm install
```

## Building the source code

To **build the project**, you can run:

```sh
npm run build
```

This puts all the necessary files in the `dist/` directory, which you can then
temporarily load into Firefox (e.g. `about:debugging`).

## Building the extension

To **build an extension .zip**, you can run:

```sh
npm run package
```

This puts the addon bundle in the `addons/` directory.

:warning: The resulting add-on is unsigned and likely won't work on release
versions of Firefox. You can flip the `xpinstall.signatures.required` preference
on other channels accordingly.

## Running the extension

To **run the extension** in Firefox, you can run:

```sh
npm run run -- -f nightly
```

This will automatically create a fresh new user profile that will not persist
between runs. This means the data will be lost every time.

## Running the extension with a persistent profile

To **run the extension with a profile that persists** between runs, you can
create a new profile by browsing to `about:profiles`.

Once you have a new profile created (no matter the location), you can tell jpm
(via npm) to run using that profile _and_ not to copy the profile temporarily
so that any changes (e.g. adding new entries) will be saved:

```sh
npm run run -- -p PROFILE --keep-profile-changes
```

The PROFILE value may be a profile name or the path to the profile.

Now, when you run using this profile, any data or settings you make to the
browser itself or in Lockbox will be available for future runs.

## Setting npm run flags 

To specify flags for `run` to use regularly, use `npm config set webext_runflags`:

```sh
npm config set webext_runflags="-f nightly -p PROFILE --keep-profile-changes"
```

This way if you want to always test locally using an existing profile (with
example data) using Firefox Nightly, you can just run (without adding flags):

```sh
npm run run
```
