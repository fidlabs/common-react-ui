# Fidlabs Common React UI

This library is an opinionated collection of React UI components and styles, to be shared across applications built within this organization.

## Installation

You can install the library using following command:

```shell
# npm
npm install @fidlabs/common-react-ui

# pnpm
pnpm install @fidlabs/common-react-ui

# yarn
yarn add @fidlabs/common-react-ui
```

## Setup

### Styles

To use the library you need to import following styles:

```tsx
import "@fidlabs/common-react-ui/global.css";
```

or in your global styles file

```css
@import "@fidlabs/common-react-ui/global.css";
```

### Fonts

The library does not setup font by default. You can set the font by using the `--font-sans` css variable. We recommend using the "Montserrat" font as this is the go to font used when developing this library.

If you are using Next.js (recommended), you can set up the font in the following way:

```tsx
// Somehwere in root layout

import { Montserrat } from "next/font/google";

// ...

const font = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

// The later set the classname on the HTML element
<html lang="en" className={`${font.variable} antialiased`}>
```

Otherwise just set the CSS variable:

```css
/* Make sure the Font file is imported in some way beforehand */

:root {
  --font-sans: "Montserrat";
}
```
