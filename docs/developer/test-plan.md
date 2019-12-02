# Test Plan: lockwise-extension

## Ownership

* Product Integrity: Matt Brandt
* Product Manager: Sandy Sage
* Engineering Manager: Devin Reams
* Engineering Leads: Matthew Miller

## Purpose

Test scope for Q3 and Q4 of the Lockwise Firefox extension. Q3 will take the project through the internal Alpha phase of the product to Q4 when the team will tune a product that we can ship as a limited Beta to external users via Test Pilot.

### Entry Criteria

* QA has access to all PRDs, mocks, and related documents.
* A run script that installs the WebExtension for Firefox Nightly
* A compiled and signed extension for Firefox Beta and Release
* Staging and release channels

### Exit Criteria

* All bugs against the features have been triaged
* All milestone features tagged as user stories and TxP have been resolved fixed and verified by Product Integrity
* Sign off criteria have been met

### Acceptance Criteria

This section broadly defines when the product is ready to ship

* QA has signed off
* Product confirms we are feature complete
* Engineering confirms we are feature complete
* a11y-review sign off
* Sec review completed and sign off
* All info is localized at least for a pre-defined set of locales
* All telemetry requirements are in place
* All the necessary PR and blog posts have been sent out

## Timelines and Milestones

Alpha - estimated Q3 timeline

* July: lay the foundation for system add-on with embedded WebExtension development
* August: begin secure storage and front-end editor design and implementation
* September: finish editor and storage, package for release

Beta - estimated Q4 timeline

* The team moves to 2 week sprints that include epics and user stories.
* Tracking of these user stories and associated features to take place in Github issues
* December: external "Beta" launch to public

## Testing Summary

This section describes which components will be the focus of the test team.

### In Scope

* Involvement standing up CI for unit test and integration testing
* Participate in code reviews
* Definition of user stories
* Authoring and executing manual test cases
* Authoring automated test cases, shared responsibility with the dev team
* Accessibility review
* Performance testing

### Out of Scope

* Security testing
    * Internal - security group
    * External - ekr and a published report
* Testing for ESR

## Requirements for testing

### Environments

#### Alpha and Beta

##### [Lockwise Extension](https://github.com/mozilla-lockwise/lockwise-addon)

* Desktop - Windows 10, macOS [latest]

    * Firefox

##### [Lockwise DataStore](https://github.com/mozilla-lockwise/lockbox-datastore)

* Desktop

### Specifications

* Webextension (url)
* Datastore (url)

## Test Strategy

### User stories

In Q3 we ideated on a focal point for the team to begin work on, the below list are these high level stories.

Future work will be tracked in github through [the use of epics](https://github.com/mozilla-lockwise/lockwise-addon/issues?utf8=%E2%9C%93&q=label%3Aepic%20) and their dependendent user stories.

* As a Firefox Account user, I can set it up in 5 clicks or less, and retrieve and fill my credentials in 3 clicks or less.
* As a security conscious user, I understand the value of the password manager, what it is going to do for me without making me feel overwhelmed. I'm notified of the password manager when I'm ready to make the most use of it, and I can set up and access my accounts as easily as writing them down in a document or notebook.
* When I log into websites and applications, I want to ensure my identity is protected, so only I can securely access my accounts with my identity.
* When I create a new account online I want to save the newly created credentials so I can quickly log in the next time I need access to that account.
* When I go to sign into an account, I want my account credentials to populate the form fields when available, and be accessible in one location when not.
* When I need to change my account credentials, I want to be able to access my credentials and update them with recovery options to restore previous account credentials.
* When I want to access my account on my mobile device, I want my account credentials accessible from when I saved them in the browser last, and vice versa, ideally without having to navigate to one location to then manually type in the credentials as viewable on screen.

### Builds

* Currently builds are done on an as needed basis using the installation steps in the ReadMe and docs.
* Test Pilot build, signing and extension hosting pipeline for internal extension signing and distribution

### Testing Tools

* Test case creation - [TestRail](https://testrail.stage.mozaws.net/index.php?/projects/overview/51)
* Manual test case execution - [TestRail](https://testrail.stage.mozaws.net/index.php?/projects/overview/51)
* Bug management - [GitHub issues](https://github.com/mozilla-lockwise/lockwise-addon/issues)
* Test automation - FoxPuppet and Selenium

### Other Things

* Reverting to an older version of Firefox
* Commodity hardware that matches our target user segment
* Connectivity requirements & user experience on a diverse range of networks
* Ensure keyboard only use of the application function (desktop only)
* Multi-stage workflows are logical and require as few interactions as possible.
* When appropriate provide indications of how far through the process the user is and how much further
* Avoidance of jargon and slang
* Important points and content are highlighted in some way
* User errors are clearly highlighted with help messages that suggest solutions

## Sign Off

### Criteria

* All test cases have been executed

* A sufficient level of automated test coverage has been achieved (measured by code coverage tools). Test coverage will also be measured against reduction of risk in the areas designated by the risk assessment plan.

* All blockers, criticals must be fixed and verified or have an agreed-upon timeline for being fixed (as determined by engineering/QA)

### Checklist

Exit Criteria | Owner | Status | Notes |
------------- | ----- | ------ | ----- |
Testing Prerequisites (specs, use cases) | | |
Testing Infrastructure setup | | |
Test Plan Creation | | |
Test Cases Creation | ||
Full Functional Tests Execution | | |
Automation Coverage | | |
Performance Testing | | |
All Defects Logged | | |
Critical/Blockers Fixed and Verified | | |
Product Team | | |
Engineering Team | | |
Metrics/Telemetry | | |
A11y | | |
l10n | | |
Security | | |
