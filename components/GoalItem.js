import { StyleSheet } from 'react-native';
import { Text, View, Pressable } from 'react-native';

function GoalItem({ text, deleteGoalHandler, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});
