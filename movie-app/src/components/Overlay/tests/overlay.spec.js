import React from 'react';
import Overlay from '../index';

describe('Overlay component', () => {
  it('should contain .overlay ', () => {
    const component = shallow(<Overlay />);
    const overlay = component.find('.overlay');
    expect(overlay).toHaveLength(1);
  });
});

describe('defaultProps', () => {
  it('should use default handleClick', () => {
    const result = Overlay.defaultProps.handleClick();
    expect(result).toBe(undefined);
  });
});

it('should call onClick', () => {
  const mockCallBack = jest.fn();
  const component = shallow(<Overlay handleClick={mockCallBack} />);
  expect(mockCallBack.mock.calls.length).toEqual(0);
  component.find('div').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
