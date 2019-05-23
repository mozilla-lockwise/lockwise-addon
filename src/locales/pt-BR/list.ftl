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
-fxaccount-brand-name = Conta Firefox

## All the following messages are localizable.

-sync-brand-short-name = Sync
header-logins-button = Contas de acesso
header-app-title =
    .title = { -fxlockwise-brand-name }
profile-menu-account = Conta
profile-menu-sign-in = Entrar no { -sync-brand-short-name }
profile-menu-connect = Conectar um dispositivo
profile-menu-faq = Perguntas frequentes
profile-menu-feedback = Dê sua opinião
document =
    .title = { -fxlockwise-brand-name }
error-notification-sync = Não foi possível sincronizar contas.
error-notification-sync-button = Reconectar
error-notification-duplicate = Já existe uma conta no { $title } com este nome de usuário.
error-notification-duplicate-link = <a>Ir para a conta existente?</a>
all-items-get-started = Quando você salva uma senha no { -firefox-brand-name }, ela aparece aqui.
all-items-get-started-title = Nenhuma conta de acesso encontrada.
all-items-get-started-footer = Não aparecem suas contas salvas? <go>Descubra por que</go>
all-items-no-results = Se essa conta foi salva em outro dispositivo, verifique se você fez login naquele dispositivo e sincronizou para aparecer aqui.
all-items-no-results-title = Nenhuma conta correspondente.
all-items-no-results-footer = <go>Saiba mais</go>
item-fields-title-input =
    .placeholder = por exemplo. banco principal
item-fields-origin = Endereço do site
item-fields-origin-input =
    .placeholder = https://www.example.com
