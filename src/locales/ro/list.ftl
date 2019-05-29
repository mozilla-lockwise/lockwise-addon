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
-fxaccount-brand-name = Cont Firefox

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Date de autentificare
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Cont
profile-menu-sign-in = Autentifică-te pe { -sync-brand-short-name }
profile-menu-connect = Conectează un dispozitiv
profile-menu-faq = Întrebări adresate frecvent
profile-menu-feedback = Oferă feedback
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Nu se pot sincroniza datele de autentificare.
error-notification-sync-button = Reconectare
error-notification-duplicate = Deja există un set de date de autentificare pentru { $title } cu acel nume de utilizator.
error-notification-duplicate-link = <a>Mergi la datele de autentificare existente?</a>
all-items-get-started = Aici apar parolele salvate în { -firefox-brand-name }.
all-items-get-started-title = Nu s-au găsit date de autentificare.
all-items-get-started-footer = Nu îți vezi datele de autentificare salvate? <go>Află de ce</go>
all-items-no-results = Dacă aceste date de autentificare sunt salvate pe alt dispozitiv, asigură-te că te-ai autentificat și ai sincronizat acel dispozitiv ca să le vezi aici.
all-items-no-results-title = Nu există date de autentificare corespondente.
all-items-no-results-footer = <go>Află mai multe</go>
item-fields-title-input =
    .placeholder = de ex. bancă primară
item-fields-origin = Adresă site web
item-fields-origin-input =
    .placeholder = https://www.exemplu.com
item-fields-origin-info-message = Asigură-te că este domeniul exact al site-ului web pe care îl cauți (inclusiv „https;//”).
item-fields-origin-button = Lansează
item-fields-username = Nume de utilizator
item-fields-username-input =
    .placeholder = nume@exemplu.com
item-fields-copy-username =
    .title = Copiază numele de utilizator în clipboard
item-fields-password = Parolă
item-fields-copy-password =
    .title = Copiază parola în clipboard
item-fields-notes = Note
item-summary-new-title = Date de autentificare noi
item-summary-no-title = (fără titlu)
item-summary-new-username = Introdu datele tale de autentificare
item-summary-no-username = (fără nume de utilizator)
item-summary-copy-username = Copiază numele de utilizator
    .title = Copiază numele de utilizator în clipboard
item-summary-copy-password = Copiază parola
    .title = Copiază parola în clipboard
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Caută date de autentificare
    .aria-label = Caută date de autentificare
add-item-button = Date de autentificare noi
send-feedback-button = Oferă feedback
toolbar-go-home = Acasă
toolbar-open-faq = Întrebări adresate frecvent
account-summary-avatar =
    .alt = Avatar utilizator
account-summary-account = Cont
account-summary-options = Preferințe
account-summary-signout = Deconectare
intro-page-header-title = { -fxlockwise-brand-name } pentru calculator
intro-page-header-subtitle = Bine ai venit la gestionarea mai bună a datelor de autentificare. Suplimentul nostru pentru calculatoare aduce pe calculator multe dintre îmbunătățirile pe care le-ai văzut în aplicațiile pentru dispozitive mobile, cu un control superior asupra datelor de autentificare.
intro-page-main-article-1-title = Gestionare ușoară a conturilor tale
intro-page-main-article-1-copy = Gestionarea conturilor nu ar trebui să fie super complicată. Am simplificat lucrurile cu noua noastră interfață pentru calculator.
intro-page-main-article-2-title = Acces rapid la datele tale de autentificare
intro-page-main-article-2-copy = Dă clic pe pictograma { -fxlockwise-brand-short-name } din bara de unelte din { -firefox-brand-name } pentru vizualizarea panoului de acces la datele tale de autentificare.
intro-page-main-article-3-title = Creează manual noi date de autentificare
intro-page-main-article-3-copy = Prin adăugarea manuală a datelor de autentificare, poți acum stoca orice cont vrei în { -fxlockwise-brand-short-name }.
intro-page-footer-heading = Nu vezi datele de autentificare salvate? Lasă-ne să te ajutăm.
intro-page-footer-copy = { -fxlockwise-brand-name } oferă acces la datele de autentificare pe care le-ai salvat în { -firefox-brand-name } pe dispozitivul tău. Dacă le-ai salvat pe alt dispozitiv, îți poți sincroniza informațiile pe acest dispozitiv prin autentificarea în sau creând un { -fxaccount-brand-name }. <go>Află mai multe</go>
item-details-heading-new = Creează noi date de autentificare
item-details-heading-edit = Editează detaliile datelor de identificare
item-details-edit = Editează
item-details-delete = Șterge
item-details-save-new = Creează date de autentificare
item-details-save-existing = Salvează modificările
item-details-cancel = Anulează
item-details-created = Creat: { $date }
item-details-modified = Ultima modificare: { $date }
item-details-last-used = Ultima utilizare: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } set de date de autentificare
        [few] { $count } seturi de date de autentificare
       *[other] { $count } de seturi de date de autentificare
    }
