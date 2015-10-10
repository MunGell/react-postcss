import { test } from 'tape';
import utils from './utils.js';

import Style from '../'

test('Component: Style', function (it) {

    console.log(utils.createComponent(Style));

    it.ok(utils.createComponent(Style, null, 'Hellow'));

});
