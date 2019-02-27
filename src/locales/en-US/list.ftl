# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## common

document =
  .title = Lockbox Entries

all-items-get-started =
  When you add an entry, it automatically shows up here.

all-items-no-results = No results

item-fields-title-input =
  .placeholder = e.g. primary bank
item-fields-origin = Website Address
item-fields-origin-input =
  .placeholder = www.example.com
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

intro-page-step-1 =
  Save username and password info to create a { product-title } entry.

  .title = Add login info to { product-title }

intro-page-step-2 =
  Click the { product-title } icon to see all the entries you've saved.

  .title = Go straight to your logins

intro-page-step-3 =
  Copy an entry's info to sign in right from Firefox.

  .title = Sign in from { product-title }

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
item-details-save-existing = Save
item-details-cancel = Cancel


item-details-created = Created: {$date}
item-details-created = Last Modified: {$date}
item-details-created = Last Used: {$date}

## popup

manage-lockbox-button = Open Lockbox

list-detail-button = Open Website

default-banner = Recently used entries. Select to launch.

# count is the number of items matching the filter
filtered-banner = {$count} entries found

filtered-banner = { $count ->
  [one]   {$count} entry found
 *[other] { $count } entries found
}

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
