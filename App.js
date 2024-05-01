import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function startAddGoalHandler() {
    setShowModal(true);
  }

  function endAddGoalHandler() {
    setShowModal(false);
  }

  function addGoalHandler() {
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText('');
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          enteredGoalText={enteredGoalText}
          showModal={showModal}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBouncerVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
