# Releases

## Checklist

Before a release can be made, the following must be done:

* Any user stories labeled as `epic` to be included in the release are approved by Product and PI
* All finished work is verified to work as expected and committed to `master`
* Any unfinished work has been triaged and assigned to the appropriate milestone
* Product, Engineering, and PI have voiced approval to release (e.g., via Slack team channel)

## Instructions

**NOTE:** these instructions assume:

* All of the [checklist items](#checklist) are complete
* You are an administrator of the project `lockbox-addon`
* Your local git working copy has a remote named `upstream` pointing to `git@github.com:mozilla-lockbox/lockbox-addon.git`

To merge the strings from localization:

1. Update the `master` branch with the latest commits from the `pontoon` branch with a Pull Request.

  * This way the translations from the Pontoon service are made available to the release.
  * https://github.com/mozilla-lockwise/lockwise-addon/compare/pontoon?expand=1
  
2. Check the [`locales.json` file](https://github.com/mozilla-lockwise/lockwise-addon/tree/master/src/locales) includes all the locales expected to be made available to users (and add it, if not).

3. Update the `pontoon` branch with the latest commits from the `master` branch with a Pull Request.

  * This way the Pontoon service will only expose stable strings to translators.
  * https://github.com/mozilla-lockwise/lockwise-addon/compare/pontoon...master?expand=1

To generate the next release binary:

1. Update "version" in package.json (and package-lock.json)

    * we follow the [semver](http://semver.org/) syntax
    * _Alpha_ releases will be labeled with "-alpha" (e.g., "0.1.0-alpha")
    * _Beta_ releases will be labeled with "-beta" (e.g., "1.0.0-beta")
    * _Stable_ releases will **not** be labeled, and follow semver from the last Beta release (e.g., "1.0.0")

2. Update `docs/release-notes.md`:

    * latest release is at the top, under a second-level header
    * each release includes the sub headings "What's New", "What's Fixed", and "Known Issues"
    * consult with Product Management on wording if needed

3. Commit and ultimately merge to `master` branch
4. Create a tag on the release tab in GitHub

    * Name the release the same as the addon version
    * Add same release notes added in step 2 above
    * CircleCI will build and generate a [GitHub Release][releases]
      * You will be able to view progress in the [circleci project dashboard](https://circleci.com/gh/mozilla-lockbox/lockbox-addon)

5. Send an announcement to the team (e.g., via Slack team channel)

[releases]: https://github.com/mozilla-lockwise/lockwise-addon/releases
