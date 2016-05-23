# Change Filename Case

## Installation

```bash
npm install -g cakecatz/change-filename-case
```

## Usage

```bash
cfc -c upper filename.js # filename.js -> FILENAME.js
cfc -c param fileName.js # fileName.js -> file-name.js
```

If you add `--dry`, will not rename actually.

## Available Case

-   upper
-   ucFirst
-   lcFirst
-   lower
-   sentence
-   title
-   camel
-   pascal
-   snake
-   param
-   dot
-   path
-   constant
-   swap