sort-by = Sortează după:
sort-by-name = Denumire
sort-by-last-used = Ultima utilizare
sort-by-last-changed = Ultima modificare

## Strings used in pop-up

manage-logins-button = Deschide { -fxlockwise-brand-short-name }
list-detail-button = Deschide site-ul web
default-banner = Date de autentificare utilizate recent.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } set de date de autentificare găsit
        [few] { $count } seturi de date de autentificare găsite
       *[other] { $count } de seturi de date de autentificare găsite
    }
get-started-banner = Nu s-au găsit date de autentificare.
no-matching-banner = Nu există date de autentificare corespondente.
no-results-banner = Nu s-au găsit date de autentificare pentru site-ul curent.
item-details-panel-title = Detalii date de autentificare
navigate-panel-backwards = Înapoi

## Strings used in dialog

modal-cancel-editing = Ai modificări nesalvate. Renunți la ele?
    .confirmLabel = Renunță la modificări
    .cancelLabel = Înapoi
modal-delete = Ștergi aceste date de autentificare?
    .confirmLabel = Șterge
    .cancelLabel = Anulează
connect-another-device-dialog =
    .closeLabel = Închide
    .allSetLabel = Gata
connect-another-device = Conectează alt dispozitiv
easily-access-logins = Obții ușor accesul la datele tale de autentificare de pe orice dispozitiv.
access-on-another-computer = Acces de pe alt calculator
simply-sign-in-other-device = Pur și simplu te autentifici în { -fxaccount-brand-name } de pe celălalt dispozitiv pentru a-ți sincroniza datele de autentificare pe calculatorul respectiv.
download-mobile = Descarcă aplicația pentru dispozitive mobile
download-ios-android = { -fxlockwise-brand-name } este disponibil și pe iOS, și pe Android. <learnmore>Dă clic aici</learnmore> pentru a afla mai multe și pentru a-ți trimite un link pe telefon ca să descarci aplicația.
before-access = Înainte de a-ți putea accesa datele de autentificare pe alt dispozitiv, trebuie să te conectezi la un { -fxaccount-brand-name }
connect-a-firefox-account = Conectează un { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (complet)
sync-requires-account = Pentru a-ți sincroniza datele de autentificare pe alt dispozitiv, trebuie să <signin>te autentifici în sau să creezi un { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Asigură-te că ai caseta de validare „Date de autentificare” selectată în preferințele { -sync-brand-short-name }
setting-to-allow-sync = Pentru a permite sincronizarea datelor tale de autentificare pe alte dispozitive, această setare trebuie să fie bifată. <go>Deschide preferințele { -sync-brand-short-name }</go>
banner-promote-device = <bold>Ia cu tine parolele oriunde</bold> - descarcă aplicația noastră pentru iOS sau Android:
banner-promote-device-app-store =
    .title = Descarcă de pe App Store
banner-promote-device-play-store =
    .title = Descarcă din Google Play
banner-promote-fxa = <bold>Ia cu tine parolele oriunde</bold> - creează un { -fxaccount-brand-name } sau autentifică-te pentru a sincroniza { -fxlockwise-brand-short-name } pe dispozitivul mobil:
banner-promote-fxa-action-label = Autentificare
