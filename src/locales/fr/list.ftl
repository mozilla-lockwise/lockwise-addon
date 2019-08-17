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
-fxaccount-brand-name =
    { $capitalization ->
       *[lowercase] compte Firefox
        [uppercase] Compte Firefox
    }

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Identifiants
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Mon compte
profile-menu-sign-in = Se connecter à { -sync-brand-short-name }
profile-menu-connect = Connecter un appareil
profile-menu-faq = FAQ
profile-menu-feedback = Donner votre avis
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Impossible de synchroniser les identifiants.
error-notification-sync-button = Se reconnecter
error-notification-duplicate = Un identifiant pour { $title } avec ce nom d’utilisateur existe déjà.
error-notification-duplicate-link = <a>Accéder à l’identifiant existant ?</a>
all-items-get-started = Lorsque vous enregistrez un mot de passe dans { -firefox-brand-name }, il apparaît ici.
all-items-get-started-title = Aucun identifiant trouvé.
all-items-get-started-footer = Les identifiants que vous avez enregistrés n’apparaissent pas ici ? <go>Découvrez pourquoi</go>
all-items-no-results = Si ces identifiants sont enregistrés sur un autre appareil, assurez-vous d’être connecté⋅e et d’avoir activé la synchronisation sur celui-ci afin de les voir ici.
all-items-no-results-title = Aucun identifiant ne correspond.
all-items-no-results-footer = <go>En savoir plus</go>
item-fields-title-input =
    .placeholder = par ex. banque principale
item-fields-origin = Adresse du site web
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Assurez-vous que cela correspond au domaine exact du site web que vous recherchez (« https:// » inclus).
item-fields-origin-button = Ouvrir
item-fields-username = Nom d’utilisateur
item-fields-username-input =
    .placeholder = nom@example.com
item-fields-copy-username =
    .title = Copier le nom d’utilisateur dans le presse-papiers
item-fields-password = Mot de passe
item-fields-copy-password =
    .title = Copier le mot de passe dans le presse-papiers
item-fields-notes = Notes
item-summary-new-title = Nouvel identifiant
item-summary-no-title = (pas de titre)
item-summary-new-username = Saisissez vos identifiants de connexion
item-summary-no-username = (aucun nom d’utilisateur)
item-summary-copy-username = Copier le nom d’utilisateur
    .title = Copier le nom d’utilisateur dans le presse-papiers
item-summary-copy-password = Copier le mot de passe
    .title = Copier le mot de passe dans le presse-papiers
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Rechercher des identifiants
    .aria-label = Rechercher des identifiants
add-item-button = Nouvel identifiant
send-feedback-button = Donner votre avis
toolbar-go-home = Accueil
toolbar-open-faq = Questions fréquentes
account-summary-avatar =
    .alt = Avatar de l’utilisateur
account-summary-account = Compte
account-summary-options = Préférences
account-summary-signout = Se déconnecter
intro-page-header-title = { -fxlockwise-brand-name } pour ordinateur
intro-page-header-subtitle = Vous allez profiter d’une meilleure gestion des identifiants. Notre extension apporte à votre ordinateur de bureau beaucoup des améliorations constatées dans nos applications mobiles, avec un meilleur contrôle de vos identifiants.
intro-page-main-article-1-title = Gestion facile de vos comptes
intro-page-main-article-1-copy = La gestion de vos comptes ne devrait pas être un casse-tête. Nous avons rendu les choses plus faciles avec notre nouvelle interface pour ordinateur.
intro-page-main-article-2-title = Accès rapide à vos identifiants
intro-page-main-article-2-copy = Cliquez sur l’icône { -fxlockwise-brand-short-name } dans la barre d’outils de { -firefox-brand-name } pour afficher notre panneau d’accès à vos identifiants.
intro-page-main-article-3-title = Ajout manuel de nouveaux identifiants
intro-page-main-article-3-copy =
    Avec l’ajout manuel d’identifiants, vous pouvez désormais stocker n’importe quel compte
    de votre choix dans { -fxlockwise-brand-short-name }.
intro-page-footer-heading = Vous ne voyez pas vos identifiants enregistrés ? Laissez-nous vous aider.
intro-page-footer-copy =
    { -fxlockwise-brand-name } donne accès aux identifiants enregistrés dans
    { -firefox-brand-name } sur votre appareil. Si vos identifiants sont stockés sur un autre appareil,
    vous pouvez synchroniser vos informations sur cet appareil en vous connectant ou
    en créant un { -fxaccount-brand-name }. <go>En savoir plus</go>
item-details-heading-new = Créer un nouvel identifiant
item-details-heading-edit = Modifier les détails de l’identifiant
item-details-edit = Modifier
item-details-delete = Supprimer
item-details-save-new = Créer l’identifiant
item-details-save-existing = Enregistrer les modifications
item-details-cancel = Annuler
item-details-created = Créé le : { $date }
item-details-modified = Dernière modification le : { $date }
item-details-last-used = Dernière utilisation le : { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } identifiant
       *[other] { $count } identifiants
    }
