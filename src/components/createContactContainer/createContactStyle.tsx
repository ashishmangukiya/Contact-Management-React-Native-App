import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1
    },
    imageContainer: {
      position: 'absolute',
      bottom: 20,
      right: 20
    },
    buttonTextStyle: {
      textAlign: 'center',
      color: 'white'
    },
    image: {
      width: 60,
      height: 60,
      backgroundColor: '#F0F0F0',
      borderRadius: 60,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    imageCenter: {
      alignItems: 'center',
      paddingVertical: 20
    },
    inputTextStyle: {
      backgroundColor: '#F0F0F0',
      borderRadius: 15,
      paddingHorizontal: 20,
    },
    inputContainer: {
      paddingTop: 10,
      paddingHorizontal: 10,
      justifyContent: 'flex-start'
    },
    buttonStyle: {
      backgroundColor: '#7B73B8',
      padding: 15,
      color: 'white',
      textAlign: 'center',
    },
    centerImage: {
      textAlignVertical: 'center',
      textAlign: 'center'
    },
  })