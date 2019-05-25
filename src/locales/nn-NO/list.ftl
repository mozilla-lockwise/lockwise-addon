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
-fxaccount-brand-name = Firefox-konto

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Innloggingar
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Konto
profile-menu-sign-in = Logga in på { -sync-brand-short-name }
profile-menu-connect = Kople til ei eining
profile-menu-faq = Vanlege spørsmål (FAQ)
profile-menu-feedback = Gje tilbakemelding
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Klarte ikkje å synkronisere innloggingar.
error-notification-sync-button = Kople til på nytt
error-notification-duplicate = Ei innlogging for { $title } med dette brukarnamnet finst allereie..
error-notification-duplicate-link = <a>Gå til eksisterande innlogging?</a>
all-items-get-started = Når du lagrar eit passord i { -firefox-brand-name }, vil det visast her.
all-items-get-started-title = Fann ingen innloggingar.
all-items-get-started-footer = Ser du ikkje dei lagra innloggingane dine? <go>Finn ut kviforr</go>
all-items-no-results = Om denne innlogginga er lagra på ei anna eining, forviss deg om at du har logga inn og synkronisert på den eininga for å sjå den her.
all-items-no-results-title = Ingen matchande innloggingar.
all-items-no-results-footer = <go>Les meir</go>
item-fields-title-input =
    .placeholder = t.d. primærbank
item-fields-origin = Nettadresse
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Pass på at dette passar nøyaktig med domenet for nettstaden du refererer til (“https://” included).
item-fields-origin-button = Start
item-fields-username = Brukarnamn
item-fields-username-input =
    .placeholder = namn@eksempel.com
item-fields-copy-username =
    .title = Kopier brukarnamnet til utklippstavla
item-fields-password = Passord
item-fields-copy-password =
    .title = Kopier passordet til utklippstavla
item-fields-notes = Merknadar
item-summary-new-title = Ny innlogging
item-summary-no-title = (ingen tittel)
item-summary-new-username = Skriv inn innloggingsopplysningar
item-summary-no-username = (ingen brukarnamn)
item-summary-copy-username = Kopier brukarnamn
    .title = Kopier brukarnamn til utklippstavla
item-summary-copy-password = Kopier passord
    .title = Kopier passord til utklippstavla
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Søk i innloggingar
    .aria-label = Søk i innloggingar
add-item-button = Ny innlogging
send-feedback-button = Gje ei tilbakemelding
toolbar-go-home = Heim
toolbar-open-faq = Vanlege spørsmål (FAQ)
account-summary-avatar =
    .alt = Brukar-avatar
account-summary-account = Konto
account-summary-options = Innstillingar
account-summary-signout = Logg ut
intro-page-header-title = { -fxlockwise-brand-name } for datamaskiner
intro-page-main-article-1-title = Enkel handtering av kontoane dine
intro-page-main-article-1-copy =
    Å handtere kontoane dine skal ikkje vere rakettforsking. Vi har gjort ting
    enkelt med det nye skriverbordgrensesnittet vårt.
intro-page-main-article-2-title = Rask tilgang til innloggingane dine
intro-page-main-article-3-title = Lag nye innloggingar manuelt
intro-page-footer-heading = Ser du ikkje dei lagra innloggingane dine? Lat oss hjelpe deg.
item-details-heading-new = Lag ny innlogging
item-details-heading-edit = Rediger innloggingsopplysningar
item-details-edit = Rediger
item-details-delete = Slett
item-details-save-new = Opprett innlogging
item-details-save-existing = Lagre endringar
item-details-cancel = Avbryt
item-details-created = Oppretta: { $date }
item-details-modified = Sist endra: { $date }
item-details-last-used = Sist brukt: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } innlogging
       *[other] { $count } innloggingar
    }
sort-by = SOrter etter:
sort-by-name = Namn
sort-by-last-used = Sist brukt
sort-by-last-changed = Sist endra

## Strings used in pop-up

manage-logins-button = Opne { -fxlockwise-brand-short-name }
list-detail-button = Opne nettstad
default-banner = Nyleg brukte innloggingar.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] Fann { $count } innnlogging
       *[other] Fann { $count } innloggingar
    }
get-started-banner = Fann ingen innloggingar.
no-matching-banner = Ingen matchande innloggingar.
no-results-banner = Fann ingen innloggingar for gjeldande nettstad.
item-details-panel-title = Innloggingsopplysningar
navigate-panel-backwards = Gå tilbake

## Strings used in dialog

modal-delete = Slette denne innlogginga?
    .confirmLabel = Slett
    .cancelLabel = Avbryt
connect-another-device = Kople til ei anna eining
access-on-another-computer = Tilgang på ei anna datamaskin
download-mobile = Last ned mobilappen
download-ios-android = { -fxlockwise-brand-name } er tilgjengeleg på både iOS og Android. <learnmore>Klikk her</ learnmore> for å lese meir og sende ei lenke til mobilen din for å laste ned appen.
connect-a-firefox-account = Kople til ein { -fxaccount-brand-name }
banner-promote-device-app-store =
    .title = Last ned frå App Store
banner-promote-device-play-store =
    .title = Last ned frå Google Play
banner-promote-fxa-action-label = Logg inn
