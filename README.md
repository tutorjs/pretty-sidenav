## Pretty Sidenav

Pretty Sidenav With VanillaJS.

[![GitHub issues](https://img.shields.io/github/issues/tutorjs/pretty-sidenav.svg)](https://github.com/tutorjs/pretty-sidenav/issues)
[![GitHub forks](https://img.shields.io/github/forks/tutorjs/pretty-sidenav.svg)](https://github.com/tutorjs/pretty-sidenav/network)
[![GitHub stars](https://img.shields.io/github/stars/tutorjs/pretty-sidenav.svg)](https://github.com/tutorjs/pretty-sidenav/stargazers)
[![GitHub license](https://img.shields.io/github/license/tutorjs/pretty-sidenav.svg)](https://github.com/tutorjs/pretty-sidenav)

## Demo

[Demo](https://tutorjs.github.io/pretty-sidenav)

## How To Use

### Install With CDN

#### Production

```
// CSS
https://cdn.rawgit.com/tutorjs/pretty-sidenav/0a369340/src/css/pretty-sidenav.css

// Javascript
https://cdn.rawgit.com/tutorjs/pretty-sidenav/0a369340/src/js/pretty-sidenav.js

```

#### Development

```
// CSS
https://rawgit.com/tutorjs/pretty-sidenav/master/src/css/pretty-sidenav.css

// Javascript
https://rawgit.com/tutorjs/pretty-sidenav/master/src/js/pretty-sidenav.js

```

### HTML

```html

  <div class="your-navigation">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>

  <button class="open-navigation">&#9776;</button>

```


### Javascript

```javascript
  
  new PrettySidenav({
    navigation: '.your-navigation',
    position: 'left', // left or right
    children: 'a', // element html
    trigger: '.open-navigation', // trigger for open navigation
    width: 300, // optional width (default) 250px
    background: '#34495e', // optional
    color: '#fff' // optional
  })


```

Thanks.