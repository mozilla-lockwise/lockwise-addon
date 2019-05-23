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
header-logins-button = Kitikirisaxik molojri'ïl
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Rub'i' taqoya'l
profile-menu-sign-in = Titz'ib'äx b'i'aj pa { -sync-brand-short-name }
profile-menu-connect = Tokisäx jun Okisab'äl
profile-menu-faq = FAQ
profile-menu-feedback = Keya' taq Na'oj
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Man tikirel ta yexim kitikirisaxik molojri'ïl.
error-notification-sync-button = Tokisäx chik
error-notification-duplicate = K'o chik rub'i' okisanel richin { $title } rik'in ri b'i'aj ri'.
error-notification-duplicate-link = <a>¿La nib'e pa ri molojri'ïl k'o chik?</a>
all-items-get-started = Toq nayäk jun ewan tzij pa { -firefox-brand-name }, xtiq'alajin pe wawe'.
all-items-get-started-title = Majun kitikirisaxik molojri'ïl xilitäj.
all-items-get-started-footer = ¿La man ye'atz'ët ta ri kitikirisaxik molojri'ïl e'ayakon? <go>Tawila' achike ruma</go>
all-items-no-results = We niyak re rutikirisaxik molojri'ïl re' pa jun chik okisab'äl, tatz'eta' chi xatikirisaj molojri'ïl chuqa' xaxïm pa ri okisab'äl ri' richina yatikïr natz'ët wawe'.
all-items-no-results-title = Man nikik'äm ta ri kitikirisaxik molojri'ïl.
all-items-no-results-footer = <go>Tetamäx ch'aqa' chik</go>
item-fields-title-input =
    .placeholder = tz'et. nab'ey yakb'äl
item-fields-origin = Rochochib'al Ajk'amaya'l Ruxaq
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Tatz'eta' chi nuk'äm ri' rik'in ri jikïl rajk'amal ajk'amaya'l ruxaq, ri nuk'üt (ke ri' chuqa' “https://”).
item-fields-origin-button = Rokisaxik
item-fields-username = Rub'i' winäq
item-fields-username-input =
    .placeholder = b'i'aj@example.com
item-fields-copy-username =
    .title = Tiyak ri rub'i' winäq pa molwuj
item-fields-password = Ewan tzij
item-fields-copy-password =
    .title = Tiwachib'ëx ri ewan tzij pa molwuj
item-fields-notes = Ch'utitzijol
item-summary-new-title = K'ak'a' Rutikirisaxik Molojri'ïl
item-summary-no-title = (majun b'i'aj)
item-summary-new-username = Ke'atz'ib'aj ri ruwujil rutikirisaxik molojri'ïl
item-summary-no-username = (majun rub'i' winäq)
item-summary-copy-username = Tiwachib'ëx Rub'i' Winäq
    .title = Tiwachib'ëx ri rub'i' winäq pa molwuj
item-summary-copy-password = Tiwachib'ëx Ewan Tzij
    .title = Tiwachib'ëx ri ewan tzij pa molwuj
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Kitikirisaxik Molojri'ïl Nikanöx
    .aria-label = Kitikirisaxik Molojri'ïl Nikanöx
add-item-button = K'ak'a' Rutikirisaxik Molojri'ïl
send-feedback-button = Keya' taq Na'oj
toolbar-go-home = Tikirib'äl
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Ruwachib'al Okisanel
account-summary-account = Rub'i' taqoya'l
account-summary-options = Taq ajowab'äl
account-summary-signout = Titz'apïx Molojri'ïl
intro-page-header-title = { -fxlockwise-brand-name } richin Ajch'atal
intro-page-main-article-1-title = Aninäq ye'anuk'samajij ri kib'i' ataqoya'l
intro-page-main-article-1-copy =
    Manta runuk'samaj jun chik ruwach'ulew toq yenuk'samajij ri kib'i'a ataqoya'l. Xeqab'än jujun taq wachinäq
    man k'ayew ta rik'in ri k'ak'a' ajch'atal qak'amal.
intro-page-main-article-2-title = Chanin okem pa kitikirisaxik amolojri'ïl
item-details-heading-new = Titz'uk K'ak'a' Rutikirixaxik Molojri'ïl
item-details-heading-edit = Tinuk' Rub'anikil Rutikirisaxik Molojri'ïl
item-details-edit = Tinuk'
item-details-delete = Tiyuj
item-details-save-new = Titz'uk Rutikirisaxik Molojri'ïl
item-details-save-existing = Keyak taq Jaloj
item-details-cancel = Tiq'at
item-details-created = Xtz'uk: { $date }
item-details-modified = Ruk'isib'äl Mul Xjal: { $date }
item-details-last-used = Ruk'isib'äl Mul Xokisäx: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } rutikirisaxik molojri'ïl
       *[other] { $count } kitikirisaxik molojri'ïl
    }
sort-by = Tichol chi:
sort-by-name = B'i'aj
sort-by-last-used = Ruk'isib'äl Mul Xokisäx
sort-by-last-changed = Ruk'isib'äl Mul Xjal

## Strings used in pop-up

manage-logins-button = Tijaq { -fxlockwise-brand-short-name }
list-detail-button = Tijaq Ajk'amaya'l Ruxaq
default-banner = Kitikirisaxik molojri'ïl k'a ri' ke'okisäx.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } rutikirisaxik molojri'ïl xilitäj
       *[other] { $count } kitikirisaxik molojri'ïl xe'ilitäj
    }
get-started-banner = Majun kitikirisaxik molojri'ïl xe'ilitäj.
no-matching-banner = Man nikik'äm ta ki ri kitikirisaxik molojri'ïl.
no-results-banner = Majun kitikirisaxik molojri'ïl xe'ilitäj richin re ajk'amaya'l ruxaq re'.
item-details-panel-title = Taq Rub'anikil Rutikirisaxik Molojri'ïl
navigate-panel-backwards = Titzolin

## Strings used in dialog

modal-delete = ¿La niyuj re rutikirisaxik molojri'ïl re'?
    .confirmLabel = Tiyuj
    .cancelLabel = Tiq'at
connect-another-device = Tokisäx jun chik okisab'äl
connect-a-firefox-account = Tokisäx pa { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (tz'aqät)
banner-promote-device-app-store =
    .title = Tiqasäx pe pa ri App Store
banner-promote-device-play-store =
    .title = Tik'ul pe pa Google Play
banner-promote-fxa-action-label = Titikirisäx Molojri'ïl
