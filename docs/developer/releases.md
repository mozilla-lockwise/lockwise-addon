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
* You are an administrator of the project `lockbox-extension`
* Your local git working copy has a remote named `upstream` pointing to `git@github.com:linuxwolf/lockbox-addon.git`

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
4. Create a pull request on GitHub [comparing changes from the `master` branch against/to `production`][production-compare]

    * Open the pull request so we can show the changes, CI status, and approvals
      * Request an approval from the P.I. and Product representatives
    * Once the release has been reviewed, tested, and approved to go live, merge and close the pull request
    * Test Pilot's Jenkins will then build, sign, and deploy the extension (see ["Extension Signing"](#extension-signing))

5. Tag the latest commit on `master` branch with an annotated version and push the tag:

    * `git tag -a -m "Release 0.1.0" 0.1.0`
    * `git push upstream 0.1.0`
    * Travis-CI will build and generate a [GitHub Release][releases]

6. Edit the resulting GitHub Release

    * Set the [GitHub Release][releases] title to match the version
    * Set the GitHub Release notes to match the `docs/release-notes.md`
    * Download the signed add-on: `wget -O signed-addon.xpi https://testpilot.firefox.com/files/lockbox@mozilla.com/latest`
    * Attach to the GitHub Release the downloaded signed add-on

7. Send an announcement to the team (e.g., via Slack team channel)

## Extension Signing

Learn about the Test Pilot extension deployment and hosting process here:  
https://github.com/mozilla/testpilot/blob/master/docs/development/hosting.md

This repository is in the **"testpilot-mozillaextension"** Jenkins pipeline.
The CloudOps team manages access to, and can help report on, the status of the
builds.

The resulting files deployed are:

- Updates file for automatic browser extension updates: [https://testpilot.firefox.com/files/lockbox@mozilla.com/updates.json](https://testpilot.firefox.com/files/lockbox@mozilla.com/updates.json)
- Latest version of the signed extension XPI: [https://testpilot.firefox.com/files/lockbox@mozilla.com/latest](https://testpilot.firefox.com/files/lockbox@mozilla.com/latest)

**IMPORTANT:** Test Pilot reports the status of build, signing, and deployment of its artifacts on the IRC channel **#testpilot-bots**.  Be sure to join the channel prior to pushing the `production` branch to GitHub in order to receive the status updates.

[production-compare]: https://github.com/linuxwolf/lockbox-addon/compare/production...master
[releases]: https://github.com/linuxwolf/lockbox-addon/releases
