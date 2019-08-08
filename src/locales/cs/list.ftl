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
header-logins-button = Přihlašovací údaje
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Účet
profile-menu-sign-in = Přihlásit se do služby { -sync-brand-short-name }
profile-menu-connect = Připojit zařízení
profile-menu-faq = FAQ
profile-menu-feedback = Zpětná vazba
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Synchronizace přihlašovacích údajů se nezdařila.
error-notification-sync-button = Znovu připojit
error-notification-duplicate = Přihlašovací údaje pro server { $title } se stejným uživatelským jménem už existují.
error-notification-duplicate-link = <a>Zobrazit existující přihlašovací údaje?</a>
all-items-get-started = Tady se zobrazí přihlašovací údaje, které v aplikaci { -firefox-brand-name } uložíte.
all-items-get-started-title = Nenalezeny žádné přihlašovací údaje.
all-items-get-started-footer = Nevidíte své přihlašovací údaje? <go>Zjistěte proč</go>
all-items-no-results = Pokud jste údaje uložili na jiném zařízení, ujistěte se, že jste na něm přihlášeni k účtu Firefoxu a synchronizace je aktivní.
all-items-no-results-title = Žádné odpovídající přihlašovací údaje.
all-items-no-results-footer = <go>Zjistit více</go>
item-fields-title-input =
    .placeholder = např. vaše banka
item-fields-origin = Adresa serveru
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Ujistěte se, že adresa přesně odpovídá doméně serveru (včetně protokolu „https://“).
item-fields-origin-button = Otevřít
item-fields-username = Uživatelské jméno
item-fields-username-input =
    .placeholder = vase-adresa@example.com
item-fields-copy-username =
    .title = Zkopírovat uživatelské jméno do schránky
item-fields-password = Heslo
item-fields-copy-password =
    .title = Zkopírovat heslo do schránky
item-fields-notes = Poznámky
item-summary-new-title = Nové přihlašovací údaje
item-summary-no-title = (bez názvu)
item-summary-new-username = Zadejte své přihlašovací údaje
item-summary-no-username = (bez uživatelského jména)
item-summary-copy-username = Kopírovat uživatelské jméno
    .title = Zkopíruje uživatelské jméno do schránky
item-summary-copy-password = Kopírovat heslo
    .title = Zkopíruje heslo do schránky
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Hledat
    .aria-label = Vyhledat přihlašovací údaje
add-item-button = Nové přihlašovací údaje
send-feedback-button = Poskytnout zpětnou vazbu
toolbar-go-home = Domů
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Avatar uživatele
account-summary-account = Účet
account-summary-options = Předvolby
account-summary-signout = Odhlásit
intro-page-header-title = { -fxlockwise-brand-name } pro počítač
intro-page-header-subtitle = Vítejte ve vylepšeném správci přihlašovacích údajů. Náš doplněk pro počítač přináší mnoho vylepšení, která jste už mohli vidět v našich mobilních aplikacích, a dá vám lepší kontrolu nad vašimi účty.
intro-page-main-article-1-title = Snadná správa vašich účtů
intro-page-main-article-1-copy = Správa vašich účtů na internetu není žádná věda. S naším novým rozhraním je vše velmi jednoduché.
intro-page-main-article-2-title = Rychlý přístup k vašim přihlašovacím údajům
intro-page-main-article-2-copy = Otevřete rychlý přístup k vašim přihlašovacím údajům klepnutím na ikonu { -fxlockwise-brand-short-name } na liště aplikace { -firefox-brand-name }.
intro-page-main-article-3-title = Možnost ručního uložení přihlašovacích údajů
intro-page-main-article-3-copy = { -fxlockwise-brand-short-name } umí pracovat i s ručně přidanými přihlašovacími údaji, takže si můžete uložit úplně jakýkoliv účet.
intro-page-footer-heading = Nevidíte své přihlašovací údaje? Pomůžeme vám.
intro-page-footer-copy = { -fxlockwise-brand-name } vám zpřístupní přihlašovací údaje uložené v aplikaci { -firefox-brand-name } na vašem zařízení. Pokud máte přihlašovací údaje uložené i na jiných zařízeních, stačí si založit { -fxaccount-brand-name } a přihlásit se k synchronizaci. <go>Zjistit více</go>
item-details-heading-new = Vytvořit nové přihlašovací údaje
item-details-heading-edit = Úprava detailu přihlašovacích údajů
item-details-edit = Upravit
item-details-delete = Smazat
item-details-save-new = Vytvořit přihlašovací údaje
item-details-save-existing = Uložit změny
item-details-cancel = Zrušit
item-details-created = Vytvořeno: { $date }
item-details-modified = Poslední změna: { $date }
item-details-last-used = Naposledy použito: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [zero] Žádné přihlašovací údaje
        [one] Jedny přihlašovací údaje
        [few] { $count } přihlašovací údaje
       *[other] { $count } přihlašovacích údajů
    }
