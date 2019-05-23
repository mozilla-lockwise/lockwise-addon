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
header-logins-button = Credenziali
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Account
profile-menu-sign-in = Accedi a { -sync-brand-short-name }
profile-menu-connect = Connetti un dispositivo
profile-menu-faq = FAQ
profile-menu-feedback = Comunicaci la tua opinione
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Impossibile sincronizzare le credenziali.
error-notification-sync-button = Riconnetti
error-notification-duplicate = Esiste già una credenziale per { $title } con questo nome utente.
error-notification-duplicate-link = <a>Passare alla credenziale esistente?</a>
all-items-get-started = Le password salvate in { -firefox-brand-name } verranno visualizzate qui.
all-items-get-started-title = Nessuna credenziale trovata.
all-items-get-started-footer = Non vedi le credenziali salvate? <go>Scopri il motivo</go>
all-items-no-results = Se queste credenziali sono state salvate su un altro dispositivo, per visualizzarle in questa sezione assicurati di aver effettuato l’accesso e completato la sincronizzazione.
all-items-no-results-title = Nessuna corrispondenza nelle credenziali.
all-items-no-results-footer = <go>Ulteriori informazioni</go>
item-fields-title-input =
    .placeholder = ad es. banca principale
item-fields-origin = Indirizzo web
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Assicurati che corrisponda esattamente al dominio del sito web a cui fa riferimento (incluso “https://”).
item-fields-origin-button = Apri
item-fields-username = Nome utente
item-fields-username-input =
    .placeholder = nome@example.com
item-fields-copy-username =
    .title = Copia il nome utente negli appunti
item-fields-password = Password
item-fields-copy-password =
    .title = Copia la password negli appunti
item-fields-notes = Note
item-summary-new-title = Nuova credenziale
item-summary-no-title = [nessun titolo]
item-summary-new-username = Inserisci le credenziali di accesso
item-summary-no-username = [nessun nome utente]
item-summary-copy-username = Copia nome utente
    .title = Copia il nome utente negli appunti
item-summary-copy-password = Copia password
    .title = Copia la password negli appunti
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Cerca nelle credenziali
    .aria-label = Cerca nelle credenziali
add-item-button = Nuova credenziale
send-feedback-button = Comunicaci la tua opinione
toolbar-go-home = Pagina iniziale
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Immagine utente
account-summary-account = Account
account-summary-options = Preferenze
account-summary-signout = Disconnetti
intro-page-header-title = { -fxlockwise-brand-name } per desktop
intro-page-header-subtitle = Ti presentiamo un modo migliore per gestire le tue credenziali. Il nostro componente aggiuntivo per desktop include molte delle novità introdotte nelle app per dispositivi mobili, offrendoti maggior controllo sulle tue credenziali.
intro-page-main-article-1-title = Gestisci in modo semplice i tuoi account
intro-page-main-article-1-copy = Gestire i tuoi account non dovrebbe essere così complicato. Tutto diventa più semplice con la nuova interfaccia desktop.
intro-page-main-article-2-title = Accesso rapido alle tue credenziali
intro-page-main-article-2-copy = Fai clic sull’icona di { -fxlockwise-brand-short-name } nella barra degli strumenti di { -firefox-brand-name } per visualizzare il pannello e accedere alle tue credenziali.
intro-page-main-article-3-title = Inserisci nuove credenziali manualmente
intro-page-main-article-3-copy = Adesso puoi salvare qualsiasi account in { -fxlockwise-brand-short-name } inserendo le credenziali manualmente.
intro-page-footer-heading = Non trovi le credenziali che hai salvato? Ti possiamo aiutare.
intro-page-footer-copy = { -fxlockwise-brand-name } permette di accedere alle credenziali salvate in { -firefox-brand-name }. Se le credenziali sono salvate su un altro dispositivo, puoi sincronizzarle accedendo al tuo { -fxaccount-brand-name } o creandone uno. <go>Ulteriori informazioni</go>
item-details-heading-new = Inserisci nuova credenziale
item-details-heading-edit = Modifica dettagli credenziale
item-details-edit = Modifica
item-details-delete = Elimina
item-details-save-new = Inserisci credenziale
item-details-save-existing = Salva modifiche
item-details-cancel = Annulla
item-details-created = Data creazione: { $date }
item-details-modified = Ultima modifica: { $date }
item-details-last-used = Ultimo utilizzo: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } credenziale
       *[other] { $count } credenziali
    }
sort-by = Ordina per:
sort-by-name = Nome
sort-by-last-used = Ultimo utilizzo
sort-by-last-changed = Ultima modifica

## Strings used in pop-up

manage-logins-button = Apri { -fxlockwise-brand-short-name }
list-detail-button = Apri sito web
default-banner = Credenziali utilizzate di recente.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } credenziale trovata
       *[other] { $count } credenziali trovate
    }
get-started-banner = Nessuna credenziale trovata.
no-matching-banner = Nessuna corrispondenza nelle credenziali.
no-results-banner = Nessuna credenziale trovata per il sito web corrente.
item-details-panel-title = Dettagli credenziale
navigate-panel-backwards = Torna indietro

## Strings used in dialog

modal-cancel-editing = Sono presenti modifiche non salvate. Ignorarle?
    .confirmLabel = Ignora modifiche
    .cancelLabel = Torna indietro
modal-delete = Eliminare questa credenziale?
    .confirmLabel = Elimina
    .cancelLabel = Annulla
connect-another-device = Connetti un altro dispositivo
easily-access-logins = Accedi facilmente alle tue credenziali da qualsiasi dispositivo.
access-on-another-computer = Accedi da un altro computer
simply-sign-in-other-device = Accedi al tuo { -fxaccount-brand-name } su un altro dispositivo per sincronizzare le tue credenziali.
download-mobile = Scarica l’app mobile
download-ios-android = { -fxlockwise-brand-name } è disponibile su iOS e Android. <learnmore>Fai clic qui</learnmore> per ulteriori informazioni e inviare un link al tuo telefono per scaricare l’app.
before-access = Per accedere alle credenziali da un altro dispositivo è necessario connettere un { -fxaccount-brand-name }.
connect-a-firefox-account = Connetti un { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (completato)
sync-requires-account = Per sincronizzare le credenziali con un altro dispositivo è necessario <signin>accedere o creare un { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Assicurati che l’opzione “Accessi” sia selezionata nelle impostazioni di { -sync-brand-short-name }
setting-to-allow-sync = Per consentire la sincronizzazione delle credenziali su altri dispositivi è necessario selezionare questa opzione. <go>Apri le impostazioni di { -sync-brand-short-name }</go>
banner-promote-device = <bold>Porta le tue password sempre con te</bold> – scarica la nostra app per iOS e Android.
banner-promote-device-app-store =
    .title = Scarica da App Store
banner-promote-device-play-store =
    .title = Scarica da Google Play
banner-promote-fxa = <bold>Porta le tue password sempre con te</bold> – crea un { -fxaccount-brand-name } o accedi per sincronizzare { -fxlockwise-brand-short-name } su dispositivi mobili:
banner-promote-fxa-action-label = Accedi
