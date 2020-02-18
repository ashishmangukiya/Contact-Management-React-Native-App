import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		right: 20
	},
	flex: {
		flex: 1,
		paddingLeft: 20,
		paddingVertical: 20
	},
	emptyListStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	padding: {
		paddingRight: 20
	},
	image: {
		textAlign: 'center',
		textAlignVertical: 'center',
		width: 60,
		height: 60,
		backgroundColor: '#7B73B8',
		borderRadius: 60,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
	charStyle: {
		paddingTop: 20,
		fontSize: 12
	},
	color: {
		color: 'grey'
	},
	borderBottom: {
		borderTopWidth: 0.5,
		borderTopColor: 'lightgrey'
	}
})