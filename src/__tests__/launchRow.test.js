import React from 'react';
import {shallow, mount} from "enzyme";
import {datosTest} from "../../utils";
import LaunchRow from "../components/launches/launchRow";

const props = datosTest[0];

describe('[LaunchRow.js]', () => {
    const wrapper = shallow(<LaunchRow {...props} />);
    it('should be', () => {

    })
});