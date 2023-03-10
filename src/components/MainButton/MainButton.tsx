import {Pressable, StyleSheet, Text, PressableProps} from 'react-native';
import React, {FC} from 'react';

interface MainButtonProps extends PressableProps {
  title: string;
}

const MainButton: FC<MainButtonProps> = ({title, ...props}) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    color: '#fff',
  },
});
