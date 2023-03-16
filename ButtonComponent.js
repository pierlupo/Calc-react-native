import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

TouchableOpacity.defaultProps = {activeOpacity: 0.5};

const AppButton = ({onPress, title, size, backgroundColor, isOn, isOp, isC}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[isOn ? styles.isOn : isOp ? styles.isOp : isC ? styles.isC :
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
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 8,
    height: 70,
    width: 70
  },
  appButtonText: {
    fontSize: 30,
    fontFamily: 'fangsong',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  isOn:{
    elevation: 20,
    margin: 8,
    backgroundColor: '#857C8D',
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: 5,
    width: 150,
    height: 70,
  },

  isOp:{
    elevation: 20,
    backgroundColor: '#94BFBE',
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 8,
    height: 70,
    width: 70,
  },
  isC:{
    elevation: 20,
    backgroundColor: '#857C8D',
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 8,
    height: 70,
    width: 70,
  },
});

export default AppButton;
