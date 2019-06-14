# Firefox Lockwise for Desktop Release Notes

## 2.2.4-alpha

_Date: 2019-06-14_

### What's New

* Localization support for Indonesian (id) is added.

### What's Fixed

* Telemetry is re-enabled for Firefox versions 68 and higher.
* A number of localizations have been improved.
* Scroll bars are no longer displayed unless needed.

### Known Issues

* There are reports of Firefox crashing with this extension installed, that appear to be due to telemetry-related issues.  For now, telemetry is disabled when run in Firefox 67.  This issue is tracked in ([BMO 1555734](https://bugzilla.mozilla.org/show_bug.cgi?id=1555734)).
* This extension may conflict with Master Password.  If you wish to use this extension, we recommend disabling Master Password, then disable/re-enable this extension before it will work correctly.
* If "Ask to always save logins and passwords for websites" is enabled after the extension is loaded, you may be prompted by Firefox to save a login when adding or editing in the management interface.  As a workaround, you can disable then re-enable the extension to prevent this prompt.

## 2.2.3-alpha

_Date: 2019-05-31_

### What's New

* Lockwise is now _**localized**_ for a number of languages!

### What's Fixed

* If one of your logins has an unexpected website address, Lockwise no longer stops working and instead displays the address as-is.

### Known Issues

* There are reports of Firefox crashing with this extension installed, that appear to be due to telemetry-related issues.  For now, telemetry is disabled.  This issue is tracked in ([BMO 1555734](https://bugzilla.mozilla.org/show_bug.cgi?id=1555734)).
* This extension may conflict with Master Password.  If you wish to use this extension, we recommend disabling Master Password, then disable/re-enable this extension before it will work correctly.
* If "Ask to always save logins and passwords for websites" is enabled after the extension is loaded, you may be prompted by Firefox to save a login when adding or editing in the management interface.  As a workaround, you can disable then re-enable the extension to prevent this prompt.

## 2.2.2-alpha

_Date: 2019-05-23_

### What's Fixed

* Reconnecting to Sync properly works now.
* The doorhanger is properly closed when visiting a website.
* The doorhanger allows for varying widths.

### Known Issues

* This extension may conflict with Master Password.  If you wish to use this extension, we recommend disabling Master Password, then disable/re-enable this extension before it will work correctly.
* If "Ask to always save logins and passwords for websites" is enabled after the extension is loaded, you may be prompted by Firefox to save a login when adding or editing in the management interface.  As a workaround, you can disable then re-enable the extension to prevent this prompt.

## 2.2.1-alpha

_Date: 2019-05-20_

### What's Fixed

* Telemetry is now properly recorded whenever you open a website via Lockwise.
* Telemetry is properly recorded now whenever you select to view an item's details.
* Telemetry is properly recorded when interacting with the toolbar popup.
* The password field is concealed whenever you select another item's details.
* The website address now strips paths when saving, making it more compatible with Firefox's autofill/autocomplete support.
* The default (en-US) localization is updated to better support localizers.

### Known Issues

* This extension may conflict with Master Password.  If you wish to use this extension, we recommend disabling Master Password, then disable/re-enable this extension before it will work correctly.
* If "Ask to always save logins and passwords for websites" is enabled after the extension is loaded, you may be prompted by Firefox to save a login when adding or editing in the management interface.  As a workaround, you can disable then re-enable the extension to prevent this prompt.

## 2.2.0-alpha

_Date: 2019-05-10_

_**Firefox** Lockbox_ is now _**Firefox** Lockwise_! With the new name also comes a new look!

### What's New

* Updates the branding (name, logo, and icons) to Lockwise.
* Updates the look to focus on managing your logins.
* Added guidance for Lockwise connecting to other devices.
* Added support for auto-update

### What's Fixed

* Changed the "Website Address" hints in "Create New Login" to be less proscriptive about the URL.
* Fixed cases where "This is a duplicate entry" error bubble was not properly dismissed.
* Fixed the sort by to properly remember its state across page loads.
* Fixed the management page to select the first login in the list when opened.
* Fixed the layout of the management interface to better handle narrow widths.
* Fixed "last updated" to change when you copy the password.

## Known Issues

* If "Ask to always save logins and passwords for websites" is enabled after the extension is loaded, you may be prompted by Firefox to save a login when adding or editing in the management interface.  As a workaround, you can disable then re-enable the extension to prevent this prompt.

## 2.1.0-alpha

_Date: 2019-04-19_

Building from the original experiment, this release gives you access to  -- and control over -- your logins already saved in Firefox.

### What's New

* Uses the same data storage backend as Firefox!  View, create, change, and delete your logins here and have those changes take effect immediately in Firefox.
* Uses the same account backend as Firefox!  Your profile information shown here is always the same as the one you've signed into Firefox.
* Interested in better access on your Android or iOS device?  Click the "learn more" links throughout to get more information and instructions on how to get Lockbox for your phone or tablet.

## What's Fixed

* You are now alerted to validation errors; missing a password, missing a website address, or accidentally adding the same login a second time.

## Breaking Changes

This version no longer uses its own data store; any logins previously saved in Lockbox are lost.

### Known Issues

* Sometimes, the "This is a duplicate entry" error bubble is not properly dismissed.  However, changes are still saved.
* The profile menu action to "Connect another device" doesn't do anything yet.

## 2.0.0-alpha

_Date: 2019-03-23_

Got releases publishing from circleci builds
