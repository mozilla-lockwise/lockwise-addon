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
profile-menu-sign-in = Aperir session a { -sync-brand-short-name }
profile-menu-connect = Connecter un apparato
profile-menu-faq = FAQ
profile-menu-feedback = Forni commentario
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Impossibile synchronisar le credentiales.
error-notification-sync-button = Reconnecter
error-notification-duplicate = Un credential pro { $title } con ille nomine de usator existe jam.
error-notification-duplicate-link = <a>Ir al credential existente?</a>
all-items-get-started = Quando tu salva un contrasigno in { -firefox-brand-name }, illo apparera ci.
all-items-get-started-title = Nulle accessos trovate.
all-items-get-started-footer = Non vide tu credentiales salvate? <go>Discoperi proque</go>
all-items-no-results = Si iste credential es salvate sur un altere apparato, pro lo vider ci, verifica que tu ha accesso e es synchronisate sur isto.
all-items-no-results-title = Nulle accessos concordante.
all-items-no-results-footer = <go>Saper plus</go>
item-fields-title-input =
    .placeholder = e.g. banco principal
item-fields-origin = Adresse del sito web
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Verifica que isto concorda con le exacte dominio pro le sito web al qual tu te refere (includite “https://”).
item-fields-origin-button = Lancear
item-fields-username = Nomine de usator
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = Copiar le nomine de usator al area de transferentia
item-fields-password = Contrasigno
item-fields-copy-password =
    .title = Copiar le contrasigno al area de transferentia
item-fields-notes = Notas
item-summary-new-title = Nove accesso
item-summary-no-title = (sin titulo)
item-summary-new-username = Insere tu credentiales de accesso
item-summary-no-username = (nulle nomine de usator)
item-summary-copy-username = Copiar nomine de usator
    .title = Copiar le nomine de usator al area de transferentia
item-summary-copy-password = Copiar contrasigno
    .title = Copiar le contrasigno al area de transferentia
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Cerca in Credentiales
    .aria-label = Cerca in Credentiales
add-item-button = Nove accesso
send-feedback-button = Forni opinion
toolbar-go-home = A casa
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Avatar de usator
account-summary-account = Conto
account-summary-options = Preferentias
account-summary-signout = Clauder session
intro-page-header-title = { -fxlockwise-brand-name } pro scriptorio
intro-page-header-subtitle = Benvenite al melior gestion de accesso. Nostre additivo pro scriptorio apporta a tu computator multe del meliorationes vidite in nostre applicationes mobile, con major controlo de tu accessos.
intro-page-main-article-1-title = Gestion facile de tu contos
intro-page-main-article-1-copy = Gerer tu contos non deberea esser scientia del missiles. Nos ha rendite le cosas facile con nostre nove interfacie de scriptorio.
intro-page-main-article-2-title = Accesso rapide a tu credentiales
intro-page-main-article-2-copy = Clicca le { -fxlockwise-brand-short-name } icone del barra del instrumentos in { -firefox-brand-name } pro visualisar nostre pannello de accesso a tu credentiales.
intro-page-main-article-3-title = Crear nove accessos manualmente
intro-page-main-article-3-copy = Tu pote ora reservar ulle conto que tu desira intra { -fxlockwise-brand-short-name }, con le addition manual de credentiales.
intro-page-footer-heading = Non vide tu credentiales salvate? Lassa nos te adjutar
intro-page-footer-copy = { -fxlockwise-brand-name } forni accesso al credentiales salvate in { -firefox-brand-name } sur tu apparato. Si tu credentiales es immagazinate sur un altere apparato, tu pote synchronisar tu informationes con iste apparato per aperir session o per crear un { -fxaccount-brand-name }. <go>Saper plus</go>
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

modal-cancel-editing = Cambiamentos non salvate existe. Refusar los?
    .confirmLabel = Refusar le modificationes
    .cancelLabel = Retornar
modal-delete = Deler iste credential?
    .confirmLabel = Deler
    .cancelLabel = Cancellar
connect-another-device-dialog =
    .closeLabel = Clauder
    .allSetLabel = Toto ben
connect-another-device = Connecte un altere apparato
easily-access-logins = Accede facilemente a tu contos ab ulle apparato.
access-on-another-computer = Accede sur un altere computator
simply-sign-in-other-device = Aperi session a tu { -fxaccount-brand-name } sur tu altere apparato pro synchronisar tu credentiales con ille computator.
download-mobile = Discargar le application mobile
download-ios-android = { -fxlockwise-brand-name } es disponibile sur ambe iOS e Android.<learnmore>Clicca ci</learnmore> pro saper plus e pro inviar un ligamine a tu telephono pro discargar le application.
before-access = Ante que tu pote acceder a tu credentiales sur un altere apparato, tu debera connecter un { -fxaccount-brand-name }.
connect-a-firefox-account = Connecte a { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (complete)
sync-requires-account = Pro synchronisar tu credentiales con un altere apparato, tu debe  <signin>aperir session o crear un { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Assecura te que le quadrato de selection “Credentiales” es seligite in le preferentias de { -sync-brand-short-name }
setting-to-allow-sync = Pro permitter que tu credentiales se synchronisa a altere apparatos, iste parametro debe esser verificate. <go>Aperir preferentias de { -sync-brand-short-name }</go>
banner-promote-device = <bold>Porta tu contrasignos sempre con te.</bold> Discarga nostre application pro iOS e Android.
banner-promote-device-app-store =
    .title = Discarga lo ex App Store
banner-promote-device-play-store =
    .title = Discarga lo ex Google Play
banner-promote-fxa = <bold>Porta ubique con te tu contrasignos.</bold> Crea un { -fxaccount-brand-name } o accede pro syncronisar { -fxlockwise-brand-short-name } sur tu apparato mobile:
banner-promote-fxa-action-label = Aperir session
