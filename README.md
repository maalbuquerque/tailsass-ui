# Tailsass UI

Semantic UI components built on [@maalbuquerque/tailsass](https://www.npmjs.com/package/@maalbuquerque/tailsass) utilities (`@extend`).

**Docs:** [maalbuquerque.github.io/tailsass-ui](https://maalbuquerque.github.io/tailsass-ui/)

## Install

```bash
npm install @maalbuquerque/tailsass @maalbuquerque/tailsass-ui
```

## Use

Load Tailsass core + colors, then UI:

```scss
@use '@maalbuquerque/tailsass/src/index';
@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
  )
);
@use '@maalbuquerque/tailsass-ui/src/index';
```

Or import compiled CSS (after building colors for your app):

```js
import '@maalbuquerque/tailsass/dist/tailsass.css'
import './app-colors.css'
import '@maalbuquerque/tailsass-ui/dist/tailsass-ui.css'
```

Override theme tokens in `:root` (see `src/_variables.scss`).

## Components

Button, form, card, dropdown, typography, nav, modal, popover, tooltip, toast, table.

## License

[MIT](./LICENSE)
