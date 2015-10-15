import { test } from 'tape'
import utils from './utils.js'

import postcssNested from 'postcss-nested'

import Style from '../'

test('Plain CSS', function (it) {

    let css = `
        a {
            color: red;
        }
    `;
    let component = utils.createComponent(Style, {}, css);

    it.equal(component.type, 'style', 'renders style tag');
    it.equal(utils.stringCondense(component.props.children), utils.stringCondense(css), 'renders css code');

    it.end()
});

test('Nested CSS', function (it) {

    let nested = `
        .container {
            a {
                    color: red;
            }
        }
    `;
    let css = `
        .container a {
            color: red;
        }
    `;
    let component = utils.createComponent(Style, {
        plugins: [ postcssNested ]
    }, nested);

    it.equal(utils.stringCondense(component.props.children), utils.stringCondense(css), 'renders nested css');

    it.end()
});
