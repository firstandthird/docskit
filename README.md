# docskit
A cli to generate documentation from markdown

## Features

* Turns markdown files into html
* Syntax highlighting
* Turns code examples into live examples
* Generates a table of contents

## Installation

```
npm install docskit
```

## Usage

```
docskit
```

## Setup

Create a `docskit.yaml` in your parent directory.  Here is an example file:

```yaml
pages:
  'index.html':
    - 'md/welcome.md'
    - 'md/get-started.md'
  'example.html': 'md/example.md'
colors:
  accent: '#336699'
```
