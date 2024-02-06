import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import styles from './styles';
import React from 'react';
import BlurBox from '@components/box/BlurBox/BlurBox';

const HomeScreen = (): JSX.Element => (
  <BlurBox edges={['top']} style={styles.wrapper}>
    <Header />
    <TaskList />
  </BlurBox>
);

export default HomeScreen;
