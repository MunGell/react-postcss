import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

export default {

    createComponent: function (component, props, ...children) {
        let renderer = ReactTestUtils.createRenderer();
        renderer.render(
            React.createElement(component, props, children.length === 1 ? children[0] : children)
        );
        return renderer.getRenderOutput();
    }

}