sort-by = Trier par :
sort-by-name = Nom
sort-by-last-used = Dernière utilisation
sort-by-last-changed = Dernière modification

## Strings used in pop-up

manage-logins-button = Ouvrir { -fxlockwise-brand-short-name }
list-detail-button = Ouvrir le site web
default-banner = Identifiant récemment utilisés.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } identifiant trouvé
       *[other] { $count } identifiants trouvés
    }
get-started-banner = Aucun identifiant trouvé.
no-matching-banner = Aucun identifiant correspondant.
no-results-banner = Aucun identifiant trouvé pour le site web actuel.
item-details-panel-title = Détails de l’identifiant
navigate-panel-backwards = Retour

## Strings used in dialog

modal-cancel-editing = Certaines modifications ne sont pas enregistrées. Les abandonner ?
    .confirmLabel = Abandonner les modifications
    .cancelLabel = Revenir en arrière
modal-delete = Supprimer cet identifiant ?
    .confirmLabel = Supprimer
    .cancelLabel = Annuler
connect-another-device-dialog =
    .closeLabel = Fermer
    .allSetLabel = Terminer
connect-another-device = Connecter un autre appareil
easily-access-logins = Accédez facilement à vos identifiants depuis n’importe quel appareil.
access-on-another-computer = Accès sur un autre ordinateur
simply-sign-in-other-device = Il suffit de vous connecter à votre { -fxaccount-brand-name } sur votre autre appareil pour synchroniser vos identifiants de connexion avec cet ordinateur.
download-mobile = Télécharger l’application mobile
download-ios-android = { -fxlockwise-brand-name } est disponible sur iOS comme sur Android. <learnmore>Cliquez ici</learnmore> pour en savoir plus et pour envoyer un lien sur votre téléphone afin de télécharger l’application.
before-access = Avant de pouvoir accéder à vos identifiants sur un autre appareil, vous devez vous connecter à un { -fxaccount-brand-name }.
connect-a-firefox-account = Connectez-vous à un { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (terminé)
sync-requires-account = Pour synchroniser vos identifiants sur un autre appareil, vous devez <signin>vous connecter ou créer un { -fxaccount-brand-name }</signin>.
ensure-logins-checked = Assurez-vous que la case à cocher « Identifiants » est sélectionnée dans les préférences de { -sync-brand-short-name }
setting-to-allow-sync = Afin de permettre à vos identifiants d’être synchronisés avec d’autres appareils, ce paramètre doit être activé. <go>Ouvrir les préférences de { -sync-brand-short-name }</go>
banner-promote-device = <bold>Emportez vos mots de passe partout</bold> — téléchargez notre application pour iOS ou Android :
banner-promote-device-app-store =
    .title = Télécharger dans l’App Store
banner-promote-device-play-store =
    .title = Disponible sur Google Play
banner-promote-fxa = <bold>Emportez vos mots de passe partout</bold> — créez un { -fxaccount-brand-name } ou connectez-vous pour lancer la synchronisation avec { -fxlockwise-brand-short-name } sur votre mobile :
banner-promote-fxa-action-label = Connexion
