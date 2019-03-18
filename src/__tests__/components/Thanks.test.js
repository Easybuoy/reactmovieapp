/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Thanks from '../../components/thanks/Thanks';

describe('<Thanks />', () => {

  it('renders the Thanks component correctly', () => {
    const wrapper = shallow(<Thanks />);
    expect(wrapper).toMatchSnapshot();
});
})

