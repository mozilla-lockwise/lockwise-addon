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
-fxaccount-brand-name = Firefox Račun

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Prijave
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Račun
profile-menu-sign-in = Prijava v { -sync-brand-short-name }
profile-menu-connect = Poveži napravo
profile-menu-faq = Pogosta vprašanja
profile-menu-feedback = Povratne informacije
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync-button = Ponovno poveži
all-items-get-started-title = Ni prijav.
all-items-no-results-footer = <go>Več o tem</go>
item-fields-origin = Naslov spletnega mesta
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-button = Zaženi
item-fields-username = Uporabniško ime
item-fields-username-input =
    .placeholder = ime@example.com
item-fields-copy-username =
    .title = Kopiraj uporabniško ime na odložišče
item-fields-password = Geslo
item-fields-copy-password =
    .title = Kopiraj geslo na odložišče
item-fields-notes = Zapiski
item-summary-new-title = Nova prijava
item-summary-no-title = (brez naslova)
item-summary-new-username = Vnesite podatke za prijavo
item-summary-no-username = (brez uporabniškega imena)
item-summary-copy-username = Kopiraj uporabniško ime
    .title = Kopiraj uporabniško ime v odložišče
item-summary-copy-password = Kopiraj geslo
    .title = Kopiraj geslo v odložišče
add-item-button = Nova prijava
send-feedback-button = Povratne informacije
toolbar-go-home = Domov
toolbar-open-faq = Pogosta vprašanja
account-summary-avatar =
    .alt = Uporabniška slika
account-summary-account = Račun
account-summary-options = Nastavitve
account-summary-signout = Odjava
intro-page-header-title = { -fxlockwise-brand-name } za namizja
intro-page-main-article-1-title = Enostavno upravljanje računov
intro-page-main-article-2-title = Hiter dostop do vaših prijav
intro-page-main-article-3-title = Ročno ustvari nove prijave
intro-page-footer-heading = Ne vidite svojih shranjenih prijav? Naj vam pomagamo.
item-details-heading-new = Ustvari novo prijavo
item-details-heading-edit = Uredi podatke za prijavo
item-details-edit = Uredi
item-details-delete = Izbriši
item-details-save-new = Ustvari prijavo
item-details-save-existing = Shrani spremembe
item-details-cancel = Prekliči
item-details-created = Ustvarjeno: { $date }
item-details-modified = Zadnja sprememba: { $date }
item-details-last-used = Nazadnje uporabljeno: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } prijava
        [two] { $count } prijavi
        [few] { $count } prijave
       *[other] { $count } prijav
    }
sort-by = Razvrsti po:
sort-by-name = Ime
sort-by-last-used = Nazadnje uporabljeno

## Strings used in pop-up

manage-logins-button = Odpri { -fxlockwise-brand-short-name }
item-details-panel-title = Podrobnosti prijave
navigate-panel-backwards = Nazaj

## Strings used in dialog

modal-delete = Izbrišem to prijavo?
    .confirmLabel = Izbriši
    .cancelLabel = Prekliči
connect-another-device = Poveži drugo napravo
download-mobile = Prenesite mobilno aplikacijo
connect-a-firefox-account = Povežite { -fxaccount-brand-name }
banner-promote-fxa-action-label = Prijava
