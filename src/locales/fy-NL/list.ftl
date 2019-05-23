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
header-logins-button = Oanmeldingen
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Account
profile-menu-sign-in = Oanmelde by { -sync-brand-short-name }
profile-menu-connect = Ferbyn in apparaat
profile-menu-faq = FAQ
profile-menu-feedback = Kommentaar jaan
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Kin oanmeldingen net syngronisearje.
error-notification-sync-button = Opnij ferbine
error-notification-duplicate = Der bestiet al in oanmelding foar { $title } mei dy brûkersnamme.
error-notification-duplicate-link = <a>Nei besteande oanmelding gean?</a>
all-items-get-started = Wannear't jo in wachtwurd bewarje yn { -firefox-brand-name }, wurdt dit hjir werjûn.
all-items-get-started-title = Gjin oanmeldingen fûn.
all-items-get-started-footer = Wurde jo bewarre oanmeldingsgegevens net toand? <go>Untdek wêrom</go>
all-items-no-results = As dizze oanmelding op in oar apparaat bewarre wurdt, moatte jo jo op dat apparaat oanmelde en syngronisearje om it hjir te sjen.
all-items-no-results-title = Gjin oerienkommende oanmeldingen.
all-items-no-results-footer = <go>Mear ynformaasje</go>
item-fields-title-input =
    .placeholder = byg. primêre bank
item-fields-origin = Website-adres
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Soargje derfoar dat dit oerienkomt mei it eksakte domein foar de website wêrnei't jo ferwize (‘https: //’ ynbegrepen).
item-fields-origin-button = Starte
item-fields-username = Brûkersnamme
item-fields-username-input =
    .placeholder = namme@example.com
item-fields-copy-username =
    .title = Kopiearje de brûkersnamme nei it klamboerd
item-fields-password = Wachtwurd
item-fields-copy-password =
    .title = Kopiearje it wachtwurd nei it klamboerd
item-fields-notes = Opmerkingen
item-summary-new-title = Nije oanmelding
item-summary-no-title = (gjin titel)
item-summary-new-username = Fier jo oameldgegevens yn
item-summary-no-username = (gjin brûkersnamme)
item-summary-copy-username = Brûkersnamme kopiearje
    .title = Brûkersnamme kopiearje nei klamboerd
item-summary-copy-password = Wachtwurd kopiearje
    .title = Wachtwurd kopiearje nei klamboerd
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Oanmeldingen sykje
    .aria-label = Oanmeldingen sykje
add-item-button = Nije oanmelding
send-feedback-button = Kommentaar jaan
toolbar-go-home = Startside
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Brûkersavatar
account-summary-account = Account
account-summary-options = Foarkarren
account-summary-signout = Ofmelde
intro-page-header-title = { -fxlockwise-brand-name } foar Desktop
intro-page-header-subtitle =
    Wolkom by better oanmeldbehear. Us desktop-add-on bringt in protte fan
    de ferbetteringen lykas yn ús mobile apps nei jo computer, mei
    mear kontrôle oer jo oanmeldingen.
intro-page-main-article-1-title = Ienfâldich behear fan jo accounts
intro-page-main-article-1-copy =
    It behearen fan jo accounts moat gjin "rocket science" wêze. Wy hawwe
    dingen ienfâldich makke mei ús nije desktopynterface.
intro-page-main-article-2-title = Flugge tagong ta jo oanmeldingen
intro-page-main-article-2-copy =
    Klik yn de arkbalke fan { -firefox-brand-name } op it { -fxlockwise-brand-short-name }-piktogram om fia
    it útklapmenu tagong te krijen ta jo oanmeldingen.
intro-page-main-article-3-title = Nije oanmeldingen hânmjittich oanmeitsje
intro-page-main-article-3-copy =
    Mei de tafoeging fan hânmjittige oanmeldingen, kinne jo no binnen
    { -fxlockwise-brand-short-name } elk account dat jo wolle bewarje.
