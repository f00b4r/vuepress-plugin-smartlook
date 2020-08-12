<h1 align=center>Smartlook ❤️ Vuepress</h1>

<p align=center>
   VuePress plugin for Smartlook.
</p>

<p align=center>
🕹 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

<p align=center>
	<a href="https://github.com/webkitty/vuepress-plugin-smartlook/actions">
		<img src="https://badgen.net/github/checks/webkitty/vuepress-plugin-smartlook">
	</a>
	<a href="https://www.npmjs.com/package/vuepress-plugin-smartlook">
		<img src="https://badgen.net/npm/v/vuepress-plugin-smartlook">
	</a>
	<a href="https://www.npmjs.com/package/vuepress-plugin-smartlook">
		<img src="https://badgen.net/npm/dt/vuepress-plugin-smartlook">
	</a>
	<a href="/LICENSE">
		<img src="https://badgen.net/github/license/webkitty/vuepress-plugin-smartlook">
	</a>
</p>

-----

## Usage

To install latest version use [NPM](https://npmjs.com).

```
npm install --save vuepress-plugin-smartlook
```

## Documentation

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

## Development

<a href="https://github.com/f3l1x">
    <img width="80" height="80" src="https://avatars2.githubusercontent.com/u/538058?v=3&s=80">
</a>

-----

Consider to [support](https://github.com/sponsors/f3l1x) **f3l1x**. Also thank you for using this package.
