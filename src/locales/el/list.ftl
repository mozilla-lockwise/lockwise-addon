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
-fxaccount-brand-name = Λογαριασμός Firefox

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Συνδέσεις
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Λογαριασμός
profile-menu-sign-in = Σύνδεση στο { -sync-brand-short-name }
profile-menu-connect = Σύνδεση συσκευής
profile-menu-faq = Συχνές ερωτήσεις
profile-menu-feedback = Αποστολή σχολίων
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Αδυναμία συγχρονισμού στοιχείων σύνδεσης.
error-notification-sync-button = Επανασύνδεση
error-notification-duplicate = Υπάρχει ήδη μια σύνδεση για { $title } με αυτό το όνομα χρήστη.
error-notification-duplicate-link = <a>Μετάβαση σε υπάρχουσα σύνδεση;</a>
all-items-get-started = Όταν αποθηκεύσετε έναν κωδικό πρόσβασης στο { -firefox-brand-name }, θα εμφανιστεί εδώ.
all-items-get-started-title = Δεν βρέθηκαν συνδέσεις.
all-items-get-started-footer = Δεν βλέπετε τις αποθηκευμένες συνδέσεις σας; <go>Μάθετε γιατί</go>
all-items-no-results-footer = <go>Μάθετε περισσότερα</go>
item-fields-title-input =
    .placeholder = π.χ. κύρια τράπεζα
item-fields-origin = Διεύθυνση ιστοσελίδας
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-button = Εκκίνηση
item-fields-username = Όνομα χρήστη
item-fields-username-input =
    .placeholder = name@example.com
item-fields-copy-username =
    .title = Αντιγραφή ονόματος χρήστη στο πρόχειρο
item-fields-password = Κωδικός πρόσβασης
item-fields-copy-password =
    .title = Αντιγραφή κωδικού πρόσβασης στο πρόχειρο
item-fields-notes = Σημειώσεις
item-summary-new-title = Νέα σύνδεση
item-summary-no-title = (χωρίς τίτλο)
item-summary-new-username = Εισάγετε τα διαπιστευτήρια σύνδεσής σας
item-summary-no-username = (χωρίς όνομα χρήστη)
item-summary-copy-username = Αντιγραφή ονόματος χρήστη
    .title = Αντιγραφή ονόματος χρήστη στο πρόχειρο
item-summary-copy-password = Αντιγραφή κωδικού πρόσβασης
    .title = Αντιγραφή κωδικού πρόσβασης στο πρόχειρο
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Αναζήτηση συνδέσεων
    .aria-label = Αναζήτηση συνδέσεων
add-item-button = Νέα σύνδεση
send-feedback-button = Αποστολή σχολίων
toolbar-go-home = Αρχική
toolbar-open-faq = Συχνές ερωτήσεις
account-summary-avatar =
    .alt = Εικόνα χρήστη
account-summary-account = Λογαριασμός
account-summary-options = Προτιμήσεις
account-summary-signout = Αποσύνδεση
intro-page-header-title = { -fxlockwise-brand-name } για υπολογιστές
intro-page-main-article-1-title = Εύκολη διαχείριση των λογαριασμών σας
intro-page-main-article-2-title = Γρήγορη πρόσβαση στις συνδέσεις σας
intro-page-main-article-3-title = Χειροκίνητη δημιουργία νέων συνδέσεων
item-details-heading-new = Δημιουργία νέας σύνδεσης
item-details-heading-edit = Επεξεργασία λεπτομερειών σύνδεσης
item-details-edit = Επεξεργασία
item-details-delete = Διαγραφή
item-details-save-new = Δημιουργία σύνδεσης
item-details-save-existing = Αποθήκευση αλλαγών
item-details-cancel = Ακύρωση
item-details-created = Δημιουργία: { $date }
item-details-modified = Τελευταία τροποποίηση: { $date }
item-details-last-used = Τελευταία χρήση: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } σύνδεση
       *[other] { $count } συνδέσεις
    }
sort-by = Ταξινόμηση κατά:
sort-by-name = Όνομα
sort-by-last-used = Τελευταία χρήση
sort-by-last-changed = Τελευταία αλλαγή

## Strings used in pop-up

manage-logins-button = Άνοιγμα { -fxlockwise-brand-short-name }
list-detail-button = Άνοιγμα ιστοσελίδας
default-banner = Πρόσφατες συνδέσεις.
get-started-banner = Δεν βρέθηκαν συνδέσεις.
item-details-panel-title = Λεπτομέρειες σύνδεσης
navigate-panel-backwards = Επιστροφή

## Strings used in dialog

modal-delete = Διαγραφή αυτής της σύνδεσης;
    .confirmLabel = Διαγραφή
    .cancelLabel = Ακύρωση
connect-another-device-dialog =
    .closeLabel = Κλείσιμο
    .allSetLabel = Όλα έτοιμα
connect-another-device = Σύνδεση άλλης συσκευής
access-on-another-computer = Πρόσβαση σε άλλο υπολογιστή
connect-a-firefox-account = Σύνδεση { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (ολοκληρώθηκε)
banner-promote-device-app-store =
    .title = Λήψη στο App Store
banner-promote-device-play-store =
    .title = Λήψη στο Google Play
banner-promote-fxa-action-label = Σύνδεση
