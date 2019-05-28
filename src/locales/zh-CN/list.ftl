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
-fxaccount-brand-name = Firefox 账户

## All the following messages are localizable.

-sync-brand-short-name = 同步
header-logins-button = 登录信息
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = 账户
profile-menu-sign-in = 登录到{ -sync-brand-short-name }
profile-menu-connect = 连接设备
profile-menu-faq = 常见问题
profile-menu-feedback = 提供反馈
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = 无法同步登录信息
error-notification-sync-button = 重新连接
all-items-get-started-title = 找不到登录信息。
all-items-no-results-footer = <go>详细了解</go>
item-fields-origin = 网址
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-button = 前往
item-fields-username = 用户名
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = 复制用户名至剪贴板
item-fields-password = 密码
item-fields-copy-password =
    .title = 复制密码至剪贴板
item-fields-notes = 备注
item-summary-no-title = （无标题）
item-summary-new-username = 请输入您的登录信息
item-summary-no-username = （无用户名）
item-summary-copy-username = 复制用户名
    .title = 复制用户名至剪贴板
item-summary-copy-password = 复制密码
    .title = 复制密码至剪贴板
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = 搜索登录信息
    .aria-label = 搜索登录信息
send-feedback-button = 提供反馈
toolbar-go-home = 主页
toolbar-open-faq = 常见问题
account-summary-avatar =
    .alt = 用户头像
account-summary-options = 首选项
account-summary-signout = 退出
intro-page-header-title = { -fxlockwise-brand-name } 桌面版
item-details-edit = 编辑
item-details-delete = 删除
item-details-save-existing = 保存更改
item-details-cancel = 取消
item-details-created = 创建时间：{ $date }
item-details-modified = 最后修改：{ $date }
item-details-last-used = 上次使用：{ $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
       *[other] { $count } 条登录信息
    }
sort-by = 排序依照：
sort-by-name = 名称
sort-by-last-used = 上次使用
sort-by-last-changed = 最后修改

## Strings used in pop-up

manage-logins-button = 打开 { -fxlockwise-brand-short-name }
list-detail-button = 打开网站
default-banner = 最近用过的登录信息。
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
       *[other] 找到 { $count } 条登录信息。
    }
get-started-banner = 未找到登录信息。
no-matching-banner = 无匹配的登录信息。
item-details-panel-title = 登录详细信息
navigate-panel-backwards = 返回

## Strings used in dialog

connect-another-device = 连接其他设备
download-mobile = 下载移动版 App
connect-a-firefox-account = 连接 { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = （已完成）
banner-promote-device-app-store =
    .title = 到 App Store 下载
banner-promote-device-play-store =
    .title = 到 Google Play 下载
banner-promote-fxa-action-label = 登录
