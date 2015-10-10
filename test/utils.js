import React from 'react';
import TestUtils from 'react-addons-test-utils';

const renderer = TestUtils.createRenderer();

export default {

    createComponent: function (Component, props, ...children) {
        return renderer.render(
            React.createElement(Component, props, children.length === 1 ? children[0] : children)
        ).getRenderOutput();
    }

}
