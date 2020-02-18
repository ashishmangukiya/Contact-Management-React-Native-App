import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { CONTACTS_SCHEMA, databaseOptions } from '../../models/schema';
import Realm from 'realm';
import SingleContact from '../singleContactContainer/singleContact';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import {contact,navigation} from '../common/types'
import { Style } from './contactListStyle';

export const ContactHome = (props: navigation) => {
	const [emptyList, setEmptyList] = useState(false)
	const counter = useSelector((state:{contacts:contact}) => state.contacts);
	const dispatch = useDispatch();

	useEffect(() => {
		Realm.open(databaseOptions).then(realm => {
			dispatch({
				type: 'contacts',
				data: realm.objects(CONTACTS_SCHEMA).sorted('name')
			})
			if (!realm.objects(CONTACTS_SCHEMA).sorted('name').length) {
				setEmptyList(true)
			}
		});
	}, [])

	const onClickContanct = (data: Object) => {
		props.navigation.navigate('ContactDetails', { contactDetails: data })
	}

	return (
		<View style={Style.container}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={Style.flex}>
					{
						(counter && counter.length > 0) ? counter.map((data:contact, i:number) => {
							if (counter[i - 1] && (counter[i - 1].name[0] != data.name[0]) && isNaN(Number(data.name[0])))
								return <View key={i} style={Style.borderBottom}>
									<Text style={[Style.charStyle, Style.color]}>
										{data.name[0]}
									</Text>
									<SingleContact
										props={data}
										color="black"
										onClick={onClickContanct} />
								</View>
							else if (i == 0 && isNaN(Number(data.name[0])))
								return <View key={i} >
									<Text style={[Style.charStyle, Style.color]}>
										{data.name[0]}
									</Text>
									<SingleContact
										props={data}
										color="black"
										onClick={onClickContanct} />
								</View>
							else
								return <SingleContact
									key={i}
									props={data}
									color="black"
									onClick={onClickContanct} />
						}
						) : null
					}
					{
						(emptyList && counter && counter.length == 0)?
						<View style={Style.emptyListStyle}>
								<Text style={[Style.color, Style.padding]}>
									No contacts found
								</Text>
							</View>:null
					}
				</View>
			</ScrollView>
			<View style={Style.buttonContainer}>
				<Ionicons
					name="ios-add"
					onPress={() => props.navigation.navigate('CreateContact')}
					style={Style.image}
					size={40}
					color="white" />
			</View>
		</View>
	)
}

ContactHome.navigationOptions = (props: navigation) => ({
	title: 'Contacts',
	headerTitleAlign: 'center',
	headerTitleStyle: {
		fontWeight: '800',
		letterSpacing: 0.5,
		color: 'black',
	},
	headerStyle: {
		backgroundColor: 'white',
		elevation: 0,
		shadowOpacity: 0,
	},
})

