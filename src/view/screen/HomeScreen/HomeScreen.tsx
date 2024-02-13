import Header from "./components/Header/Header";
import styles from "./styles";
import TaskList from "./components/TaskList/TaskList";
import React from "react";
import BlurBox from "@components/box/BlurBox/BlurBox";

const HomeScreen = (): JSX.Element => (
  <BlurBox style={styles.wrapper}>
    <Header />
    <TaskList />
  </BlurBox>
);

export default HomeScreen;
