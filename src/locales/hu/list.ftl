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
-fxaccount-brand-name = Firefox-fiók

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Bejelentkezések
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Fiók
profile-menu-sign-in = Jelentkezzen be a { -sync-brand-short-name }be
profile-menu-connect = Eszköz csatlakoztatása
profile-menu-faq = GYIK
profile-menu-feedback = Adjon visszajelzést
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Nem sikerült szinkronizálni a bejelentkezéseket.
error-notification-sync-button = Újracsatlakozás
error-notification-duplicate = Már létezik egy bejelentkezés azzal a felhasználónévvel ennél: { $title }.
error-notification-duplicate-link = <a>Ugrás a meglévő bejelentkezéshez?</a>
all-items-get-started = Ha elment egy jelszót a { -firefox-brand-name }ban, akkor meg fog itt jelenni.
all-items-get-started-title = Nincsenek bejelentkezések.
all-items-get-started-footer = Nem látja a mentett bejelentkezéseit? <go>Tudja meg miért</go>
all-items-no-results = Ha ez a bejelentkezés egy másik eszközön került mentésre, akkor győződjön meg róla, hogy be van-e jelentkezve és szinkronizált-e az adott eszközön annak érdekében, hogy láthassa itt.
all-items-no-results-title = Nincs megfelelő bejelentkezés.
all-items-no-results-footer = <go>További információk</go>
item-fields-title-input =
    .placeholder = például elsődleges bank
item-fields-origin = Weboldal címe
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Győződjön meg róla, hogy ez megegyezik-e a hivatkozott weboldal pontos domainjével (a „https://”-t is beleértve).
item-fields-origin-button = Indítás
item-fields-username = Felhasználónév
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = A felhasználónév vágólapra másolása
item-fields-password = Jelszó
item-fields-copy-password =
    .title = A jelszó vágólapra másolása
item-fields-notes = Jegyzetek
item-summary-new-title = Új bejelentkezés
item-summary-no-title = (nincs cím)
item-summary-new-username = Adja meg bejelentkezési adatait
item-summary-no-username = (nincs felhasználónév)
item-summary-copy-username = Felhasználónév másolása
    .title = A felhasználónév vágólapra másolása
item-summary-copy-password = Jelszó másolása
    .title = A jelszó vágólapra másolása
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Bejelentkezések keresése
    .aria-label = Bejelentkezések keresése
add-item-button = Új bejelentkezés
send-feedback-button = Adjon visszajelzést
toolbar-go-home = Kezdőlap
toolbar-open-faq = GYIK
account-summary-avatar =
    .alt = Felhasználói avatár
account-summary-account = Fiók
account-summary-options = Beállítások
account-summary-signout = Kijelentkezés
intro-page-header-title = Asztali { -fxlockwise-brand-name }
intro-page-header-subtitle =
    Üdvözöljük a jobb bejelentkezés-kezelésnél. Az asztali kiegészítő
    számos, a mobilalkalmazásainkban található fejlesztést hoz el
    az asztali számítógépére, amely nagyobb irányítást ad a
    a bejelentkezései kezelésében.
intro-page-main-article-1-title = A fiókjai könnyű kezelése
intro-page-main-article-1-copy =
    A fiókja kezelésének nem kell rakétatudománynak lennie. Könnyűvé
    tettük a dolgokat az új asztali felületünkkel.
intro-page-main-article-2-title = Gyors hozzáférés a bejelentkezéseihez
intro-page-main-article-2-copy =
    Kattintson a { -fxlockwise-brand-short-name } ikonra a { -firefox-brand-name } eszköztárán, hogy előhozza a
    bejelentkezései elérését.
intro-page-main-article-3-title = Új bejelentkezések létrehozása kézzel
intro-page-main-article-3-copy =
    A bejelentkezések kézi hozzáadásával bármilyen fiókot
    eltárolhat a { -fxlockwise-brand-short-name }ban.
intro-page-footer-heading = Nem látja a mentett bejelentkezéseit? Hadd segítsünk.
intro-page-footer-copy =
    A { -fxlockwise-brand-name } könnyű hozzáférést ad az eszközén, a
    { -firefox-brand-name }ban mentett bejelentkezéseihez. Ha azok egy másik eszközök
    vannak mentve, akkor szinkronizálhatja azokat egy { -fxaccount-brand-name }
    létrehozásával. <go>További információk</go>
item-details-heading-new = Új bejelentkezés létrehozása
item-details-heading-edit = Bejelentkezési adatok szerkesztése
item-details-edit = Szerkesztés
item-details-delete = Törlés
item-details-save-new = Bejelentkezés létrehozása
item-details-save-existing = Változások mentése
item-details-cancel = Mégse
item-details-created = Létrehozva: { $date }
item-details-modified = Utoljára módosítva: { $date }
item-details-last-used = Utoljára használva: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } bejelentkezés
       *[other] { $count } bejelentkezés
    }
