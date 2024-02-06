import {useTaskCardAnimationHook} from './hooks/useTaskCardAnimation';
import styles from './styles';
import Card from '@components/card/BlurCard';
import Checkbox from '@components/controls/Checkbox/Checkbox';
import {Icon} from '@components/typo/Icon/Icon';
import Text from '@components/typo/Text/Text';
import {COLORS} from '@constants/styles';
import {ITaskEntity} from '@domain/entities/task/types';
import {tasksStore} from '@domain/stores/tasks';

import React, {useCallback} from 'react';
import {View, ViewProps} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {AnimateProps, Layout} from 'react-native-reanimated';

type Props = AnimateProps<ViewProps> & {
  task: ITaskEntity;
  simultaneous: any;
  onDismiss: (id: ITaskEntity['id']) => void;
};

const TaskCard = ({
  task,
  simultaneous,
  onDismiss,
  ...props
}: Props): JSX.Element => {
  const [animatedCardStyle, animatedIconStyle, panGestureHandler] =
    useTaskCardAnimationHook(task.id, onDismiss);

  const onCheck = useCallback(
    isDone => tasksStore.editTask(task.id, {isDone}),
    [],
  );

  return (
    <PanGestureHandler
      onGestureEvent={panGestureHandler}
      simultaneousHandlers={simultaneous}
      activeOffsetX={[-10, 10]}>
      <Animated.View {...props} layout={Layout.delay(200)}>
        <Card
          layout={Layout.delay(100)}
          style={[props.style, styles.wrapper, animatedCardStyle]}>
          <Checkbox
            style={styles.checkbox}
            checked={Boolean(task.isDone)}
            onChange={onCheck}
          />

          <View>
            <Text
              type="t7"
              numberOfLines={1}
              color={task.isDone ? 'gray2' : 'black'}
              style={[styles.label, task.isDone ? styles.disabled : null]}>
              {task.title}
            </Text>

            <Text
              type="t10"
              color={task.isDone ? 'gray2' : 'gray1'}
              style={task.isDone ? styles.disabled : null}>
              {task.description}
            </Text>
          </View>
        </Card>

        {/* Delete Icon */}
        <Animated.View style={[styles.icon, animatedIconStyle]}>
          <Icon name="Trash" color={COLORS.danger} />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default TaskCard;
