import Header from './components/Header/Header';
import styles from './styles';
import {useTaskControllerHook} from './hooks/useTaskContoller';
import BlurBox from '@components/box/BlurBox/BlurBox';
import Button from '@components/controls/Button/Button';
import Input from '@components/typo/Input/Input';
import React from 'react';
import {ScrollView, View} from 'react-native';

const TaskScreen = (): JSX.Element => {
  const [errors, onChange, onConfirm] = useTaskControllerHook();

  return (
    <BlurBox edges={['bottom']} bottomBlur={false}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.wrapper}
        bounces={false}>
        <Header />

        <View style={styles.container}>
          <Input
            label="Title"
            style={styles.input}
            error={errors.title}
            onChange={onChange('title')}
          />
          <Input
            label="Description"
            multiline
            style={styles.input}
            onChange={onChange('description')}
          />
        </View>
      </ScrollView>

      <Button text="Add New Task" style={styles.button} onPress={onConfirm} />
    </BlurBox>
  );
};

export default TaskScreen;
