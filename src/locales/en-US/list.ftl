# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## common

document =
  .title = Lockbox Entries

error-notification-sync = Unable to sync logins.
error-notification-sync-button = Reconnect
error-notification-duplicate =
  An entry for {$title} with that username already exists.
error-notification-duplicate-link = <a>Go to existing entry?</a>

all-items-get-started =
  When you save a password in Firefox, it will show up here.
all-items-get-started-title = No entries found.
all-items-get-started-footer = Not seeing your saved logins? <go>Find out why</go>

all-items-no-results =
  If this login is saved on another device, make sure you have signed in and synced on that device in order to see it here.
all-items-no-results-title = No matching entries.
all-items-no-results-footer = <go>Learn more</go>

item-fields-title-input =
  .placeholder = e.g. primary bank
item-fields-origin = Website Address
item-fields-origin-input =
  .placeholder = https://www.example.com
item-fields-origin-info-message = Make sure this matches the exact domain for the website you are referencing (“https://” and “www” included).
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

item-summary-new-title = New Entry
item-summary-title =
  { $length ->
     [0]     (no site name)
    *[other] { $title }
  }

item-summary-new-username = Enter your login credentials
item-summary-username =
  { $length ->
     [0]     (no username)
    *[other] { $username }
  }

item-summary-copy-username = Copy Username
  .title = Copy the username to the clipboard
item-summary-copy-password = Copy Password
  .title = Copy the password to the clipboard

item-filter =
  .placeholder = Search Lockbox
  .aria-label = Search Lockbox

## manage

add-item-button =
  .title = New entry

send-feedback-button = Provide Feedback

toolbar-go-home = Home
toolbar-open-faq = FAQ

breadcrumbs-item-new = New entry
breadcrumbs-item =
  { $length ->
     [0]     (no site name)
    *[other] { $title }
  }

account-summary-avatar =
  .alt = User Avatar
account-summary-account = Account
account-summary-options = Preferences
account-summary-signout = Sign Out

intro-page-header-title = { product-fulltitle } for Desktop
intro-page-header-subtitle =
  Welcome to better login management. Our desktop addon brings many of
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
  Click the Lockbox icon from the toolbar in Firefox to bring up our
  doorhanger to access your entries.
intro-page-main-article-3-title =
  Create new entries manually
intro-page-main-article-3-copy =
  With the addition of manual entries, you can now store any account
  you want within Lockbox.
intro-page-main-article-4-title =
  Get notified when new breaches occur
intro-page-main-article-4-copy =
  Keep your logins safe with our new breach notifications. Learn what
  was impacted and how to secure your login.

intro-page-footer-heading =
  Not seeing your saved logins? Let us help.
intro-page-footer-copy =
  Firefox Lockbox provides access to the logins you’ve saved to
  Firefox on your device. If your logins are stored on another device,
  you can sync your information to this device by signing in to or
  creating a Firefox Account. <go>Learn More</go>


homepage-title = { product-tagline }

homepage-linkaccount-title = Add Serious Security & Convenience
homepage-linkaccount-description =
    Now create a Firefox account – or add { product-title } to an existing
    account – to protect your logins with the strongest encryption
    available and sync your { product-title } info across devices.

homepage-linkaccount-action-create = Create Account
homepage-linkaccount-action-signin = { product-action-signin }

homepage-accountlinked-title = Your logins are locked down tight!
homepage-accountlinked-description =
    { product-title } uses the strongest encryption available to
    protect your logins – even for banking and other critical sites.

item-details-heading-new = Create New Entry
item-details-heading-edit = Edit Entry Details

item-details-edit = Edit
item-details-delete = Delete

item-details-save-new = Create Entry
item-details-save-existing = Save Changes
item-details-cancel = Cancel

item-details-created = Created: {$date}
item-details-modified = Last Modified: {$date}
item-details-last-used = Last Used: {$date}

list-count = {$count} entries

list-count = { $count ->
  [one]   {$count} entry
 *[other] { $count } entries
}

sort-by = Sort by:
sort-by-name = Name
sort-by-last-used = Last Used
sort-by-last-changed = Last Changed


## popup

manage-lockbox-button = Open Lockbox

list-detail-button = Open Website

default-banner = Recently used entries.

# count is the number of items matching the filter
filtered-banner = {$count} entries found

filtered-banner = { $count ->
  [one]   {$count} entry found
 *[other] { $count } entries found
}

get-started-banner = No entries found.

no-matching-banner = No matching entries.

no-results-banner = No entries found for current website.

item-details-panel-title = Login Details

navigate-panel-backwards = Go back

## dialogs

modal-cancel-editing = Unsaved changes exist. Discard them?
  .confirmLabel = Discard Changes
  .cancelLabel = Go Back

modal-delete = Delete this Entry?
  .confirmLabel = Delete
  .cancelLabel = Cancel

connect-another-device = Connect another device
easily-access-logins = Easily gain access to your logins from any device.
access-on-another-computer = Access on another computer
# TODO should Firefox Account or Firefox Lockbox be localized in the following strings?
simply-sign-in-other-device = Simply sign in to your Firefox Account on your other device to sync your logins to that computer.
download-mobile = Download the mobile app
download-ios-android = Firefox Lockbox is available on both iOS and Android. <learnmore>Click here</learnmore> to learn more and to send a link to your phone to download the app.
before-access = Before you can access your logins on another device, you will need to connect a Firefox Account.
connect-a-firefox-account = Connect a Firefox Account
connect-a-firefox-account-complete = Connect a Firefox Account (complete)
sync-requires-account = To sync your logins to another device, you will need to <signin>sign in or create a Firefox Account</signin>.
# TODO this string seems funny. should Sync be capitalized? should Logins be in quotes? is Sync localized?
ensure-logins-checked = Ensure the “Logins” checkbox is selected in sync preferences
# TODO should Sync be capitalized? is Sync localized?
setting-to-allow-sync = In order to allow your logins to be synced to other devices, this setting must be checked. <openprefs>Open sync preferences</openprefs></p>

banner-promote-device =
  .title = { product-fulltitle }
  .details = Download our mobile app to take your passwords with you everywhere.
  .actionLabel = Learn More

banner-promote-fxa =
  .title = Take your passwords everywhere.
  .details = Create a Firefox Account or Sign In to sync to Lockbox on mobile.
  .actionLabel = Sign In
