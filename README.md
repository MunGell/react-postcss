# react-postcss

Simple style tag for React

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
            <Style processors={[postcssNested]}>{this.style()}</Style>
            <button className="Container__button">
                Button
            </button>
        </div>
    )
}
```
