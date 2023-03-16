import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

TouchableOpacity.defaultProps = {activeOpacity: 0.5};

const AppButton = ({onPress, title, size, backgroundColor}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === 'sm' && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6,
        },
        backgroundColor && {backgroundColor},
      ]}>
      {/* <LinearGradient colors={['#004d40', '#009688']}> */}
        <Text style={styles.appButtonText}>{title}</Text>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {

    elevation: 20,
    backgroundColor: '#C9C5CB',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 8,

  },
  appButtonText: {
    fontSize: 30,
    fontFamily: 'fangsong',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;