sort-by = Řazení:
sort-by-name = Název
sort-by-last-used = Naposledy použito
sort-by-last-changed = Poslední změna

## Strings used in pop-up

manage-logins-button = Otevřít { -fxlockwise-brand-short-name }
list-detail-button = Otevřít stránku
default-banner = Nedávno používané přihlašovací údaje.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] Nalezeny jedny přihlašovací údaje
        [2] Nalezeny dvoje přihlašovací údaje
        [3] Nalezeny troje přihlašovací údaje
        [4] Nalezeny čtvery přihlašovací údaje
       *[other] Nalezeno { $count } přihlašovacích údajů
    }
get-started-banner = Nenalezeny žádné přihlašovací údaje.
no-matching-banner = Nenalezeny žádné přihlašovací údaje.
no-results-banner = Pro tento server nenalezeny žádné přihlašovací údaje.
item-details-panel-title = Detail přihlašovacích údajů
navigate-panel-backwards = Přejít zpět

## Strings used in dialog

modal-cancel-editing = Chcete zahodit neuložené změny?
    .confirmLabel = Zahodit změny
    .cancelLabel = Přejít zpět
modal-delete = Smazat tyto přihlašovací údaje?
    .confirmLabel = Smazat
    .cancelLabel = Zrušit
connect-another-device-dialog =
    .closeLabel = Zavřít
    .allSetLabel = Vše je nastaveno
connect-another-device = Připojte další zařízení
easily-access-logins = Získejte snadný přístup k vašim přihlašovacím údajům z jakéhokoliv zařízení.
access-on-another-computer = Přístup z dalšího počítače
simply-sign-in-other-device = Pro synchronizaci vašich přihlašovacích údajů s dalším počítačem se na něm stačí přihlásit vaším účtem Firefoxu.
download-mobile = Stáhněte si mobilní aplikaci
download-ios-android = Aplikace { -fxlockwise-brand-name } je dostupná pro iOS a Android. Nechte si <learnmore>poslat odkaz</learnmore> ke stažení aplikace do svého telefonu.
before-access = Pro přístup k vašim přihlašovacím údajům z ostatních zařízení se nejdříve přihlaste svým účtem Firefoxu.
connect-a-firefox-account = Připojte svůj { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (dokončeno)
sync-requires-account = Pro synchronizaci vašich přihlašovacích údajů s dalším zařízením se <signin>přihlaste nebo vytvořte { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Ujistěte se, že máte v předvolbách služby { -sync-brand-short-name } vybrány „Přihlašovací údaje“
setting-to-allow-sync = Aby synchronizace mezi zařízeními fungovala, je potřeba mít tuto volbu vybranou. <go>Otevřít nastavení { -sync-brand-short-name }</go>
banner-promote-device = <bold>Mějte svá hesla všude s sebou</bold> - stáhněte si aplikaci pro iOS nebo Android:
banner-promote-device-app-store =
    .title = Stáhnout na App Store
banner-promote-device-play-store =
    .title = Stáhnout z Google Play
banner-promote-fxa = <bold>Mějte svá hesla všude s sebou</bold> - vytvořte si { -fxaccount-brand-name } nebo se přihlaste s aplikací { -fxlockwise-brand-short-name } na svém mobilu:
banner-promote-fxa-action-label = Přihlásit se
