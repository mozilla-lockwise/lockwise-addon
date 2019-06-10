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
-fxaccount-brand-name = Amiḍan Firefox

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Inekcumen
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Amiḍan
profile-menu-sign-in = Qqen qer { -sync-brand-short-name }
profile-menu-connect = Qqen ibenk
profile-menu-faq = Isteqsiyen FAQ
profile-menu-feedback = Mudd-d tikti
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Ur izmir ara ad yemtawi inekcumen.
error-notification-sync-button = Ales tuqqna
error-notification-duplicate = Asulay i { $title } s yisem-a yella yakan.
error-notification-duplicate-link = <a>Kcem ɣer usulay yellan?</a>
all-items-get-started = Tick iteskelseḍ awal uffir deg { -firefox-brand-name }, ad d-iban dagi.
all-items-get-started-title = Ulac asulay yettwafen
all-items-get-started-footer = Isulayen i teskelseḍ ur d-ttbanen ara dagi? <go>Wali acimi</go>
all-items-no-results-title = Ulac asulay immenṭaḍen.
all-items-no-results-footer = <go>Issin ugar</go>
item-fields-title-input =
    .placeholder = amedya. tabankat tagejdant
item-fields-origin = Tansa n usmel web
item-fields-origin-input =
    .placeholder = https://www.amedya.com
item-fields-origin-info-message = Ḍmen d akken aya yemmenṭaḍ d taɣult tsdidt n usmel web i tettnadiḍ (“https://” yedda).
item-fields-origin-button = Senker
item-fields-username = Isem n useqdac
item-fields-username-input =
    .placeholder = isem@amedya.com
item-fields-copy-username =
    .title = Nɣel isem n useqdac ɣef afus
item-fields-password = Awal uffir
item-fields-copy-password =
    .title = Nɣel awal uffir ɣef afus
item-fields-notes = Tizmilin
item-summary-new-title = Anekcum amaynut
item-summary-no-title = (ulac azwel)
item-summary-new-username = Sekcem inekcumen-ik n tuqqna
item-summary-no-username = (ulac isem n useqdac)
item-summary-copy-username = Nɣel isem n useqdac
    .title = Nɣel isem n useqdac ɣef afus
item-summary-copy-password = Nɣel awal uffir
    .title = Nɣele awal uffir ɣef afus
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Nadi isulayen
    .aria-label = Nadi isulayen
add-item-button = Asulay amaynut
send-feedback-button = Mudd-d tikti
toolbar-go-home = Asebter agejdan
toolbar-open-faq = Isteqsiyen FAQ
account-summary-avatar =
    .alt = Avaṭar n useqdac
account-summary-account = Amiḍan
account-summary-options = Ismenyifen
account-summary-signout = Ffeɣ
intro-page-header-title = { -fxlockwise-brand-name } i uselkim
intro-page-main-article-1-title = Asefrek fessusen n yimiḍanen-ik
intro-page-main-article-1-copy = Asefrek n yimiḍanen-ik ur ila ara ad yili d taṛuẓi n uqerru. Nerra timsal fessus-it s ugrudem maynut deg uselkim.
intro-page-main-article-2-title = Anekcum uzrib qer isulayen-ik
intro-page-main-article-3-title = Rnu isulayen imaynuten
intro-page-footer-heading = Ur tettwaliḍ ara isulayen-ik yettwaskelsen? Eǧǧ-aɣ ad ak-nmudd afus.
item-details-heading-new = Rnu asulay amaynut
item-details-heading-edit = Ẓreg talqayt n usulay
item-details-edit = Ẓreg
item-details-delete = Kkes
item-details-save-new = Rnu asulay
item-details-save-existing = Sekles asulay
item-details-cancel = Sefsex
item-details-created = Yettwarna deg: { $date }
item-details-modified = Abeddel aneggaru deg: { $date }
item-details-last-used = Aseqdec aneggaru deg: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } n usulay
       *[other] { $count } n isulayen
    }
sort-by = Smizzwer s:
sort-by-name = Isem
sort-by-last-used = Aseqdec aneggaru
sort-by-last-changed = Abeddel aneggaru

## Strings used in pop-up

manage-logins-button = Ldi { -fxlockwise-brand-short-name }
list-detail-button = Ldi asmel web
default-banner = Isulayen yettwasqedcen taggara-a
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } n usulay yettwafen
       *[other] { $count } n isulayen yettwafen
    }
get-started-banner = Ulac asulay yettwafen
no-matching-banner = Ulac asulay yemmeṭaḍen
no-results-banner = Ulac asulya yettwafen i usmel-agi web.
item-details-panel-title = Talqayt n usulay
navigate-panel-backwards = Uɣal

## Strings used in dialog

modal-cancel-editing = Kra n yibeddilen ur ttwaskelsen ara. Suref ?
    .confirmLabel = Suref abeddel
    .cancelLabel = Uɣal
modal-delete = Kkes asulay-a?
    .confirmLabel = Kkes
    .cancelLabel = Sefsex
connect-another-device-dialog =
    .closeLabel = Mdel
    .allSetLabel = Fak
connect-another-device = Qqen ibenk-nniḍen
easily-access-logins = Anekcum fessusen ɣer yisulayen-ik seg yal ibenk.
access-on-another-computer = Kcem seg uselkim-nniḍen
simply-sign-in-other-device = qqen kan ɣer { -fxaccount-brand-name } yinek deg yibenk-nniḍen akken ad mtawin isulayen-ik n tuqqna akked uselkim-a.
download-mobile = Sider asnas aziraz
download-ios-android = { -fxlockwise-brand-name } yelal deg iOS akked Android. <learnmore>Sit dagi</learnmore> akken ad tissineḍ ugar daɣen ad tazneḍ aseɣwen deg tiliɣri-ik akken ad tessidreḍ asnas.
before-access = Send ad tizmired ad tekcmeḍ ɣer Avisulayen-ik deg yibenk-nniḍen, ilaq ad teqqneḍ ɣer { -fxaccount-brand-name }.
connect-a-firefox-account = Qqen ɣer { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (immed)
ensure-logins-checked = Ḍmen d akken taxxam n ṛṛcem "Isulayen" tetwafren deg yismenyifen n { -sync-brand-short-name }
banner-promote-device = <bold>Awi yid-k awalen-k uffiren</bold>  - Sider asnas-nneɣ iOS neɣ Android :
banner-promote-device-app-store =
    .title = Sider si App Store
banner-promote-device-play-store =
    .title = Yella di Google Play
banner-promote-fxa = <bold>Awi yid-k awalen-ik uffiren deg yal amḍiq</bold> - rnu yiwen { -fxaccount-brand-name } neɣ qqen akken ad temtawiḍ d { -fxlockwise-brand-short-name } dege uziraz-ik :
banner-promote-fxa-action-label = Kcem
