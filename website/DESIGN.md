# Clove OS design system

The landing page uses a paper palette, a watercolor hero, and the owl mark.
Use the full **Clove OS** wordmark in navigation and company credits.

## Landing palette

The `.site` class in [dojo.module.css](src/app/dojo.module.css) scopes these
tokens to the landing page.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#f4f3ed` | Page background |
| `--paper-2` | `#faf9f4` | Raised surfaces |
| `--paper-3` | `#eceee6` | Inset surfaces |
| `--ink` | `#34474a` | Primary text |
| `--muted`, `--faint` | `#56635f` | Supporting text and captions |
| `--signal` | `#8e5b4f` | Primary actions, markers, and focus rings |

The product pages use the dark shared tokens in [globals.css](src/app/globals.css)
with a near-black base, near-white text, and vermilion status accents.

## Type

- Roboto Flex for headlines.
- IBM Plex Sans for body copy.
- Roboto for navigation and labels.
- Instrument Serif for the wordmark.
- Roboto Mono for requests, responses, and endpoint paths.

## Layout and accessibility

The hero uses the existing watercolor artwork with a paper wash under the copy.

Maintain WCAG AA contrast, interactive targets at least 44px high, visible focus,
keyboard access, and reduced-motion styles. Fit the full wordmark at phone
widths and keep the owl crest paired with the wordmark in the header.
