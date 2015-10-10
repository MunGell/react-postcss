import { test } from 'tape';
import utils from './utils.js';

import Style from '../'

test('Component: Style', function (it) {

    let component = utils.createComponent(Style, {}, "a{}");

    it.ok(component.type, null, 'style');

    it.end()
});
