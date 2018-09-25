# Adding Locales

To add a locale, just create a new directory with the name of your locale and
add the necessary translations to it. For development builds, this locale will
automatically be included. However, for production builds, you should **add your
locale to locales.json**. This allows you to gradually work on adding
translations to your locale without having to have it production-ready
immediately.
