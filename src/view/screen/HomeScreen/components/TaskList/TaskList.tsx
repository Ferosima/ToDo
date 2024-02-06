import TaskCard from './components/TaskCard/TaskCard';
import styles from './styles';
import {ITaskEntity} from '@domain/entities/task/types';
import {tasksStore} from '@domain/stores/tasks';

import {observer} from 'mobx-react';
import React, {useCallback, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TaskList = observer(() => {
  const ref = useRef(null);
  const insets = useSafeAreaInsets();

  const onDismiss = useCallback((id: ITaskEntity['id']) => {
    tasksStore.deleteTask(id);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[styles.wrapper, {paddingBottom: insets.bottom}]}
      ref={ref}
      showsVerticalScrollIndicator={false}>
      {tasksStore.tasks.map((item, index) => (
        <TaskCard
          style={styles.item}
          simultaneous={ref}
          key={item.id}
          entering={FadeIn.delay(100 * index)}
          exiting={FadeOut}
          task={item}
          onDismiss={onDismiss}
        />
      ))}
    </ScrollView>
  );
});

export default TaskList;
