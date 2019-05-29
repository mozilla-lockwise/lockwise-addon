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
header-logins-button = Aanmeldingen
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Account
profile-menu-sign-in = Aanmelden bij { -sync-brand-short-name }
profile-menu-connect = Verbind een apparaat
profile-menu-faq = FAQ
profile-menu-feedback = Feedback geven
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Kan aanmeldingen niet synchroniseren.
error-notification-sync-button = Opnieuw verbinden
error-notification-duplicate = Er bestaat al een aanmelding voor { $title } met die gebruikersnaam.
error-notification-duplicate-link = <a>Naar bestaande aanmelding gaan?</a>
all-items-get-started = Wanneer u een wachtwoord opslaat in { -firefox-brand-name }, wordt dit hier weergegeven.
all-items-get-started-title = Geen aanmeldingen gevonden.
all-items-get-started-footer = Worden uw opgeslagen aanmeldgegevens niet getoond? <go>Ontdek waarom</go>
all-items-no-results = Als deze aanmelding op een ander apparaat wordt opgeslagen, moet u zich op dat apparaat aanmelden en synchroniseren om het hier te zien.
all-items-no-results-title = Geen overeenkomende aanmeldingen.
all-items-no-results-footer = <go>Meer informatie</go>
item-fields-title-input =
    .placeholder = bijv. primaire bank
item-fields-origin = Websiteadres
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Zorg ervoor dat dit overeenkomt met het exacte domein voor de website waarnaar u verwijst (‘https: //’ inbegrepen).
item-fields-origin-button = Starten
item-fields-username = Gebruikersnaam
item-fields-username-input =
    .placeholder = naam@example.com
item-fields-copy-username =
    .title = Kopieer de gebruikersnaam naar het klembord
item-fields-password = Wachtwoord
item-fields-copy-password =
    .title = Kopieer het wachtwoord naar het klembord
item-fields-notes = Opmerkingen
item-summary-new-title = Nieuwe aanmelding
item-summary-no-title = (geen titel)
item-summary-new-username = Voer uw aameldgegevens in
item-summary-no-username = (geen gebruikersnaam)
item-summary-copy-username = Gebruikersnaam kopiëren
    .title = Gebruikersnaam kopiëren naar klembord
item-summary-copy-password = Wachtwoord kopiëren
    .title = Wachtwoord kopiëren naar klembord
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Aanmeldingen zoeken
    .aria-label = Aanmeldingen zoeken
add-item-button = Nieuwe aanmelding
send-feedback-button = Feedback geven
toolbar-go-home = Start
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Gebruikersavatar
account-summary-account = Account
account-summary-options = Voorkeuren
account-summary-signout = Afmelden
intro-page-header-title = { -fxlockwise-brand-name } voor Desktop
intro-page-header-subtitle =
    Welkom bij beter aanmeldbeheer. Onze desktop-add-on brengt veel van
    de verbeteringen zoals in onze mobiele apps naar uw computer, met
    meer controle over uw aanmeldingen.
intro-page-main-article-1-title = Eenvoudig beheer van uw accounts
intro-page-main-article-1-copy =
    Het beheren van uw accounts moet geen "rocket science" zijn. We hebben
    dingen eenvoudig gemaakt met onze nieuwe desktopinterface.
intro-page-main-article-2-title = Snelle toegang tot uw aanmeldingen
intro-page-main-article-2-copy =
    Klik in de werkbalk van { -firefox-brand-name } op het { -fxlockwise-brand-short-name }-pictogram om via
    het uitklapmenu toegang te krijgen tot uw aanmeldingen.
intro-page-main-article-3-title = Nieuwe aanmeldingen handmatig aanmaken
intro-page-main-article-3-copy =
    Met de toevoeging van handmatige aanmeldingen, kunt u nu binnen
    { -fxlockwise-brand-short-name } elk account dat u wilt opslaan.
intro-page-footer-heading = Worden uw opgeslagen aanmeldingen niet getoond? Laat ons helpen.
intro-page-footer-copy =
    { -fxlockwise-brand-name } geeft toegang tot de aanmeldingen die u hebt opgeslagen in
    { -firefox-brand-name } op uw apparaat. Als uw aanmeldingen zijn opgeslagen op een ander apparaat,
    kunt u uw informatie synchroniseren met dit apparaat door u aan te melden of door
    een { -fxaccount-brand-name } aan te maken. <go>Meer info</go>
item-details-heading-new = Nieuwe aanmelding maken
item-details-heading-edit = Aanmeldgegevens bewerken
item-details-edit = Bewerken
item-details-delete = Verwijderen
item-details-save-new = Aanmelding aanmaken
item-details-save-existing = Wijzigingen opslaan
item-details-cancel = Annuleren
item-details-created = Gemaakt: { $date }
item-details-modified = Laatst gewijzigd: { $date }
item-details-last-used = Laatst gebruikt: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } aanmelding
       *[other] { $count } aanmeldingen
    }
