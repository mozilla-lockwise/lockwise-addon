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

-sync-brand-short-name = Sinkronisasi
header-logins-button = Masuk
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Akun
profile-menu-sign-in = Masuk ke { -sync-brand-short-name }
profile-menu-connect = Hubungkan Perangkat
profile-menu-faq = FAQ
profile-menu-feedback = Berikan Masukan
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Tidak dapat menyinkronkan log masuk.
error-notification-sync-button = Hubungkan kembali
error-notification-duplicate = Sebuah log masuk untuk { $title } dengan nama pengguna tersebut sudah ada.
error-notification-duplicate-link = <a>Masuk ke log masuk yang sudah ada?</a>
all-items-get-started = Ketika Anda menyimpan kata sandi di { -firefox-brand-name }, itu akan muncul di sini
all-items-get-started-title = Tidak ada log masuk ditemukan.
all-items-get-started-footer = Tidak melihat log masuk Anda yang disimpan? <go>Cari tahu alasannya</go>
all-items-no-results = Jika log masuk ini disimpan di perangkat lain, pastikan Anda telah masuk dan menyinkronkan perangkat itu untuk dapat melihatnya di sini.
all-items-no-results-title = Tidak ada log masuk yang cocok.
all-items-no-results-footer = <go>Pelajari selengkapnya</go>
item-fields-title-input =
    .placeholder = coth: bank utama
item-fields-origin = Alamat Situs Web
item-fields-origin-input =
    .placeholder = https://www.contoh.com
item-fields-origin-info-message = Pastikan domain sesuai dengan situs yang Anda referensikan (termasuk "https://").
item-fields-origin-button = Luncurkan
item-fields-username = Nama pengguna
item-fields-username-input =
    .placeholder = nama@contoh.com
item-fields-copy-username =
    .title = Salin nama pengguna ke papan klip
item-fields-password = Kata Sandi
item-fields-copy-password =
    .title = Salin kata sandi ke papan klip
item-fields-notes = Catatan
item-summary-new-title = Masukan Baru
item-summary-no-title = (tanpa judul)
item-summary-new-username = Masukkan identitas log masuk Anda
item-summary-no-username = (tanpa nama pengguna)
item-summary-copy-username = Salin Nama Pengguna
    .title = Salin nama pengguna ke papan klip
item-summary-copy-password = Salin Kata Sandi
    .title = Salin kata sandi pada papan klip
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Cari Log Masuk
    .aria-label = Cari Log Masuk
add-item-button = Log Masuk Baru
send-feedback-button = Berikan Saran
toolbar-go-home = Beranda
toolbar-open-faq = FAQ
account-summary-avatar =
    .alt = Avatar Pengguna
account-summary-account = Akun
account-summary-options = Preferensi
account-summary-signout = Keluar
intro-page-header-title = { -fxlockwise-brand-name } untuk Desktop
intro-page-header-subtitle =
    Selamat datang di manajemen log masuk yang lebih baik. Pengaya desktop kami menghadirkan banyak
    peningkatan yang terlihat di aplikasi seluler kami ke komputer Anda, dengan
    kendali lebih besar atas log masuk Anda.
intro-page-main-article-1-title = Pengelolaan akun Anda dengan mudah
intro-page-main-article-1-copy =
    Mengelola akun Anda seharusnya tak sesulit sains roket. Kami membuat sesuatu
    lebih mudah dengan antarmuka desktop baru.
intro-page-main-article-2-title = Akses cepat ke log masuk Anda
intro-page-main-article-2-copy =
    Klik ikon { -fxlockwise-brand-short-name } pada bilah alat di { -firefox-brand-name } untuk memunculkan
    pintu untuk mengakses log masuk Anda.
intro-page-main-article-3-title = Buat log masuk baru secara manual
intro-page-main-article-3-copy =
    Dengan tambahan log masuk manual, Anda dapat menyimpan akun apapun
    yang Anda inginkan di dalam { -fxlockwise-brand-short-name }.
intro-page-footer-heading = Tidak melihat log masuk Anda yang disimpan? Biarkan kami membantu.
intro-page-footer-copy =
    { -fxlockwise-brand-name } menyediakan akses ke log masuk yang telah Anda simpan di
    { -firefox-brand-name } di perangkat Anda. Jika log masuk Anda disimpan pada perangkat lain,
    Anda dapat menyinkronkan informasinya ke perangkat ini dengan masuk atau
    membuat { -fxaccount-brand-name }. <go>Pelajari Lebih Lanjut</go>
item-details-heading-new = Buat Log-Masuk Baru
item-details-heading-edit = Ubah Detil Masukan
item-details-edit = Ubah
item-details-delete = Hapus
item-details-save-new = Buat Masukan
item-details-save-existing = Simpan Perubahan
item-details-cancel = Batal
item-details-created = Dibuat pada: { $date }
item-details-modified = Terakhir diubah: { $date }
item-details-last-used = Terakhir digunakan: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
       *[other] { $count } log masuk
    }
sort-by = Urut berdasarkan:
sort-by-name = Nama
sort-by-last-used = Terakhir Digunakan
sort-by-last-changed = Terakhir Diubah

## Strings used in pop-up

manage-logins-button = Buka { -fxlockwise-brand-short-name }
list-detail-button = Buka Situs Web
default-banner = Info masuk yang baru digunakan.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
       *[other] { $count } log masuk ditemukan
    }
get-started-banner = Tidak ada log masuk ditemukan.
navigate-panel-backwards = Kembali

## Strings used in dialog

modal-delete = Hapus log-masuk ini?
    .confirmLabel = Hapus
    .cancelLabel = Batal
access-on-another-computer = Akses di komputer lain
download-mobile = Unduh aplikasi mobile
connect-a-firefox-account = Hubungkan { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (lengkap)
banner-promote-device-app-store =
    .title = Unduh di App Store
banner-promote-device-play-store =
    .title = Dapatkan di Google Play
banner-promote-fxa-action-label = Masuk
