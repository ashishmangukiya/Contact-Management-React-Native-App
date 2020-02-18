import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    imageContainer: {
        justifyContent: 'center'
    },
    image: {
        width: 40,
        height: 40,
        backgroundColor: 'lightgrey',
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    centerImage: {
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    nameContainer: {
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textStyle: {
        fontSize: 18,
        textTransform: 'capitalize'
    }
})
