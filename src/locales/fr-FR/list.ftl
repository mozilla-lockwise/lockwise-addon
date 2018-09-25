# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## common

document =
  .title = Enregistrements Lockbox

all-items-get-started =
  Lorsce que vous ajoutez un compte, Il est automatiquement affiché ici.

all-items-no-results = Aucun résultats

item-fields-title = Nom
item-fields-title-input =
  .placeholder = p. ex. banque primaire
item-fields-origin = Adresse du site web
item-fields-origin-input =
  .placeholder = www.exemple.fr
item-fields-username = Nom d'utilisateur
item-fields-username-input =
  .placeholder = nom@exemple.fr
item-fields-copy-username =
  .title = Copier le nom d'utilisateur dans le presse-papier
item-fields-password = Mot de passe
item-fields-copy-password =
  .title = Copier le mot de passe dans le presse-papier
item-fields-notes = Notes

item-summary-new-title = Nouvel enregistrement
item-summary-title =
  { $length ->
     [0]     (pas de nom de site)
    *[other] { $title }
  }

item-summary-new-username = (entrer vos informations de connexion)
item-summary-username =
  { $length ->
     [0]     (pas de nom d\'utilisateur)
    *[other] { $username }
  }

item-summary-copy-username = Copier Nom d'utilisateur
  .title = Coper le nom d'utilisateur dans le presse-papier
item-summary-copy-password = Copier Mot de passe
  .title = Copier le mot de passe dans le presse-papier

item-filter =
  .placeholder = Recherche Lockbox

## manage

add-item-button = +
  .title = Nouvel enregistrement

send-feedback-button = Fournir retour utilisateur

toolbar-go-home = Accueil
toolbar-open-faq = FAQ

breadcrumbs-item-new = Nouvel enregistrement
breadcrumbs-item =
  { $length ->
     [0]     (pas de nom de site)
    *[other] { $title }
  }

account-summary-account = Compte
account-summary-options = Préférences
account-summary-signout = Déconnexion

intro-page-step-1 =
  Sauvegarder les infos de nom d'utilisateur et de mot de passe pour créer une entrée { product-title }.

  .title = Ajouter l'information de login à { product-title }

intro-page-step-2 =
  Cliquer sur l'icône de { product-title } pour voir toutes informations que vous avez enregistré.

  .title = Accédez directement à vos identifiants

intro-page-step-3 =
  Copiez les informations d'une entrée pour vous connecter directement depuis Firefox.

  .title = Ouvrir une session à partir de { product-title }

homepage-title = { product-tagline }

homepage-linkaccount-title = Ajoutez une sécurité et une commodité sérieuses.
homepage-linkaccount-description =
    Créez maintenant un compte Firefox - ou ajoutez { product-title } à un compte
    éxistant - pour protéger vos noms d'utilisateurs avec le plus fort cryptage possible
    disponible et synchronisez les infos de votre { product-title } entre vos périphériques.

homepage-linkaccount-action-create = Créer Compte
homepage-linkaccount-action-signin = { product-action-signin }

homepage-accountlinked-title = Vos identifiants sont verrouillés !
homepage-accountlinked-description =
    { product-title } utilise le plus gros cryptage disponible pour
    protéger vos identifiants – même pour les sites bancaires et autres sites critiques.

item-details-heading-view = Détails Identifiants
item-details-heading-new = Créer Nouvel Identifiants
item-details-heading-edit = Éditer Détails Identifiants

item-details-edit = Éditer
item-details-delete = Éffacer

item-details-save-new = Créer Identifiants
item-details-save-existing = Enregistrer
item-details-cancel = Annuler

## popup

manage-lockbox-button = Gérrer Lockbox

no-results-banner = Pas d'identifiants trouvé pour le site web actuel.

item-details-panel-title = Détails de l'entrée

navigate-panel-backwards = Retour arrière

## dialogs

modal-cancel-editing = Des modifications non enregistrées existent. Les jeter ?
  .confirmLabel = Ignorer les changements
  .cancelLabel = Revenir en arrière

modal-delete = Supprimer cette entrée ?
  .confirmLabel = Supprimer
  .cancelLabel = Annuler
