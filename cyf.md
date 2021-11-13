# Tools

VS Code Extensions
- [HTML Preview](https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

VS Code Hotkey
- CTRL/CMD + SHIFT + P => Actions (Format document etc)
- CTRL/CMD + P => Find in files

# CYF London 8 Classes
2021-11-13 HTML Larks

Tricks

HTML has been developed for ages and check your HTML file so that it is

- **One root and one root only** (i.e. everything shall be enclosed within `<html></html>`)
- Check HTML Well Form-ness
Each opening element shall have an closing element (`<p></p>`) or
element is self closing (`<img />`)
 

Define then Apply
- Write definition (e.g. CSS definitions) before you use in the code.
- Usually re-definiton is allowed and always overwrite earlier definitons. **Unknown overwite is a common source of problem.**

Hyperlink
- Absolute vs Relative resources
- `<a href="https://apple.com">This is a absolute link to Apple.com</a>`

- `<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-mac-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1632870674000"/>`

- Anything not starting with https:// http:// ftp:// mail:// etc are relative

- `<a href="hidden.html">This is a relative link to hidden.html on this site</a>`
-  `<img src="../images/hero.jpg"/>`

Missing Link / Resources?
- Check if you can get clues from
Inspector => Network 
- ![Chrome Inspector - Network](https://ibb.co/hY84N44)


How to activate Inspector
1. Right click on the page
2. Press F12 button



