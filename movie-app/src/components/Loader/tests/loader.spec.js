import React from 'react';
import Loader from '../index';

describe('should render Loader component', () => {
  it('should contain .wrapper .loader .first .second .third', () => {
    const component = shallow(<Loader />);
    const wrapper = component.find('.wrapper');
    expect(wrapper).toHaveLength(1);
  });
});
