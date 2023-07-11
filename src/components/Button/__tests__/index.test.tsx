import React from 'react';
import { fireEvent, render } from '../../../../test-utils';
import { Button } from '../';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const { getByText, toJSON } = render(
      <Button label='Test' onPress={mockCallBack} />
    );

    const button = getByText('Test');
    fireEvent.press(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(toJSON()).toMatchSnapshot();
  });
});