sort-by = Sorteren op:
sort-by-name = Naam
sort-by-last-used = Laatst gebruikt
sort-by-last-changed = Laatst gewijzigd

## Strings used in pop-up

manage-logins-button = { -fxlockwise-brand-short-name } openen
list-detail-button = Website openen
default-banner = Recent gebruikte aanmeldingen.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } aanmelding gevonden
       *[other] { $count } aanmeldingen gevonden
    }
get-started-banner = Geen aanmeldingen gevonden.
no-matching-banner = Geen overeenkomende aanmeldingen.
no-results-banner = Geen aanmeldgegevens gevonden voor huidige website.
item-details-panel-title = Aanmelddetails
navigate-panel-backwards = Terug

## Strings used in dialog

modal-cancel-editing = Er zijn niet-opgeslagen wijzigingen. Wijzigingen verwerpen?
    .confirmLabel = Wijzigingen verwerpen
    .cancelLabel = Terug
modal-delete = Deze aanmelding verwijderen?
    .confirmLabel = Verwijderen
    .cancelLabel = Annuleren
connect-another-device-dialog =
    .closeLabel = Sluiten
    .allSetLabel = Alles ingesteld
connect-another-device = Nog een apparaat koppelen
easily-access-logins = Krijg vanaf elk apparaat gemakkelijk toegang tot uw aanmeldingen.
access-on-another-computer = Toegang op een andere computer
simply-sign-in-other-device = Meld u gewoon aan op { -fxaccount-brand-name } op uw andere apparaat om uw aanmeldingen met die computer te synchroniseren.
download-mobile = Download de app voor mobiel
download-ios-android = { -fxlockwise-brand-name } is beschikbaar op zowel iOS als Android. <learnmore>Klik hier</learnmore> voor meer informatie en om een koppeling naar uw telefoon te verzenden om de app te downloaden.
before-access = Voordat u uw aanmeldgegevens op een ander apparaat kunt openen, moet u een { -fxaccount-brand-name } koppelen.
connect-a-firefox-account = Een { -fxaccount-brand-name } koppelen
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (voltooid)
sync-requires-account = Om uw aanmeldingen met een ander apparaat te synchroniseren, moet u zich aanmelden <signin>of een { -fxaccount-brand-name }</signin> maken.
ensure-logins-checked = Zorg ervoor dat het selectievakje ‘Aanmeldingen’ in { -sync-brand-short-name }-voorkeuren is geselecteerd
setting-to-allow-sync = Om uw aanmeldingen te kunnen synchroniseren met andere apparaten, moet deze instelling worden gecontroleerd. <go>Open { -sync-brand-short-name }-voorkeuren</ go>
banner-promote-device = <bold>Neem uw wachtwoorden overal mee naartoe</bold> – download onze app voor iOS of Android:
banner-promote-device-app-store =
    .title = Downloaden in de App Store
banner-promote-device-play-store =
    .title = Downloaden op Google Play
banner-promote-fxa = <bold>Neem uw wachtwoorden overal mee naartoe</bold> – maak een { -fxaccount-brand-name } of meld u aan om te synchroniseren met { -fxlockwise-brand-short-name } op uw mobiel:
banner-promote-fxa-action-label = Aanmelden
