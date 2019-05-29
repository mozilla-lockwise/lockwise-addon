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
error-notification-duplicate = 已存在使用该用户名的 { $title } 登录信息。
error-notification-duplicate-link = <a>要转至现有登录信息吗？</a>
all-items-get-started = 当您保存密码到 { -firefox-brand-name } 后，就会显示于此。
all-items-get-started-title = 找不到登录信息。
all-items-get-started-footer = 看不到您保存的登录信息？<go>寻找原因</go>
all-items-no-results = 若此登录信息保存在其他设备上，请确认您已在该设备登录并同步数据，以便在此查看。
all-items-no-results-title = 没有匹配的登录信息。
all-items-no-results-footer = <go>详细了解</go>
item-fields-title-input =
    .placeholder = 例如：主要往来银行
item-fields-origin = 网址
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = 请确保此字段内容与相对应的域名完全相同（包含 “https://” ）。
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
account-summary-account = 账户
account-summary-options = 首选项
account-summary-signout = 退出
intro-page-header-title = { -fxlockwise-brand-name } 桌面版
intro-page-main-article-1-title = 轻松管理账号
intro-page-main-article-2-title = 快速访问登录信息
intro-page-main-article-2-copy = 只需点击 { -firefox-brand-name } 工具栏中的 { -fxlockwise-brand-short-name } 图标，即可访问登录信息。
intro-page-main-article-3-title = 手动创建新的登录信息
intro-page-main-article-3-copy = 通过手动添加登录信息，现在起可在 { -fxlockwise-brand-short-name } 存储任何账号。
intro-page-footer-heading = 看不到您保存的登录信息？让我们来帮忙。
item-details-heading-new = 创建新的登录信息
item-details-heading-edit = 编辑登录信息
item-details-edit = 编辑
item-details-delete = 删除
item-details-save-new = 创建登录信息
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
no-matching-banner = 没有匹配的登录信息。
no-results-banner = 未找到当前网站的登录信息。
item-details-panel-title = 登录详细信息
navigate-panel-backwards = 返回

## Strings used in dialog

modal-cancel-editing = 有尚未保存的更改，要丢弃吗？
    .confirmLabel = 丢弃更改
    .cancelLabel = 返回
modal-delete = 删除此登录信息？
    .confirmLabel = 删除
    .cancelLabel = 取消
connect-another-device-dialog =
    .closeLabel = 关闭
    .allSetLabel = 设置完毕
connect-another-device = 连接其他设备
easily-access-logins = 从您的任一设备轻松访问登录信息。
access-on-another-computer = 在另一台计算机访问
simply-sign-in-other-device = 只需在您的其他设备登录 { -fxaccount-brand-name }，即可同步登录信息到该计算机。
download-mobile = 下载移动版 App
download-ios-android = { -fxlockwise-brand-name } 有 iOS 与 Android 版本。<learnmore>点击此处</learnmore>可详细了解，并发送链接到您的手机以下载该 App。
before-access = 连接 { -fxaccount-brand-name }后，即可在其他设备上访问登录信息。
connect-a-firefox-account = 连接 { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = （已完成）
sync-requires-account = 若要同步登录信息至其他设备，请先<signin>登录或注册 { -fxaccount-brand-name }</signin>
ensure-logins-checked = 确认{ -sync-brand-short-name }首选项中，勾选了“登录信息”
setting-to-allow-sync = 要将登录信息同步至其他设备，必须勾选此选项。<go>打开{ -sync-brand-short-name }首选项</go>
banner-promote-device = <bold>将您的密码随身带着走</bold> - 下载 iOS 或 Android 版本 App：
banner-promote-device-app-store =
    .title = 到 App Store 下载
banner-promote-device-play-store =
    .title = 到 Google Play 下载
banner-promote-fxa = <bold>将您的密码随身带着走</bold> - 创建 { -fxaccount-brand-name } 账户或登录，即可将 { -fxlockwise-brand-short-name } 同步至移动设备：
banner-promote-fxa-action-label = 登录