sort-by = Rendezés szempontja:
sort-by-name = Név
sort-by-last-used = Utolsó használat
sort-by-last-changed = Utolsó módosítás

## Strings used in pop-up

manage-logins-button = { -fxlockwise-brand-short-name } megnyitása
list-detail-button = Weboldal megnyitása
default-banner = Legutóbb használt bejelentkezések.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } bejelentkezés található
       *[other] { $count } bejelentkezés található
    }
get-started-banner = Nincsenek bejelentkezések.
no-matching-banner = Nincs megfelelő bejelentkezés.
no-results-banner = Nincsenek bejelentkezések a jelenlegi webhelyhez.
item-details-panel-title = Bejelentkezési részletek
navigate-panel-backwards = Ugrás vissza

## Strings used in dialog

modal-cancel-editing = Nem mentett változások vannak. Elveti őket?
    .confirmLabel = Változások elvetése
    .cancelLabel = Ugrás vissza
modal-delete = Törli a bejelentkezést?
    .confirmLabel = Törlés
    .cancelLabel = Mégse
connect-another-device = Másik eszköz csatlakoztatása
easily-access-logins = Férjen hozzá könnyen a bejelentkezésekhez bármely eszközről.
access-on-another-computer = Hozzáférés egy másik számítógépen
simply-sign-in-other-device = Egyszerűen jelentkezzen be a { -fxaccount-brand-name }jába a másik eszközén, hogy szinkronizálja a bejelentkezéseit arra a számítógépre.
download-mobile = Töltse le a mobilalkalmazást
download-ios-android = A { -fxlockwise-brand-name } elérhető iOS-re és Androidra is. <learnmore>Kattintson ide</learnmore> hogy többet tudjon meg, és hogy hivatkozást küldjön a telefonjára, az alkalmazás letöltéséhez.
before-access = Mielőtt elérné a bejelentkezéseit egy másik eszközbe, kapcsolódnia kell egy { -fxaccount-brand-name }hoz.
connect-a-firefox-account = Egy { -fxaccount-brand-name } csatlakoztatása
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (kész)
sync-requires-account = A bejelentkezései másik eszközre történő szinkronizálásához <signin>be kell jelentkeznie, vagy létre kell hoznia egy { -fxaccount-brand-name }ot</signin>.
ensure-logins-checked = Győződjön meg róla, hogy a „Bejelentkezés” jelölőnégyzet be van-e jelölve a { -sync-brand-short-name } beállításaiban.
setting-to-allow-sync = Ahhoz hogy a bejelentkezéseit szinkronizálja az egyéb eszközeivel, be kell kapcsolnia ezt a beállítást. <go>A { -sync-brand-short-name } beállítások megnyitása</go>
banner-promote-device = <bold>Vigye magával a jelszavait mindenhová</bold> – töltse le az alkalmazásunkat iOS-re vagy Androidra:
banner-promote-device-app-store =
    .title = Töltse le az App Store-ból
banner-promote-device-play-store =
    .title = Szerezze be a Google Playen
banner-promote-fxa = <bold>Vigye magával a jelszavait mindenhová</bold> –hozzon létre egy { -fxaccount-brand-name }ot vagy jelentkezzen be, és szinkronizáljon a mobilos { -fxlockwise-brand-short-name } alkalmazásba:
banner-promote-fxa-action-label = Bejelentkezés
