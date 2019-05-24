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
-fxaccount-brand-name = Firefox konto

## All the following messages are localizable.

-sync-brand-short-name = Synkronisera
header-logins-button = Inloggningar
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Konto
profile-menu-sign-in = Logga in till { -sync-brand-short-name }
profile-menu-connect = Anslut en enhet
profile-menu-faq = FAQ
profile-menu-feedback = Ge återkoppling
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync-button = Återanslut
error-notification-duplicate = En inloggning för { $title } med det användarnamnet finns redan.
error-notification-duplicate-link = <a>Gå till befintlig inloggning?</a>
all-items-get-started = När du sparar ett lösenord i { -firefox-brand-name } kommer det att visas här.
all-items-get-started-title = Inga inloggningar hittades
all-items-no-results-title = Inga matchande inloggningar.
all-items-no-results-footer = <go>Läs mer</go>
item-fields-origin = Webbadress
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-username = Användarnamn
item-fields-username-input =
    .placeholder = namn@exempel.com
item-fields-copy-username =
    .title = Kopiera användarnamnet till urklipp
item-fields-password = Lösenord
item-fields-copy-password =
    .title = Kopiera lösenordet till urklipp
item-fields-notes = Anteckningar
item-summary-new-title = Ny inloggning
item-summary-no-title = (ingen titel)
item-summary-new-username = Ange dina inloggningsuppgifter
item-summary-no-username = (Inget användarnamn)
item-summary-copy-username = Kopiera användarnamn
    .title = Kopiera användarnamnet till urklipp
item-summary-copy-password = Kopiera lösenord
    .title = Kopiera lösenordet till urklipp
add-item-button = Ny inloggning
send-feedback-button = Ge återkoppling
toolbar-go-home = Hem
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Användar avatar
account-summary-account = Konto
account-summary-options = Inställningar
account-summary-signout = Logga ut
intro-page-main-article-1-title = Enkel hantering av dina konton
intro-page-main-article-2-title = Snabb åtkomst till dina inloggningar
intro-page-main-article-3-title = Skapa nya inloggningar manuellt
intro-page-footer-heading = Ser du inte dina sparade inloggningar? Låt oss hjälpa till.
item-details-heading-new = Skapa ny inloggning
item-details-heading-edit = Redigera inloggningsuppgifter
item-details-edit = Redigera
item-details-delete = Ta bort
item-details-save-new = Skapa inloggning
item-details-save-existing = Spara ändringar
item-details-cancel = Avbryt
item-details-created = Skapad: { $date }
item-details-modified = Senast ändrad: { $date }
item-details-last-used = Senast använd: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } inloggning
       *[other] { $count } inloggningar
    }
sort-by = Sortera efter:
sort-by-name = Namn
sort-by-last-used = Senast använd
sort-by-last-changed = Senast ändrad

## Strings used in pop-up

manage-logins-button = Öppna { -fxlockwise-brand-short-name }
list-detail-button = Öppna webbplats
default-banner = Nyligen använda inloggningar.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } inloggning hittades
       *[other] { $count } inloggningar hittades
    }
get-started-banner = Inga inloggningar hittades
no-matching-banner = Inga matchande inloggningar hittades.
no-results-banner = Inga inloggningar hittades för aktuell webbplats.
item-details-panel-title = inloggningsdetaljer
navigate-panel-backwards = Gå tillbaka

## Strings used in dialog

modal-delete = Ta bort denna inloggning?
    .confirmLabel = Ta bort
    .cancelLabel = Avbryt
connect-another-device = Anslut en annan enhet
access-on-another-computer = Åtkomst på en annan dator
download-mobile = Ladda ner mobilappen
connect-a-firefox-account = Anslut ett { -fxaccount-brand-name }
banner-promote-device-app-store =
    .title = Hämta från App Store
banner-promote-device-play-store =
    .title = Hämta från Google Play
banner-promote-fxa-action-label = Logga in
