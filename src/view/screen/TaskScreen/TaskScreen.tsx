import BlurBox from '@components/box/BlurBox/BlurBox';
import Button from '@components/controls/Button/Button';
import Input from '@components/typo/Input/Input';
import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from './components/Header/Header';
import styles from './styles';

type Props = {};

const TaskScreen = (props: Props) => {
  return (
    <BlurBox edges={['bottom']} bottomBlur={false}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.wrapper}
        bounces={false}>
        <Header />
        <View
          style={{
            paddingTop: 16,
          }}>
          <Input label="Title" style={{marginVertical: 6}} />
          <Input label="Description" multiline style={{marginVertical: 6}} />
        </View>
      </ScrollView>

      <Button text="Add New Task" style={styles.button} />
    </BlurBox>
  );
};

export default TaskScreen;
