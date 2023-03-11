// MainButton Test
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MainButton from './MainButton';
import {ReactTestInstance} from 'react-test-renderer';

describe('MainButton', () => {
  it('should render correctly', () => {
    const {toJSON} = render(<MainButton title="This is my Title" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <MainButton title="This is my Title" onPress={onPress} />,
    );
    fireEvent.press(getByTestId('MainButton'));
    expect(onPress).toHaveBeenCalled();
  });

  it('should render the title correctly', () => {
    const {getByTestId} = render(
      <MainButton title="This is my Title" onPress={jest.fn()} />,
    );
    const button = getByTestId('MainButton');
    const label = button.children[0] as ReactTestInstance;

    expect(label.props.children).toBe('This is my Title');
  });
});
