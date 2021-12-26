---
layout: page
---

# Create Your Own Website

## Creating your webpage

Creating a webpage requires mainly 3 domains of knowledge: HTML, CSS and JS.

### Tools

- A modern browser. Your current browser is likely modern enough.
- A text editor.
  - [Visual Studio Code](https://code.visualstudio.com)
  - [Notepad++](https://notepad-plus-plus.org) (Windows-only)
  - Even the system builtin editor (Notepad on Windows, TextEdit on macOS) would do. It's recommended to use more professional ones I listed above though.

### HTML

HTML is the markup for describing your webpage's structure (hierarchy).

- Element: `<element attribute="value">Content</element>`
  - a paragraph: `<p>This is a paragraph.</p>`
  - a link: `<a href="https://example.com">Link to example.com</a>`
  - an image: `<img src="some_picture.png" alt="Alt text.">`
  - a heading: `<h1>Level 1 heading</h1>` where `h1` can be any level in `h1`-`h6`.
- Common attributes: `class`, `id`.

Skeleton:
```html
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title of your webpage</title>
  </head>
  <body>
    <h1>You title</h1>
    <p>A quick brown fox jumps over a lazy dog.</p>
  </body>
</html>
```

[Learn more on MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

### CSS

CSS is the markup for styling your HTML.

- Syntax: `selector { property: value; another-property: value1 value2 }`
- Selectors:
  - `h1` selects `<h1>Any level 1 heading</h1>`
  - `.some-class` selects `<any-tag class="some-class"></any-tag>`
  - Combining selectors: `h1.some-class` selects `<h1 class="some-class"></h1>`
  - Children: `p a` selects any `<a>` in `p`
- Properties:
  - `color: red;` makes text red
  - `background: blue;` makes background blue
  - `font-weight: bold` makes text bold
  - `font-size: 20px` makes text 20 pixels in height

[Learn more on MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

### JS

JavaScript is the programming language for interactions on your webpage, and more.

For simple publishing you can ignore this, but if you want to dive deeper, again, visit [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript).

## Deploy your webpage

### Hosting providers

- [NeoCities](https://neocities.org)
- [Static.app](https://static.app)
- [Netlify](https://netlify.com)

Those are the most beginner-friendly ones without a fee. There are literally thousands of other choices worldwide.

You can host your website on your PC, but it's too complicated to introduce in this presentation. Just search the web for more information if you want.

## Have questions to ask?

There're plenty of resources on [MDN](https://developer.mozilla.org/en-US/docs/Learn/) to help you, for all levels of website engineering.

Ask your search engine first before asking anyone to help.

If anything you tried can not answer your question, or you have non-tech questions, catch me personally via the email on [`lao.sb/gh`](https://lao.sb/gh).
