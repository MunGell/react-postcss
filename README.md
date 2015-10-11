# react-postcss

This repository contains proof-of-concept simple style tag component for React.

## How to use

```js
style: function() {
    return `
        @use postcss-nested;
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
            <Style>{this.style()}</Style>
            <button className="Container__button">
                Button
            </button>
        </div>
    )
}
```

## PostCSS

This component uses [PostCSS](https://github.com/postcss/postcss)
and [postcss-use](https://github.com/postcss/postcss-use) for CSS post-processing.

Please refer to postcss-use readme to learn how to enable plugins in your code.