item-fields-origin-info-message = Verifique se isso corresponde ao domínio exato do site que você está referenciando (incluindo “https://”).
item-fields-origin-button = Iniciar
item-fields-username = Nome de usuário
item-fields-username-input =
    .placeholder = nome@example.com
item-fields-copy-username =
    .title = Copiar o nome de usuário para a área de transferência
item-fields-password = Senha
item-fields-copy-password =
    .title = Copiar a senha para a área de transferência
item-fields-notes = Notas
item-summary-new-title = Nova conta
item-summary-no-title = (sem título)
item-summary-new-username = Digite suas credenciais de acesso
item-summary-no-username = (sem nome de usuário)
item-summary-copy-username = Copiar nome de usuário
    .title = Copiar o nome do usuário para a área de transferência
item-summary-copy-password = Copiar senha
    .title = Copiar a senha para a área de transferência
# Placeholder and accessibility label used in the field to filter existing
# entries, i.e. search in the product database
item-filter =
    .placeholder = Pesquisar contas
    .aria-label = Pesquisar contas
add-item-button = Nova conta
send-feedback-button = Dê sua opinião
toolbar-go-home = Início
toolbar-open-faq = Perguntas frequentes
account-summary-avatar =
    .alt = Avatar do usuário
account-summary-account = Conta
account-summary-options = Preferências
account-summary-signout = Sair
intro-page-header-title = { -fxlockwise-brand-name } para computador
intro-page-header-subtitle = Boas-vindas ao gerenciamento de contas aprimorado. Nossa extensão para computador traz muitas melhorias vistas em nossos aplicativos móveis para seu computador, com maior controle sobre suas contas.
intro-page-main-article-1-title = Fácil gerenciamento de suas contas
intro-page-main-article-1-copy = Gerenciar suas contas não deve ser um bicho de sete cabeças. Facilitamos as coisas com nossa nova interface no computador.
intro-page-main-article-2-title = Acesso rápido a suas contas
intro-page-main-article-2-copy = Clique no ícone do { -fxlockwise-brand-short-name } na barra de ferramentas do { -firefox-brand-name } para abrir nosso painel de acesso a suas contas.
intro-page-main-article-3-title = Criar novas contas manualmente
intro-page-main-article-3-copy = Agora você pode salvar qualquer conta no { -fxlockwise-brand-short-name } inserindo as credenciais manualmente.
intro-page-footer-heading = Suas contas salvas não aparecem? Deixe-nos ajudar.
intro-page-footer-copy = O { -fxlockwise-brand-name } dá acesso às contas que você salvou no { -firefox-brand-name } em seu dispositivo. Caso suas contas estejam armazenadas em outro dispositivo, você pode sincronizar suas informações com este dispositivo entrando na sua { -fxaccount-brand-name }, ou criando uma. <go>Saiba mais</go>
item-details-heading-new = Criar nova conta
item-details-heading-edit = Editar detalhes da conta
item-details-edit = Editar
item-details-delete = Excluir
item-details-save-new = Criar conta
item-details-save-existing = Salvar alterações
item-details-cancel = Cancelar
item-details-created = Criada em: { $date }
item-details-modified = Última modificação: { $date }
item-details-last-used = Última utilização: { $date }
# Variables:
#   - $count (number): number of items in the list
list-count =
    { $count ->
        [one] { $count } conta
       *[other] { $count } contas
    }
sort-by = Ordenar por:
sort-by-name = Nome
sort-by-last-used = Última utilização
sort-by-last-changed = Última alteração

## Strings used in pop-up

manage-logins-button = Abrir { -fxlockwise-brand-short-name }
list-detail-button = Abrir site
default-banner = Contas usadas recentemente.
# Variables:
#   - $count (number): number of items in the list
filtered-banner =
    { $count ->
        [one] { $count } conta encontrada
       *[other] { $count } contas encontradas
    }
get-started-banner = Nenhuma conta encontrada.
no-matching-banner = Nenhuma conta correspondente.
no-results-banner = Não encontrada nenhuma conta do site atual.
item-details-panel-title = Detalhes da conta
navigate-panel-backwards = Voltar

## Strings used in dialog

modal-cancel-editing = Há alterações não salvas. Descartar?
    .confirmLabel = Descartar alterações
    .cancelLabel = Voltar
modal-delete = Excluir esta conta?
    .confirmLabel = Excluir
    .cancelLabel = Cancelar
connect-another-device = Conectar outro dispositivo
easily-access-logins = Acesse suas contas com facilidade em qualquer dispositivo.
access-on-another-computer = Acesse em outro computador
simply-sign-in-other-device = Basta entrar na sua { -fxaccount-brand-name } em outro dispositivo para sincronizar suas contas com esse computador.
download-mobile = Baixe o aplicativo para celular
download-ios-android = O { -fxlockwise-brand-name } está disponível em iOS e Android. <learnmore>Clique aqui</learnmore> para saber mais e enviar um link para seu celular para baixar o aplicativo.
before-access = Antes de poder acessar suas contas em outro dispositivo, você precisa conectar uma { -fxaccount-brand-name }.
connect-a-firefox-account = Conectar uma { -fxaccount-brand-name }
# Displayed next to connect-a-firefox-account string after the user has logged in.
connection-complete = (concluído)
sync-requires-account = Para sincronizar suas contas com outro dispositivo, você precisa <signin>entrar na sua { -fxaccount-brand-name }</signin>, ou criar uma.
ensure-logins-checked = Verifique se está marcada a opção "Contas de acesso" nas preferências do { -sync-brand-short-name }
setting-to-allow-sync = Para permitir que suas contas sejam sincronizadas com outros dispositivos, esta opção deve ser marcada. <go>Abra as preferências do { -sync-brand-short-name }</go>
banner-promote-device = <bold>Tenha suas senhas em qualquer lugar</bold> - baixe nosso aplicativo para iOS ou Android:
banner-promote-device-app-store =
    .title = Baixe na App Store
banner-promote-device-play-store =
    .title = Baixe no Google Play
banner-promote-fxa = <bold>Tenha suas senhas em qualquer lugar</bold> - crie uma { -fxaccount-brand-name } ou entre para sincronizar com o { -fxlockwise-brand-short-name } no celular:
banner-promote-fxa-action-label = Entrar
