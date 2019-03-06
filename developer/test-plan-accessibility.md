# Manual Test Plan

## Keyboard Navigation

_< 3 hours_

Navigate the web content using only the keyboard:

- Tab Order:`TAB`, as well as `SHIFT + TAB`, follows a logical and intuitive order.
- All controls, links, buttons, etc., get focused.
- Focus should be visibly apparent.
- When a modal or pop up window opens, focus shifts to the pop up.
  - Focus and tab order is constrained within the modal.
  - Modal can be exited via keyboard.
  - When a pop up window is closed, focus returns to a logical point.
- Ensure that all content that is visually hidden is also hidden from the keyboard and/or a screen reader. _Except content specifically for screen reader users._
- Firefox toolbar icon can be accessed by keyboard and screen reader users.

## Page Structure

_3 hours_

- Links and buttons have text that give context.
- All images contain alt text to describe the purpose or content of the image to a non-sighted user.
- A logical hierarchy of header tags has been used.
- [ARIA landmark roles](https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/aria-landmarks/) have been utilized where applicable.
- ARIA attributes have been put into use.
  - Any custom controls have been given the proper role attribute.
    - State changes are provided via [ARIA states](http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header).
- Form input fields and buttons have been labeled for screen reader users.

## Color

_< 1 hour_

- Text has sufficient color contrast against its background.
  - Contrast ratio of 4.5:1 for normal text (less than 18 point or 14 point bold.)
  - Contrast ratio of 3:1 for large text (at least 18 point or 14 point bold).
- Information conveyed via color is also available by other means.
- Buttons and links are visually apparent when they have focus.
- Focus remains apparent, and contrast remains sufficient, when simulating varying types of colorblindness.  [Color blind simulators](https://www.toptal.com/designers/colorfilter)

## UX Design Considerations

- Interactions available with a mouse are also available using a keyboard.
- Information conveyed visually is also available by other means.
  - Pop-ups and other state changes are announced to screen readers using appropriate ARIA attributes.
  - Temporary on-screen events give users ample time to receive conveyed information.
- Animations are not excessively flashy, as this can cause seizures in some users.

## Tools and Resources

Use a variety of testing tools to analyze pages:

- aXe developer tools by Deque
- Browser developer tools to inspect HTML for logical heading structure and ARIA roles
- [Color blind simulators](https://www.toptal.com/designers/colorfilter)