intro-page-footer-heading = Wurde jo bewarre oanmeldingen net toand? Lit ús helpe.
intro-page-footer-copy =
    { -fxlockwise-brand-name } jout tagong ta de oanmeldingen dy't jo bewarre hawwe yn
    { -firefox-brand-name } op jo apparaat. As jo oanmeldingen bewarre binne op in oar apparaat,
    kinne jo jo ynformaasje syngronisearje mei dit apparaat troch jo oan te melden of troch
    in { -fxaccount-brand-name } oan te meitsjen. <go>Mear ynfo</go>
item-details-heading-new = Nije oanmelding meitsje
item-details-heading-edit = Oanmeldgegevens bewurkje
item-details-edit = Bewurkje
item-details-delete = Fuortsmite
item-details-save-new = Oanmelding oanmeitsje
item-details-save-existing = Wizigingen bewarje
item-details-cancel = Annulearje
item-details-created = Oanmakke: { $date }
item-details-modified = Lêst wizige: { $date }
item-details-last-used = Lêst brûkt: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } oanmelding
       *[other] { $count } oanmeldingen
    }
sort-by = Sortearje op:
sort-by-name = Namme
sort-by-last-used = Lêst brûkt
sort-by-last-changed = Lêst wizige

## Strings used in pop-up

manage-logins-button = { -fxlockwise-brand-short-name } iepenje
list-detail-button = Website iepenje
default-banner = Resint brûkte oanmeldingen.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } oanmelding fûn
       *[other] { $count } oanmeldingen fûn
    }
get-started-banner = Gjin oanmeldingen fûn.
no-matching-banner = Gjin oerienkommende oanmeldingen.
no-results-banner = Gjin oanmeldgegevens fûn foar aktuele website.
item-details-panel-title = Oanmelddetails
navigate-panel-backwards = Tebek

## Strings used in dialog

modal-cancel-editing = Der binne net-bewarre wizigingen. Wizigingen ferwerpe?
    .confirmLabel = Wizigingen ferwerpe
    .cancelLabel = Tebek
modal-delete = Dizze oanmelding fuortsmite?
    .confirmLabel = Fuortsmite
    .cancelLabel = Annulearje
connect-another-device = Noch in apparaat keppelje
easily-access-logins = Krij fan elk apparaat ôf maklik tagong ta jo oanmeldingen.
access-on-another-computer = Tagong op in oare kompjûter
simply-sign-in-other-device = Meld jo gewoanwei oan op { -fxaccount-brand-name } op jo oare apparaat om jo oanmeldingen mei dy kompjûter te syngronisearjen.
download-mobile = Download de app foar mobyl
download-ios-android = { -fxlockwise-brand-name } is beskikber op sawol iOS as Android. <learnmore>Klik hjir</learnmore> foar mear ynformaasje en om in keppeling nei jo telefoan te ferstjoeren om de app te downloaden.
before-access = Eardat jo jo oanmeldgegevens op in oar apparaat iepenje kinne, moatte jo in { -fxaccount-brand-name } keppelje.
connect-a-firefox-account = In { -fxaccount-brand-name } keppelje
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (foltôge)
sync-requires-account = Om jo oanmeldingen mei in oar apparaat te syngronisearjen, moatte jo jo oanmelde <signin>of in { -fxaccount-brand-name }</signin> meitsje.
ensure-logins-checked = Soargje derfoar dat it seleksjefekje ‘Oanmeldingen’ yn { -sync-brand-short-name }-foarkarren selektearre is
setting-to-allow-sync = Om jo oanmeldingen syngronisearje te kinnen mei oare apparaten, moat dizze ynstelling kontrolearre wurde. <go>Iepenje { -sync-brand-short-name }-foarkarren</ go>
banner-promote-device = <bold>Nim jo wachtwurden oeral mei hinne</bold> – download ús app foar iOS of Android:
banner-promote-device-app-store =
    .title = Downloade yn de App Store
banner-promote-device-play-store =
    .title = Downloade op Google Play
banner-promote-fxa = <bold>Nim jo wachtwurden oeral mei hinne</bold> – meitsje in { -fxaccount-brand-name } of meld jo oan om te syngronisearjen mei { -fxlockwise-brand-short-name } op jo mobyl:
banner-promote-fxa-action-label = Oanmelde
