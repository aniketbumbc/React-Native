import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from 'react-native';

function GoalInput({
  goalInputHandler,
  addGoalHandler,
  enteredGoalText,
  showModal,
  endAddGoalHandler,
}) {
  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          placeholder='Your carrier goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
          </View>

          <View style={styles.buttonStyle}>
            <Button
              title='Cancel'
              onPress={endAddGoalHandler}
              color='#f31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonStyle: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
