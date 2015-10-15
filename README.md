# react-postcss

[![Build Status](https://travis-ci.org/MunGell/react-postcss.svg)](https://travis-ci.org/MunGell/react-postcss)

This repository contains proof-of-concept simple style tag component for React.

## How to use

```js
style: function() {
    return `
        .Container {
            &__button {
                color: red;
                background-color: black;
            }
        }
    `;
},

render: function () {
    return (
        <div className="Container">
            <Style plugins={[postcssNested, autoprefixer]}>{this.style()}</Style>
            <button className="Container__button">
                Button
            </button>
        </div>
    )
}
```

## PostCSS

This component uses [PostCSS](https://github.com/postcss/postcss).
You can use any plugins from [postcss.parts](http://postcss.parts/) website.
