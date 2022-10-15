import { render, fireEvent } from '@testing-library/react-native';


test('fire changeText event', () => {
  const onEventMock = jest.fn();
  const { getByPlaceholderText } = render(
    // MyComponent renders TextInput which has a placeholder 'Enter details'
    // and with `onChangeText` bound to handleChangeText
    <MyComponent handleChangeText={onEventMock} />
  );

  fireEvent(getByPlaceholderText('change'), 'onChangeText', 'ab');
  expect(onEventMock).toHaveBeenCalledWith('ab');
});