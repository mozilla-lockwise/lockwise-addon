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
header-logins-button = Authenticationes
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Conto
profile-menu-sign-in = Accede a { -sync-brand-short-name }
profile-menu-connect = Connecter un apparato
profile-menu-faq = Questiones frequente
profile-menu-feedback = Forni commentario
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Impossibile synchronisar le credentiales.
error-notification-sync-button = Reconnecter
all-items-get-started-title = Nulle accessos trovate.
all-items-no-results-title = Nulle accessos concordante.
all-items-no-results-footer = <go>Saper plus</go>
item-fields-origin = Adresse del sito web
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-button = Lancear
item-fields-username = Nomine del usator
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = Copiar le nomine de usator in le area de transferentia
item-fields-password = Contrasigno
item-fields-copy-password =
    .title = Copiar le contrasignor in le area de transferentia
item-fields-notes = Notas
item-summary-new-title = Nove accesso
item-summary-no-title = (sin titulo)
item-summary-new-username = Insere tu credentiales de accesso
item-summary-no-username = (nulle nomine de usator)
item-summary-copy-username = Copiar le nomine de usator
    .title = Copia le nomine de usator in le area de transferentia
item-summary-copy-password = Copiar le contrasigno
    .title = Copia le contrasigno in le area de transferentia
add-item-button = Nove accesso
send-feedback-button = Forni opinion
toolbar-go-home = A casa
toolbar-open-faq = Questiones frequente
account-summary-avatar =
    .alt = Avatar de usator
account-summary-account = Conto
account-summary-options = Preferentias
account-summary-signout = Disconnexion
intro-page-header-title = { -fxlockwise-brand-name } pro scriptorio
intro-page-main-article-1-title = Gestion facile de tu contos
intro-page-main-article-2-title = Accesso rapide a tu credentiales
intro-page-main-article-3-title = Crear nove accessos manualmente
item-details-heading-new = Crear nove accesso
item-details-heading-edit = Redige detalios del credentiales
item-details-edit = Rediger
item-details-delete = Deler
item-details-save-new = Crear accesso
item-details-save-existing = Salvar le cambios
item-details-cancel = Cancellar
item-details-created = Create le: { $date }
item-details-modified = Modificate le ultime vice le: { $date }
item-details-last-used = Usate le ultime vice le: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } credential
       *[other] { $count } credentiales
    }
sort-by = Ordinar per:
sort-by-name = Nomine
sort-by-last-used = Ultimemente usate
sort-by-last-changed = Ultime vice cambiate

## Strings used in pop-up

manage-logins-button = Aperir { -fxlockwise-brand-short-name }
list-detail-button = Aperir sito web
default-banner = Credentiales usate recentemente.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } credential trovate
       *[other] { $count } credentiales trovate
    }
get-started-banner = Nulle credentiales trovate
no-matching-banner = Nulle credentiales concordante.
no-results-banner = Nulle credentiales trovate pro le sito actual.
item-details-panel-title = Detalios del credentiales
navigate-panel-backwards = Regreder

## Strings used in dialog

modal-delete = Deler iste credential?
    .confirmLabel = Deler
    .cancelLabel = Cancellar
connect-another-device = Connecte un altere apparato
easily-access-logins = Accede facilemente a tu contos ab ulle apparato.
access-on-another-computer = Accede sur un altere computator
simply-sign-in-other-device = Accede l tu { -fxaccount-brand-name } sur un altere apparato pro synchronisar tu credentiales.
download-mobile = Discargar le application mobile
connect-a-firefox-account = Connecte a { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (complete)
banner-promote-device = <bold>Porta tu contrasignos sempre con te.</bold> Discarga nostre application pro iOS e Android.
banner-promote-device-app-store =
    .title = Discarga lo ex App Store
banner-promote-device-play-store =
    .title = Discarga lo ex Google Play
banner-promote-fxa-action-label = Acceder
