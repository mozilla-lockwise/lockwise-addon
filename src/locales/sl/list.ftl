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
error-notification-sync = Prijav ni mogoče sinhronizirati.
error-notification-sync-button = Ponovno poveži
error-notification-duplicate = Prijava za { $title } s tem uporabniškim imenom že obstaja.
error-notification-duplicate-link = <a>Grem na obstoječo prijavo?</a>
all-items-get-started = Ko geslo shranite v { -firefox-brand-name }, se bo prikazalo tukaj.
all-items-get-started-title = Ni prijav.
all-items-get-started-footer = Ne vidite svojih shranjenih prijav? <go>Ugotovite, zakaj</go>
all-items-no-results = Če je ta prijava shranjena v drugi napravi, se prijavite vanjo in omogočite sinhronizacijo, da se bo prijava prikazala tukaj.
all-items-no-results-title = Ni ujemajočih se prijav.
all-items-no-results-footer = <go>Več o tem</go>
item-fields-title-input =
    .placeholder = npr. banka
item-fields-origin = Naslov spletnega mesta
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Vnesite domeno spletnega mesta, na katero se sklicujete (vključno s "https://").
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
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Iskanje prijav
    .aria-label = Iskanje prijav
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
intro-page-header-subtitle =
    Dobrodošli v boljšem upravljanju prijav. Naš dodatek na namizja prinaša veliko
    izboljšav, ki jih že poznate iz naših mobilnih aplikacij, z večjim
    nadzorom nad vašimi prijavami.
intro-page-main-article-1-title = Enostavno upravljanje računov
intro-page-main-article-1-copy =
    Upravljanje računov ne bi smelo biti pretežko. Z novim
    namiznim vmesnikom smo poenostavili stvari.
intro-page-main-article-2-title = Hiter dostop do vaših prijav
intro-page-main-article-2-copy =
    V { -firefox-brand-name }ovi orodni vrstici kliknite ikono { -fxlockwise-brand-short-name }, da odprete
    meni za dostop do svojih prijav.
intro-page-main-article-3-title = Ročno ustvari nove prijave
intro-page-main-article-3-copy =
    Z ročnim dodajanjem prijav lahko sedaj shranite
    katerikoli račun v { -fxlockwise-brand-short-name }.
intro-page-footer-heading = Ne vidite svojih shranjenih prijav? Naj vam pomagamo.
intro-page-footer-copy =
    { -fxlockwise-brand-name } omogoča dostop do prijav, ki ste jih shranili
    v { -firefox-brand-name } na vaši napravi. Če so prijave shranjene na drugi napravi,
    lahko podatke sinhronizirate s to napravo tako, da se prijavite
    v { -fxaccount-brand-name }. <go>Več o tem</go>
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
sort-by-last-changed = Nazadnje spremenjeno

## Strings used in pop-up

manage-logins-button = Odpri { -fxlockwise-brand-short-name }
list-detail-button = Odpri spletno mesto
default-banner = Nedavno uporabljene prijave.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } najdena prijava
        [two] { $count } najdeni prijavi
        [few] { $count } najdene prijave
       *[other] { $count } najdenih prijav
    }
get-started-banner = Ni najdenih prijav.
no-matching-banner = Ni ujemajočih se prijav.
no-results-banner = Za trenutno spletno mesto ni bilo najdenih prijav.
item-details-panel-title = Podrobnosti prijave
navigate-panel-backwards = Nazaj

## Strings used in dialog

modal-cancel-editing = Obstajajo neshranjene spremembe. Ali jih želite zavreči?
    .confirmLabel = Zavrzi spremembe
    .cancelLabel = Nazaj
modal-delete = Izbrišem to prijavo?
    .confirmLabel = Izbriši
    .cancelLabel = Prekliči
connect-another-device-dialog =
    .closeLabel = Zapri
    .allSetLabel = Končano
connect-another-device = Poveži drugo napravo
easily-access-logins = Enostavno dostopite do svojih prijav iz katerekoli naprave.
access-on-another-computer = Dostop na drugem računalniku
simply-sign-in-other-device = Prijavite se v svoj { -fxaccount-brand-name } na drugi napravi, da boste lahko sinhronizirali prijave s tem računalnikom.
download-mobile = Prenesite mobilno aplikacijo
download-ios-android = { -fxlockwise-brand-name } je na voljo za iOS in Android. <learnmore>Kliknite tukaj</learnmore>, če želite izvedeti več in poslati povezavo za prenos aplikacije na telefon.
before-access = Za dostop do svojih prijav na drugi napravi povežite { -fxaccount-brand-name }.
connect-a-firefox-account = Povežite { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (končano)
sync-requires-account = Če želite sinhronizirati prijave z drugo napravo, se morate <signin>prijaviti ali ustvariti { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Prepričajte se, da je izbrana možnost Prijave v nastavitvah { -sync-brand-short-name }.
setting-to-allow-sync = Če želite omogočiti sinhronizacijo prijav z drugimi napravami, morate označiti to možnost. <go>Odpri nastavitve { -sync-brand-short-name }a</go>
banner-promote-device = <bold>Vzemite gesla s seboj</bold> – prenesite aplikacijo za iOS ali Android:
banner-promote-device-app-store =
    .title = Prenesite ga z App Stora
banner-promote-device-play-store =
    .title = Prenesite ga z Google Play
banner-promote-fxa = <bold>Vzemite gesla s seboj</bold> – ustvarite { -fxaccount-brand-name } ali se prijavite za sinhronizacijo v { -fxlockwise-brand-short-name } na telefonu:
banner-promote-fxa-action-label = Prijava
