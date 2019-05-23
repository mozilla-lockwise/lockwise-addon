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
-fxaccount-brand-name = Tài khoản Firefox

## All the following messages are localizable.

-sync-brand-short-name = Đồng bộ hóa
header-logins-button = Đăng nhập
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Tài khoản
profile-menu-sign-in = Đăng nhập vào { -sync-brand-short-name }
profile-menu-connect = Kết nối thiết bị
profile-menu-faq = Câu hỏi thường gặp
profile-menu-feedback = Gửi phản hồi
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Không thể đồng bộ hoá các đăng nhập.
error-notification-sync-button = Kết nối lại
error-notification-duplicate = Một đăng nhập cho { $title } với tên người dùng đó đã tồn tại.
error-notification-duplicate-link = <a>Đi đến đăng nhập hiện tại?</a>
all-items-get-started = Khi bạn lưu mật khẩu trong { -firefox-brand-name }, nó sẽ hiển thị ở đây.
all-items-get-started-title = Không tìm thấy thông tin đăng nhập.
all-items-get-started-footer = Không thấy thông tin đăng nhập đã lưu của bạn? <go>Tìm hiểu lý do tại sao</go>
all-items-no-results = Nếu thông tin đăng nhập này được lưu trên thiết bị khác, hãy đảm bảo bạn đã đăng nhập và đồng bộ hóa trên thiết bị đó để xem tại đây.
all-items-no-results-title = Không có thông tin đăng nhập phù hợp.
all-items-no-results-footer = <go>Tìm hiểu thêm</go>
item-fields-origin = Địa chỉ trang web
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-button = Khởi chạy
item-fields-username = Tên đăng nhập
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = Sao chép tên người dùng vào clipboard
item-fields-password = Mật khẩu
item-fields-copy-password =
    .title = Sao chép mật khẩu vào clipboard
item-fields-notes = Ghi chú
item-summary-new-title = Đăng nhập mới
item-summary-no-title = (không tiêu đề)
item-summary-new-username = Nhập thông tin đăng nhập của bạn
item-summary-no-username = (không có tên người dùng)
item-summary-copy-username = Sao chép tên người dùng
    .title = Sao chép tên người dùng vào clipboard
item-summary-copy-password = Sao chép mật khẩu
    .title = Sao chép mật khẩu vào clipboard
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Tìm kiếm đăng nhập
    .aria-label = Tìm kiếm đăng nhập
add-item-button = Đăng nhập mới
send-feedback-button = Gửi phản hồi
toolbar-go-home = Trang chủ
toolbar-open-faq = Câu hỏi thường gặp
account-summary-avatar =
    .alt = Ảnh đại diện người dùng
account-summary-account = Tài khoản
account-summary-options = Tùy chỉnh
account-summary-signout = Đăng xuất
intro-page-header-title = { -fxlockwise-brand-name } cho máy tính để bàn
intro-page-main-article-1-title = Quản lý tài khoản của bạn dễ dàng
intro-page-main-article-2-title = Truy cập nhanh vào thông tin đăng nhập của bạn
intro-page-main-article-2-copy =
    Nhấp vào biểu tượng { -fxlockwise-brand-short-name } từ thanh công cụ trong { -firefox-brand-name } để hiển thị
    khóa cửa để truy cập đăng nhập của bạn.
intro-page-main-article-3-title = Tạo thông tin đăng nhập mới thủ công
intro-page-main-article-3-copy =
    Với việc thêm thông tin đăng nhập thủ công, giờ đây bạn có thể lưu trữ bất kỳ tài khoản nào
    bạn muốn trong { -fxlockwise-brand-short-name }.
intro-page-footer-heading = Không thấy thông tin đăng nhập đã lưu của bạn? Hãy để chúng tôi giúp.
item-details-heading-new = Tạo đăng nhập mới
item-details-heading-edit = Chỉnh sửa chi tiết đăng nhập
item-details-edit = Chỉnh sửa
item-details-delete = Xóa
item-details-save-new = Tạo đăng nhập
item-details-save-existing = Lưu thay đổi
item-details-cancel = Hủy bỏ
item-details-created = Đã tạo: { $date }
item-details-modified = Sửa đổi lần cuối: { $date }
item-details-last-used = Được sử dụng lần cuối: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
       *[other] { $count } đăng nhập
    }
sort-by = Sắp xếp theo:
sort-by-name = Tên
sort-by-last-used = Sử dụng lần cuối
sort-by-last-changed = Thay đổi lần cuối

## Strings used in pop-up

manage-logins-button = Mở { -fxlockwise-brand-short-name }
list-detail-button = Mở trang web
default-banner = Đăng nhập được sử dụng gần đây.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
       *[other] Đã tìm thấy { $count } thông tin đăng nhập
    }
get-started-banner = Không tìm thấy thông tin đăng nhập.
no-matching-banner = Không có thông tin đăng nhập phù hợp.
no-results-banner = Không tìm thấy thông tin đăng nhập cho trang web hiện tại.
item-details-panel-title = Chi tiết đăng nhập
navigate-panel-backwards = Quay lại

## Strings used in dialog

modal-cancel-editing = Những thay đổi chưa được lưu. Hủy bỏ chúng?
    .confirmLabel = Hủy bỏ thay đổi
    .cancelLabel = Quay lại
modal-delete = Xoá thông tin đăng nhập này?
    .confirmLabel = Xóa
    .cancelLabel = Hủy bỏ
connect-another-device = Kết nối thiết bị khác
easily-access-logins = Dễ dàng truy cập vào thông tin đăng nhập của bạn từ bất kỳ thiết bị nào.
access-on-another-computer = Truy cập trên một máy tính khác
simply-sign-in-other-device = Chỉ cần đăng nhập vào { -fxaccount-brand-name } trên thiết bị khác của bạn để đồng bộ hóa thông tin đăng nhập của bạn với máy tính đó.
download-mobile = Tải xuống ứng dụng di động
download-ios-android = { -fxlockwise-brand-name } khả dụng trên cả iOS và Android. <learnmore>Nhấp vào đây</learnmore> để tìm hiểu thêm và gửi liên kết tới điện thoại của bạn để tải xuống ứng dụng.
before-access = Trước khi bạn có thể truy cập thông tin đăng nhập của mình trên một thiết bị khác, bạn sẽ cần kết nối { -fxaccount-brand-name }.
connect-a-firefox-account = Kết nối { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (hoàn tất)
sync-requires-account = Để đồng bộ hóa thông tin đăng nhập của bạn với một thiết bị khác, bạn sẽ cần <signin>đăng nhập hoặc tạo { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Đảm bảo hộp kiểm “Đăng nhập” được chọn trong tùy chọn { -sync-brand-short-name }
banner-promote-device = <bold>Mang mật khẩu của bạn đi khắp mọi nơi</bold> - tải xuống ứng dụng của chúng tôi trên iOS hoặc Android:
banner-promote-device-app-store =
    .title = Tải xuống trên App Store
banner-promote-device-play-store =
    .title = Tải về trên Google Play
banner-promote-fxa = <bold>Mang mật khẩu của bạn đi khắp mọi nơi</bold> - tạo { -fxaccount-brand-name } hoặc Đăng nhập để đồng bộ hóa với { -fxlockwise-brand-short-name } trên thiết bị di động:
banner-promote-fxa-action-label = Đăng nhập
