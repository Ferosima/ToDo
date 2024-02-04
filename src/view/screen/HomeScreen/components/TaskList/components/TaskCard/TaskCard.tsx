import Card from '@components/card/BlurCard';
import Checkbox from '@components/controls/Checkbox/Checkbox';
import {Icon} from '@components/typo/Icon/Icon';
import Text from '@components/typo/Text/Text';
import {COLORS} from '@constants/styles';
import {tasksStore} from '@domain/stores/tasks';
import {TTask} from '@domain/stores/tasks/types';
import React from 'react';
import {View, ViewProps} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {AnimateProps, Layout} from 'react-native-reanimated';
import {useTaskCardAnimationHook} from './hooks/useTaskCardAnimation';
import styles from './styles';

type Props = AnimateProps<ViewProps> & {
  task: TTask;
  simultaneous: any;
  onDismiss: (id: TTask['id']) => void;
};

const TaskCard = ({task, simultaneous, onDismiss, ...props}: Props) => {
  const [animatedCardStyle, animatedIconStyle, panGestureHandler] =
    useTaskCardAnimationHook(task.id, onDismiss);

  return (
    <PanGestureHandler
      onGestureEvent={panGestureHandler}
      simultaneousHandlers={simultaneous}>
      <Animated.View {...props} layout={Layout.delay(100)}>
        <Card
          layout={Layout.delay(100)}
          style={[props.style, styles.wrapper, animatedCardStyle]}>
          <Checkbox
            style={styles.checkbox}
            checked={Boolean(task.done)}
            onChange={done => tasksStore.editTask({...task, done})}
          />

          <View>
            <Text
              type="t7"
              numberOfLines={1}
              color={task.done ? 'gray2' : 'black'}
              style={[styles.label, task.done ? styles.disabled : null]}>
              {task.title}
            </Text>

            <Text
              type="t10"
              color={task.done ? 'gray2' : 'gray1'}
              style={task.done ? styles.disabled : null}>
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
