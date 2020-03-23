<h1 align=center>Smartlook ❤️ Vuepress</h1>

<p align=center>
🌐 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

## Usage

1. Register at [smartlook.com](https://www.smartlook.com/).
2. Get tracking code (Projects -> Tracking code).
3. Install `vuepress-plugin-smartlook` package using NPM.
4. Update `config.js` of your VuePress website.

```js
module.exports = {
  title: "Your awesome site",
  plugins: [
    [
      'vuepress-plugin-smartlook',
      {
        id: "**smartlook*key**"
      }
    ]
  ]
};
```
