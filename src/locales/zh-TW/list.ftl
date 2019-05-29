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
-fxaccount-brand-name = Firefox 帳號

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = 登入資訊
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = 帳號
profile-menu-sign-in = 登入 { -sync-brand-short-name }
profile-menu-connect = 連結裝置
profile-menu-faq = 常見問題
profile-menu-feedback = 提供意見回饋
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = 無法同步登入資訊。
error-notification-sync-button = 重新連結
error-notification-duplicate = 使用該使用者名稱的 { $title } 登入資訊已經存在。
error-notification-duplicate-link = <a>要開啟現有登入資訊嗎？</a>
all-items-get-started = 當您儲存密碼到 { -firefox-brand-name } 後，就會顯示於此處。
all-items-get-started-title = 找不到登入資訊。
all-items-get-started-footer = 沒看到您儲存的登入資訊嗎？<go>看看原因</go>
all-items-no-results = 若您從其他裝置儲存了登入資訊，請確認已於該裝置登入並同步資料，才能在這邊看到。
all-items-no-results-title = 沒有符合的登入資訊。
all-items-no-results-footer = <go>了解更多資訊</go>
item-fields-title-input =
    .placeholder = 例如: 主要往來銀行
item-fields-origin = 網站網址
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = 此欄位內容需與要對應的網域完全相同（包含「https://」）。
item-fields-origin-button = 開啟
item-fields-username = 使用者名稱
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = 複製使用者名稱至剪貼簿
item-fields-password = 密碼
item-fields-copy-password =
    .title = 複製密碼至剪貼簿
item-fields-notes = 附註
item-summary-new-title = 新增登入資訊
item-summary-no-title = （無標題）
item-summary-new-username = 請輸入您的登入資訊
item-summary-no-username = （無使用者名稱）
item-summary-copy-username = 複製使用者名稱
    .title = 複製使用者名稱至剪貼簿
item-summary-copy-password = 複製密碼
    .title = 複製密碼至剪貼簿
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = 搜尋登入資訊
    .aria-label = 搜尋登入資訊
add-item-button = 新增登入資訊
send-feedback-button = 提供意見回饋
toolbar-go-home = 首頁
toolbar-open-faq = 常見問題
account-summary-avatar =
    .alt = 使用者大頭照
account-summary-account = 帳號
account-summary-options = 偏好設定
account-summary-signout = 登出
intro-page-header-title = { -fxlockwise-brand-name } 桌面版
intro-page-header-subtitle = 歡迎使用更好的登入資訊管理工具。我們的桌面版附加元件當中包含許多行動 App 中已推出的改善功能，讓您對登入資訊能有更完善的控制。
intro-page-main-article-1-title = 輕鬆管理帳號
intro-page-main-article-1-copy = 管理帳號密碼不是一門大學問。我們提供全新介面，讓事情變得更簡單。
intro-page-main-article-2-title = 快速開啟登入資訊
intro-page-main-article-2-copy = 只要點擊 { -firefox-brand-name } 工具列中的 { -fxlockwise-brand-short-name } 圖示，即可開啟登入資訊。
intro-page-main-article-3-title = 手動建立新的登入資訊
intro-page-main-article-3-copy = 透過手動加入登入資訊，現在起可以在 { -fxlockwise-brand-short-name } 加入任何您想要加入的帳號。
intro-page-footer-heading = 沒有看到您儲存的登入資訊？讓我們來幫忙。
intro-page-footer-copy = { -fxlockwise-brand-name } 可讓您餘手機上使用儲存至 { -firefox-brand-name } 的登入資訊。若您於其他裝置儲存登入資訊，可以註冊或登入 { -fxaccount-brand-name }，即可同步資訊到此裝置上。<go>了解更多資訊</go>
item-details-heading-new = 建立新的登入資訊
item-details-heading-edit = 編輯登入資訊
item-details-edit = 編輯
item-details-delete = 刪除
item-details-save-new = 建立登入資訊
item-details-save-existing = 儲存變更
item-details-cancel = 取消
item-details-created = 建立於: { $date }
item-details-modified = 最後修改於: { $date }
item-details-last-used = 最後使用於: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
       *[other] { $count } 筆登入資訊
    }
sort-by = 排序依照:
sort-by-name = 名稱
sort-by-last-used = 最近使用時間
sort-by-last-changed = 最近修改時間

## Strings used in pop-up

manage-logins-button = 開啟 { -fxlockwise-brand-short-name }
list-detail-button = 開啟網站
default-banner = 最近用過的登入資訊。
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
       *[other] 找到 { $count } 筆登入資訊。
    }
get-started-banner = 未找到登入資訊。
no-matching-banner = 沒有符合的登入資訊。
no-results-banner = 沒有找到目前網站的登入資訊。
item-details-panel-title = 登入詳細資訊
navigate-panel-backwards = 返回

## Strings used in dialog

modal-cancel-editing = 有未儲存的變更，要捨棄嗎？
    .confirmLabel = 捨棄變更
    .cancelLabel = 返回
modal-delete = 要刪除這筆登入資訊嗎？
    .confirmLabel = 刪除
    .cancelLabel = 取消
connect-another-device-dialog =
    .closeLabel = 關閉
    .allSetLabel = 準備好了！
connect-another-device = 連結另一部裝置
easily-access-logins = 從您的任一台裝置輕鬆取得登入資訊。
access-on-another-computer = 於另一台電腦使用
simply-sign-in-other-device = 只要於您的其他裝置登入至 { -fxaccount-brand-name }，即可同步登入資訊到該電腦。
download-mobile = 下載行動版 App
download-ios-android = { -fxlockwise-brand-name } 有 iOS 與 Android 版本。<learnmore>點擊此處</learnmore>可了解更多資訊，並傳送鏈結到您的手機上下載 App。
before-access = 請先連結 { -fxaccount-brand-name }，然後就可以於其他裝置上開啟登入資訊。
connect-a-firefox-account = 連結 { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = （已完成）
sync-requires-account = 若要同步登入資訊到其他裝置，請先<signin>登入或註冊 { -fxaccount-brand-name }</signin>。
ensure-logins-checked = 確認 { -sync-brand-short-name } 偏好設定中，勾選了「登入資訊」
setting-to-allow-sync = 若要將登入資訊同步到其他裝置，必須勾選此選項。<go>開啟 { -sync-brand-short-name } 偏好設定</go>
banner-promote-device = <bold>密碼隨身帶著走</bold> - 下載 iOS 或 Android 版本 App:
banner-promote-device-app-store =
    .title = 到 App Store 下載
banner-promote-device-play-store =
    .title = 到 Google Play 下載
banner-promote-fxa = <bold>密碼隨身帶著走</bold> - 註冊 { -fxaccount-brand-name } 帳號或登入，即可將 { -fxlockwise-brand-short-name } 同步至行動裝置:
banner-promote-fxa-action-label = 登入
