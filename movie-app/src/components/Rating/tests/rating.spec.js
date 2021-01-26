import React from 'react';
import Rating from '../index';

const props = {
  vote: 2,
};

describe('Rating component', () => {
  it('should render Rating component with props', () => {
    const component = shallow(<Rating {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render Rating component without props', () => {
    const component = shallow(<Rating />);
    expect(component).toMatchSnapshot();
  });
});
