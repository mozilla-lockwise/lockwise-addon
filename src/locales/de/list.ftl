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
-fxaccount-brand-name = Firefox-Konto

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Zugangsdaten
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Konto
profile-menu-sign-in = Bei { -sync-brand-short-name } anmelden
profile-menu-connect = Ein Gerät verbinden
profile-menu-faq = FAQ
profile-menu-feedback = Feedback geben
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Zugangsdaten konnten nicht synchronisiert werden.
error-notification-sync-button = Verbindung wiederherstellen
error-notification-duplicate = Es existieren bereits Zugangsdaten für { $title } mit diesem Benutzernamen.
error-notification-duplicate-link = <a>Zu bestehenden Zugangsdaten wechseln?</a>
all-items-get-started = Wenn Sie ein Passwort in { -firefox-brand-name } speichern, wird es hier angezeigt.
all-items-get-started-title = Keine Zugangsdaten gefunden.
all-items-get-started-footer = Ihre gespeicherten Zugangsdaten werden nicht angezeigt? <go> Finden Sie heraus, warum.</go>
all-items-no-results = Wenn diese Zugangsdaten auf einem anderen Gerät gespeichert wurden, stellen Sie sicher, dass Sie sich auf diesem Gerät angemeldet und synchronisiert haben, um sie hier anzuzeigen.
all-items-no-results-title = Keine passenden Zugangsdaten.
all-items-no-results-footer = <go>Weitere Informationen</go>
item-fields-title-input =
    .placeholder = z.&thinsp;B. Hauptbank
item-fields-origin = Adresse der Website
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Stellen Sie sicher, dass dies mit der genauen Domain der Website übereinstimmt, auf die Sie verweisen (inklusive „https: //“).
item-fields-origin-button = Starten
item-fields-username = Benutzername
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = Benutzernamen in Zwischenablage kopieren
item-fields-password = Passwort
item-fields-copy-password =
    .title = Passwort in Zwischenablage kopieren
item-fields-notes = Bemerkungen
item-summary-new-title = Neue Zugangsdaten
item-summary-no-title = (Kein Titel)
item-summary-new-username = Geben Sie Ihre Zugangsdaten ein
item-summary-no-username = (Kein Benutzername)
item-summary-copy-username = Benutzernamen kopieren
    .title = Benutzernamen in Zwischenablage kopieren
item-summary-copy-password = Passwort kopieren
    .title = Passwort in Zwischenablage kopieren
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Zugangsdaten durchsuchen
    .aria-label = Zugangsdaten durchsuchen
add-item-button = Neue Zugangsdaten
send-feedback-button = Feedback geben
toolbar-go-home = Startseite
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Benutzer-Avatar
account-summary-account = Konto
account-summary-options = Einstellungen
account-summary-signout = Abmelden
intro-page-header-title = { -fxlockwise-brand-name } für Desktop
intro-page-header-subtitle =
    Willkommen zur besseren Verwaltung von Zugangsdaten. Unser Desktop-Add-On bringt viele
    der Verbesserungen in unseren mobilen Apps auf Ihren Computer und bietet
    bessere Kontrolle über Ihre Zugangsdaten.
intro-page-main-article-1-title = Einfache Verwaltung Ihrer Konten
intro-page-main-article-1-copy =
    Die Verwaltung Ihrer Konten sollte kein Hexenwerk sein. Dank unserer neuen
    Desktop-Oberfläche geht das ganz einfach.
intro-page-main-article-2-title = Schneller Zugriff auf Ihre Zugangsdaten
intro-page-main-article-2-copy =
    Klicken Sie auf das Symbol { -fxlockwise-brand-short-name } in der Symbolleiste von { -firefox-brand-name }, um über unseren
    Türhänger auf Ihre Zugangsdaten zuzugreifen.
intro-page-main-article-3-title = Neue Zugangsdaten manuell anlegen
intro-page-main-article-3-copy =
    Wenn Sie Zugangsdaten manuell anlegen, können Sie beliebige Konten
    in { -fxlockwise-brand-short-name } speichern.
intro-page-footer-heading = Ihre gespeicherten Zugangsdaten werden nicht angezeigt? Wir helfen Ihnen.
intro-page-footer-copy =
    Mit { -fxlockwise-brand-name } können Sie auf Ihre in { -firefox-brand-name }
    auf Ihrem Gerät gespeicherten Zugangsdaten zugreifen. Wenn Ihre Zugangsdaten auf
    einem anderen Gerät gespeichert sind, können Sie Ihre Daten auf dieses Gerät synchronisieren, indem
    Sie ein { -fxaccount-brand-name } anlegen. <go>Weitere Informationen</go>
item-details-heading-new = Neue Zugangsdaten erstellen
item-details-heading-edit = Details der Zugangsdaten bearbeiten
item-details-edit = Bearbeiten
item-details-delete = Löschen
item-details-save-new = Zugangsdaten erstellen
item-details-save-existing = Änderungen speichern
item-details-cancel = Abbrechen
item-details-created = Erstellt: { $date }
item-details-modified = Letzte Änderung: { $date }
item-details-last-used = Zuletzt verwendet: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } Zugangsdatum
       *[other] { $count } Zugangsdaten
    }
