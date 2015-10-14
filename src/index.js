import React from 'react'
import * as postcss from 'postcss';
import use from 'postcss-use';

export default React.createClass({

    getDefaultProps: function () {
        return {
            type: 'text/css',
            rel: 'stylesheet'
        }
    },

    compile: function() {
        return postcss.default([
            use({
                modules: '*'
            })
        ]).process(this.props.children).css;
    },

    render: function () {
        return (
            <style type={this.props.type} rel={this.props.rel}>{this.compile()}</style>
        )
    }

});
