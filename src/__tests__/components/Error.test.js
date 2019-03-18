/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../components/error/Error';

describe('<Error />', () => {

  it('renders the Error component correctly', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
});
})

