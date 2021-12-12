# Tools

VS Code Extensions
- [HTML Preview](https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode) - Allow preview on HTML file
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Allow preview on Markdown file

VS Code Hotkey
- CTRL/CMD + SHIFT + p => Find and run actions. Serach actions by entering **">"** at beginning (e.g. Format document etc)
  - Emmet Update Tag. Update both opening and closing tag together.
  - Format Document. Tidy up document.
- CTRL/CMD + SHIFT + f => Find in files. You can search contents in all files under your project folder

Useful Linux / OSX Tricks
#### ZSH


# CYF London 8 Classes

2021-12-11 JS1-Week1 (Larks)
### Tricks
#### You might not know you are using JavaScript ...
- VS Code is written in [JavaScript](https://www.quora.com/What-is-Visual-Studio-Code-written-in) 

- Using `toBeOneOf` in Jest `toBeOneOf` is an from `jest-extended` and you need to configure in package.json and run npm install to download necessary NPM modules
![cyf-2021-12-11a.png](./cyf-2021-12-11a.png)

2021-12-04 HTML-CSS (Larks)

### Tricks

#### Testing Edge Cases
We usually test programs with extreme / edge scenarios.

#### How to save a website local archive
In Chrome, right click on "Save as"
#### Great books on JavaScript
- Eloquent Javascript by Marijn Haverbeke [https://eloquentjavascript.net/](https://eloquentjavascript.net/)

2021-11-27 HTML-CSS (Larks)

Tricks

Put your HTML page on Internet. Deploy it to a real server.
- You commit your code changes at Github and notify Netlify for deployment
- ![cyf-2021-11-27a.png](./cyf-2021-11-27a.png)
- Make sure you are deploying the rigth *Base Directory* and *Production branch*
- ![cyf-2021-11-27b.png](./cyf-2021-11-27b.png)

2021-11-20 HTML-CSS (Larks)

Tricks

Github Related Actions in Visual Code
- See attached picture for tips
- ![cyf-2021-11-20.png](./cyf-2021-11-20.png)

VS Code Git Panel
- ![cyf-2021-11-20a.png](./cyf-2021-11-20a.png)
- Click "Cross Pointing Arrows" icon to compare previous version with working copy
- Up pointing arrow means pending changes to be pusheded to remote

How to view PR request
- Go to the desired repository's pull request page (e.g. [https://github.com/CodeYourFuture/HTML-CSS-Coursework-Week2/pulls](https://github.com/CodeYourFuture/HTML-CSS-Coursework-Week2/pulls))
- Clear the filter field and enter `author:abc` where abc is the Github username of the PR requester.
- Press enter to execute the filter and show results

Use of Markup in Github
- The `- [ ]` you see in README.md means a checkbox. You can place an `x` within as `- [x]` to show you have completed the task and tell your reviwer that you have completed the required task.
- [ ] A task to be completed
- [x] A task completed

2021-11-13 HTML-CSS (Larks)

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
Absolute vs Relative resources
- `<a href="https://apple.com">This is a absolute link to Apple.com</a>`

- `<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-mac-nav-202110?wid=400&hei=260&fmt=png-alpha&.v=1632870674000"/>`

Anything not starting with https:// http:// ftp:// mail:// or / etc are relative

- `<a href="hidden.html">This is a relative link to hidden.html on this site</a>`
-  `<img src="../images/hero.jpg"/>`

Missing Link / Resources?
- Fireup Developer Tools => Network and check. You can access the tool by 1) Right click on the page and select Inspect or 2) Press F12 button
- ![ChromeDev](https://i.ibb.co/WVKMXMM/Screenshot-2021-11-13-at-16-08-46.png)




