# Common Widgets

This directory contains the common widgets used throughout the extension. If you need a general-purpose UI widget, it should probably go in here.

## Visuals

All the widgets here are designed to follow the [Photon Design System][photon], though we occasionally make modifications to better suit our needs.

## APIs

Widgets should be designed as React components (no Redux, since that would add extra requirements to how a view's Redux store is designed), and should generally contain a few common options/methods to allow users of the widget to work with it as needed.

### Custom classNames

Widgets should have a `className` argument in their constructor that allows users to customize the styling of the widget for a particular instance.

### focus() method

Focusable widgets (buttons, form elements, links, etc) should have a `focus()` method that focuses the relevant HTML element. If the widget also contains selectable text, `focus()` should take an optional boolean value (defaulting to `false`) to focus *and* select the text.

### Extra props

Finally, widgets should accept extra props in their constructor and apply them to the most-relevant subcomponent. This allows users to apply things like ARIA labels and other props to the widget.

[photon]: https://design.firefox.com/photon/welcome.html
