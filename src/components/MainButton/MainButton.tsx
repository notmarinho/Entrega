import {StyleSheet, Text, Pressable, PressableProps} from 'react-native';
import React, {FC} from 'react';

interface MainButtonProps extends PressableProps {
  title: string;
  testID?: string;
}

const MainButton: FC<MainButtonProps> = ({
  title,
  testID = 'MainButton',
  ...props
}) => {
  return (
    <Pressable testID={testID} style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