sort-by = Sortieren nach:
sort-by-name = Name
sort-by-last-used = Zuletzt verwendet
sort-by-last-changed = Zuletzt geändert

## Strings used in pop-up

manage-logins-button = { -fxlockwise-brand-short-name } öffnen
list-detail-button = Website öffnen
default-banner = Kürzlich verwendete Zugangsdaten.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } Zugangsdatum gefunden
       *[other] { $count } Zugangsdaten gefunden
    }
get-started-banner = Keine Zugangsdaten gefunden.
no-matching-banner = Keine passenden Zugangsdaten.
no-results-banner = Es wurden keine Zugangsdaten für die aktuelle Website gefunden.
item-details-panel-title = Details der Zugangsdaten
navigate-panel-backwards = Zurück

## Strings used in dialog

modal-cancel-editing = Es gibt ungespeicherte Änderungen. Verwerfen?
    .confirmLabel = Änderungen verwerfen
    .cancelLabel = Zurück
modal-delete = Diese Zugangsdaten löschen?
    .confirmLabel = Löschen
    .cancelLabel = Abbrechen
connect-another-device-dialog =
    .closeLabel = Schließen
    .allSetLabel = Fertig
connect-another-device = Weiteres Gerät verbinden
easily-access-logins = Erhalten Sie von jedem Gerät aus Zugriff auf Ihre Zugangsdaten.
access-on-another-computer = Zugriff auf einem anderen Computer
simply-sign-in-other-device = Melden Sie sich einfach mit Ihrem { -fxaccount-brand-name } auf Ihrem anderen Gerät an, um Ihre Zugangsdaten mit diesem Computer zu synchronisieren.
download-mobile = App für Mobilgeräte herunterladen
download-ios-android = { -fxlockwise-brand-name } ist sowohl für iOS als auch für Android verfügbar. <learnmore> Klicken Sie hier</ learnmore>, um mehr zu erfahren und einen Link zum Herunterladen der App an Ihr Handy zu senden.
before-access = Bevor Sie auf einem anderen Gerät auf Ihre Anmeldungen zugreifen können, müssen Sie es mit einem { -fxaccount-brand-name } verbinden.
connect-a-firefox-account = Verbindung mit einem { -fxaccount-brand-name } herstellen
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (Abgeschlossen)
sync-requires-account = Um Ihre Zugangsdaten mit einem anderen Gerät zu synchronisieren, müssen Sie sich <signin>anmelden oder einen { -fxaccount-brand-name } erstellen</ signin>.
ensure-logins-checked = Stellen Sie sicher, dass das Kontrollkästchen „Zugangsdaten“ in den { -sync-brand-short-name } -Einstellungen aktiviert ist
setting-to-allow-sync = Damit Ihre Zugangsdaten mit anderen Geräten synchronisiert werden können, muss diese Einstellung aktiviert sein. <go> { -sync-brand-short-name } -Einstellungen öffnen</go>
banner-promote-device = <bold>Nehmen Sie Ihre Passwörter überall mit hin</ bold> – laden Sie unsere App für iOS oder Android herunter:
banner-promote-device-app-store =
    .title = Erhältlich im App Store
banner-promote-device-play-store =
    .title = Jetzt bei Google Play
banner-promote-fxa = <bold>Nehmen Sie Ihre Passwörter überall mit hin</bold> – erstellen Sie ein { -fxaccount-brand-name } oder melden Sie sich an, um Ihr Mobilgerät mit { -fxlockwise-brand-short-name } zu synchronisieren:
banner-promote-fxa-action-label = Anmelden
