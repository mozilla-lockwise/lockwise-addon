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
-fxaccount-brand-name =
    { $capitalization ->
       *[lowercase] account Firefox
        [uppercase] Account Firefox
    }

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Account
profile-menu-sign-in = Accedi a { -sync-brand-short-name }
profile-menu-faq = FAQ
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-username-input =
    .placeholder = nome@example.com
toolbar-open-faq = FAQ
account-summary-account = Account
item-details-edit = Modifica
item-details-delete = Elimina
item-details-cancel = Annulla

## Strings used in pop-up


## Strings used in dialog

banner-promote-device-app-store =
    .title = Scaricalo da App Store
banner-promote-device-play-store =
    .title = Scaricalo da Google Play
