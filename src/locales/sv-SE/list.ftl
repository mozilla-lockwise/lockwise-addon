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
error-notification-sync = Misslyckades synkronisera inloggningar.
error-notification-sync-button = Återanslut
error-notification-duplicate = En inloggning för { $title } med det användarnamnet finns redan.
error-notification-duplicate-link = <a>Gå till befintlig inloggning?</a>
all-items-get-started = När du sparar ett lösenord i { -firefox-brand-name } kommer det att visas här.
all-items-get-started-title = Inga inloggningar hittades
all-items-get-started-footer = Ser du inte dina sparade inloggningar? <go>Ta reda på varför</go>
all-items-no-results = Om den här inloggningen är sparad på en annan enhet, se till att du har loggat in och synkroniserat på den här enheten för att kunna se den här.
all-items-no-results-title = Inga matchande inloggningar.
all-items-no-results-footer = <go>Läs mer</go>
item-fields-title-input =
    .placeholder = t.ex. primär bank
item-fields-origin = Webbadress
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Se till att detta matchar den exakta domänen för den webbplats du refererar till ("https: //" ingår).
item-fields-origin-button = Starta
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
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Sök Inloggningar
    .aria-label = Sök Inloggningar
add-item-button = Ny inloggning
send-feedback-button = Ge Feedback
toolbar-go-home = Hem
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Användar avatar
account-summary-account = Konto
account-summary-options = Inställningar
account-summary-signout = Logga ut
intro-page-header-title = { -fxlockwise-brand-name } för Dator
intro-page-header-subtitle =
    Välkommen till bättre inloggningshantering. Vårt skrivbordstillägg ger många av
    de förbättringar som du kan se i våra mobilappar till din dator med
    större kontroll över dina inloggningar.
intro-page-main-article-1-title = Enkel hantering av dina konton
intro-page-main-article-1-copy =
    Att hantera dina konton ska inte vara raketforskning. Vi har gjort saker
    enkelt med vårt nya skrivbordsgränssnitt.
intro-page-main-article-2-title = Snabb åtkomst till dina inloggningar
intro-page-main-article-2-copy = Klicka på ikonen { -fxlockwise-brand-short-name } från verktygsfältet i { -firefox-brand-name } för att få fram våran pop out meny för att komma åt dina inloggningar.
intro-page-main-article-3-title = Skapa nya inloggningar manuellt
intro-page-main-article-3-copy =
    Med tillägg av manuella inloggningar kan du nu spara vilket konto
    som helst i { -fxlockwise-brand-short-name }
intro-page-footer-heading = Ser du inte dina sparade inloggningar? Låt oss hjälpa till.
intro-page-footer-copy =
    { -fxlockwise-brand-name } ger åtkomst till inloggningarna du har sparat i
    { -firefox-brand-name } på din enhet. Om dina inloggningar är lagrade på en annan enhet,
    Du kan synkronisera din information till den här enheten genom att logga in på eller
    skapa ett { -fxaccount-brand-name }. <go>Läs mer</go>
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

modal-cancel-editing = Osparade ändringar existerar. Kasta dem?
    .confirmLabel = Kasta Ändringar
    .cancelLabel = Gå Tillbaka
modal-delete = Ta bort denna inloggning?
    .confirmLabel = Ta bort
    .cancelLabel = Avbryt
connect-another-device = Anslut en annan enhet
easily-access-logins = Få enkel tillgång till dina inloggningar från vilken enhet som helst.
access-on-another-computer = Åtkomst på en annan dator
simply-sign-in-other-device = Logga bara in på ditt { -fxaccount-brand-name } på din andra enhet för att synkronisera dina inloggningar till den här datorn.
download-mobile = Ladda ner mobilappen
download-ios-android = { -fxlockwise-brand-name } är tillgängligt på både iOS och Android. <learnmore>Klicka här</ learnmore> för att läsa mer och skicka en länk till din mobil för att ladda ner appen.
before-access = Före du kan komma åt dina inloggningar på en annan enhet måste du ansluta ett { -fxaccount-brand-name }.
connect-a-firefox-account = Anslut ett { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (slutför)
sync-requires-account = För att synkronisera dina inloggningar till en annan enhet måste du <signin> logga in eller skapa ett { -fxaccount-brand-name } </signin>.
ensure-logins-checked = Försäkra dig om att "Inloggningar"-rutan är vald i { -sync-brand-short-name } inställningarna
setting-to-allow-sync = För att kunna tillåta dina inloggningar att bli synkroniserade till andra enheter måste denna inställning vara ikryssad. <go>Öppna { -sync-brand-short-name } inställningar</go>
banner-promote-device = <bold> Ta med dina lösenord överallt</bold> - ladda ner vår app för iOS eller Android:
banner-promote-device-app-store =
    .title = Hämta från App Store
banner-promote-device-play-store =
    .title = Hämta från Google Play
banner-promote-fxa = <bold> Ta med dina lösenord överallt</bold> - Skapa ett { -fxaccount-brand-name } eller Logga in för att synkronisera till { -fxlockwise-brand-short-name } på mobilen:
banner-promote-fxa-action-label = Logga in
