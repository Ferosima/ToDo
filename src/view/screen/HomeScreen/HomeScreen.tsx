import BlurBox from '@components/box/BlurBox/BlurBox';
import React from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import styles from './styles';

const HomeScreen = () => {
  return (
    <BlurBox edges={['top']} style={styles.wrapper}>
      <Header />
      <TaskList />
    </BlurBox>
  );
};

export default HomeScreen;
