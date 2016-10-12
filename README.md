# RedactKit
Quickly redact text in Node.js
## About
What exactly does redacting text mean in this context? Basically, replacing any character (except newlines and optionally, spaces) with '&#9608;', the full block character. That's it!

## Example

This:

`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
varius suscipit commodo. Quisque lobortis libero sed mauris tincidunt
placerat semper nec enim. Phasellus congue leo magna,id
euismod risus malesuada et. Nunc porttitor ac enim non finibus.
Nulla hendrerit magna eu aliquet porttitor.`

Becomes this:

`█████ █████ █████ ███ █████ ███████████ ██████████ █████ ███
██████ ████████ ████████ ███████ ████████ ██████ ███ ██████ █████████
████████ ██████ ███ █████ █████████ ██████ ███ ████████
███████ █████ █████████ ███ ████ █████████ ██ ████ ███ ████████
█████ █████████ █████ ██ ███████ ██████████`

## Quick Start

1. Install with NPM: `npm install redactkit`
2. Add it to your project: `var redact = require(‘redactkit’)`
3. Use it: `redact('Hide me'); \\ returns '████ ██'`

## API

**redact(text,ignoreSpaces,start,stop)**

`text`: a String containing the text you want to redact.

`ignoreSpades`: a boolean. When this is true, spaces will also be redacted.

`start` and `stop`: integer indices. When these are specified, only the text within this range will be redacted.
