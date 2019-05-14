# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## Firefox / Lockwise Brand
##
## All the following terms must be treated as a brand, and kept in English.
## They cannot be:
## - Declined to adapt to grammatical case.
## - Transliterated.
## - Translated.

-firefox-brand-name = Firefox
-fxlockwise-brand-short-name = Lockwise
-fxlockwise-brand-name = Firefox Lockwise

# “Account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-fxaccount-brand-name = Firefox Account

## All the following messages are localizable.

-sync-brand-short-name = Sync

header-logins-button = Logins
header-app-title =
  .title = { -fxlockwise-brand-name }

profile-menu-account = Account
profile-menu-sign-in = Sign in to { -sync-brand-short-name }
profile-menu-connect = Connect a Device
profile-menu-faq = FAQ
profile-menu-feedback = Provide Feedback

document =
  .title = { -fxlockwise-brand-name }

error-notification-sync = Unable to sync logins.
error-notification-sync-button = Reconnect
error-notification-duplicate =
  A login for { $title } with that username already exists.
error-notification-duplicate-link = <a>Go to existing login?</a>

all-items-get-started =
  When you save a password in { -firefox-brand-name }, it will show up here.
all-items-get-started-title = No logins found.
all-items-get-started-footer = Not seeing your saved logins? <go>Find out why</go>

all-items-no-results =
  If this login is saved on another device, make sure you have signed in and synced on that device in order to see it here.
all-items-no-results-title = No matching logins.
all-items-no-results-footer = <go>Learn more</go>

item-fields-title-input =
  .placeholder = e.g. primary bank
item-fields-origin = Website Address
item-fields-origin-input =
  .placeholder = https://www.example.com
item-fields-origin-info-message = Make sure this matches the exact domain for the website you are referencing (“https://” included).
item-fields-origin-button = Launch
item-fields-username = Username
item-fields-username-input =
  .placeholder = name@example.com
item-fields-copy-username =
  .title = Copy the username to the clipboard
item-fields-password = Password
item-fields-copy-password =
  .title = Copy the password to the clipboard
item-fields-notes = Notes

item-summary-new-title = New Login
item-summary-no-title = (no title)

item-summary-new-username = Enter your login credentials
item-summary-no-username = (no username)

item-summary-copy-username = Copy Username
  .title = Copy the username to the clipboard
item-summary-copy-password = Copy Password
  .title = Copy the password to the clipboard

# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
  .placeholder = Search Logins
  .aria-label = Search Logins

add-item-button = New Login

send-feedback-button = Provide Feedback

toolbar-go-home = Home
toolbar-open-faq = FAQ

account-summary-avatar =
  .alt = User Avatar
account-summary-account = Account
account-summary-options = Preferences
account-summary-signout = Sign Out

intro-page-header-title = { -fxlockwise-brand-name } for Desktop
intro-page-header-subtitle =
  Welcome to better login management. Our desktop add-on brings many of
  the improvements seen in our mobile apps to your computer, with
  greater control of your logins.

intro-page-main-article-1-title =
  Easy management of your accounts
intro-page-main-article-1-copy =
  Managing your accounts shouldn’t be rocket science. We made things
  easy with our new desktop interface.
intro-page-main-article-2-title =
  Quick access to your logins
intro-page-main-article-2-copy =
  Click the { -fxlockwise-brand-short-name } icon from the toolbar in { -firefox-brand-name } to bring up our
  doorhanger to access your logins.
intro-page-main-article-3-title =
  Create new logins manually
intro-page-main-article-3-copy =
  With the addition of manual logins, you can now store any account
  you want within { -fxlockwise-brand-short-name }.

intro-page-footer-heading =
  Not seeing your saved logins? Let us help.
intro-page-footer-copy =
  { -fxlockwise-brand-name } provides access to the logins you’ve saved to
  { -firefox-brand-name } on your device. If your logins are stored on another device,
  you can sync your information to this device by signing in to or
  creating a { -fxaccount-brand-name }. <go>Learn More</go>

item-details-heading-new = Create New Login
item-details-heading-edit = Edit Login Details

item-details-edit = Edit
item-details-delete = Delete

item-details-save-new = Create Login
item-details-save-existing = Save Changes
item-details-cancel = Cancel

item-details-created = Created: { $date }
item-details-modified = Last Modified: { $date }
item-details-last-used = Last Used: { $date }

# Variables:
#   - $count (number): number of items in the list
list-count = { $count ->
  [one] { $count } login
 *[other] { $count } logins
}

sort-by = Sort by:
sort-by-name = Name
sort-by-last-used = Last Used
sort-by-last-changed = Last Changed


## Strings used in pop-up

manage-logins-button = Open { -fxlockwise-brand-short-name }

list-detail-button = Open Website

default-banner = Recently used logins.

# Variables:
#   - $count (number): number of items in the list
filtered-banner = { $count ->
  [one] { $count } login found
 *[other] { $count } logins found
}

get-started-banner = No logins found.

no-matching-banner = No matching logins.

no-results-banner = No logins found for current website.

item-details-panel-title = Login Details

navigate-panel-backwards = Go back

## Strings used in dialog

modal-cancel-editing = Unsaved changes exist. Discard them?
  .confirmLabel = Discard Changes
  .cancelLabel = Go Back

modal-delete = Delete this login?
  .confirmLabel = Delete
  .cancelLabel = Cancel

connect-another-device = Connect another device
easily-access-logins = Easily gain access to your logins from any device.
access-on-another-computer = Access on another computer
simply-sign-in-other-device = Simply sign in to your { -fxaccount-brand-name } on your other device to sync your logins to that computer.
download-mobile = Download the mobile app
download-ios-android = { -fxlockwise-brand-name } is available on both iOS and Android. <learnmore>Click here</learnmore> to learn more and to send a link to your phone to download the app.
before-access = Before you can access your logins on another device, you will need to connect a { -fxaccount-brand-name }.
connect-a-firefox-account = Connect a { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (complete)
sync-requires-account = To sync your logins to another device, you will need to <signin>sign in or create a { -fxlockwise-brand-name }</signin>.
ensure-logins-checked = Ensure the “Logins” checkbox is selected in { -sync-brand-short-name } preferences
setting-to-allow-sync = In order to allow your logins to be synced to other devices, this setting must be checked. <go>Open { -sync-brand-short-name } preferences</go>

banner-promote-device = <bold>Take your passwords everywhere</bold> - download our app for iOS or Android:

banner-promote-device-app-store =
  .title = Download on the App Store
banner-promote-device-play-store =
  .title = Get it on Google Play

banner-promote-fxa = <bold>Take your passwords everywhere</bold> - create a { -fxaccount-brand-name } or Sign In to sync to { -fxlockwise-brand-short-name } on mobile:

banner-promote-fxa-action-label = Sign In
