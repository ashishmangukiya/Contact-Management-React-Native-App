import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

export const Style = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	header: {
		flex: 1,
		backgroundColor: 'rgba(20, 20, 46, 0.3)'
	},
	flex: {
		flexDirection: 'row',
		flex: 1,
	},
	topHeader: {
		flex: 1,
		justifyContent: 'flex-start',
		flexDirection: 'row'
	},
	commonPadding: {
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	backGroundImageContainer: {
		flex: 0.5,
	},
	profileText: {
		color: 'white',
		fontSize: 16
	},
	profileStyle: {
		flex: 0.5,
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 10
	},
	borderBottom: {
		borderBottomWidth: 0.5,
		borderBottomColor: 'lightgrey'
	},
	padding: {
		paddingLeft: 20
	},
	addStyle: {
		fontSize: 30,
	},
	backGroundImageStyle: {
		width: devicewidth,
		height: deviceheight * 0.5,
	},
	contactDetailsContainer: {
		padding: 20
	},
	imageContainer: {
		flex: 0.20,
		justifyContent: 'center'
	},
	callHistoryStyle: {
		color: 'grey'
	},
	image: {
		textAlignVertical: 'center',
		textAlign: 'center',
		width: 40,
		height: 40,
		backgroundColor: '#7B73B8',
		borderRadius: 40,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
	footerDetails: {
		flex: 1,
		alignItems: 'flex-end',
		flexDirection: 'row',
	},
	nameStyle: {
		color: 'white',
		fontSize: 20,
		padding: 10,
		paddingLeft: 20,
		textTransform: 'capitalize'
	},
	heartStyle: {
		padding: 15,
	},
	left: {
		flex: 0.65,
		justifyContent: 'flex-start'
	},
	right: {
		flex: 0.35,
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight:10,
		justifyContent: 'flex-end'
	},
	setList: {
		flexDirection: 'row',
		paddingVertical: 15
	},
	setListSub: {
		flexDirection: 'row',
		paddingVertical: 20
	},
	setListLeft: {
		flex: 0.5,
		justifyContent: 'center',
	},
	setListRight: {
		flex: 0.5,
		justifyContent: 'flex-end',
		flexDirection: 'row'
	},
	setHistoryLeft: {
		flex: 0.7,
	},
	setHistoryRight: {
		flex: 0.3,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'row'
	},
	historyStyle: {
		fontSize: 14,
		justifyContent: 'center',
		color: 'grey'
	},
	mobileNoStyle: {
		fontSize: 18
	}
})