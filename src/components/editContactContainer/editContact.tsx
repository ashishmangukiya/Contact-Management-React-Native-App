import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import { CONTACTS_SCHEMA, ContactsSchema, databaseOptions } from '../../models/schema';
import Realm from 'realm';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from '../common/datePicker';
import ImagePicker from 'react-native-image-picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch } from "react-redux";
import TextInputComponent from '../common/textInputComponent';
import {contact, navigation } from '../common/types';
import { Style } from './editContactStyle';

const options = {
	title: 'Select Option',
	maxWidth: 800,
	maxHeight: 600,
	quality: 0.8,
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
};

export const EditContact = (props: navigation) => {

	const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false)
  	const [phoneError, setPhoneError] = useState(false)
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [photo, setPhoto] = useState('');

	const dispatch = useDispatch();

	let setData = () => {
		if(name.length && phone.length) {
		const realm = new Realm({ schema: [ContactsSchema] });
		let response:contact = Object(realm.objects(CONTACTS_SCHEMA).filtered(`id = "${props.navigation.state.params.contactDetails.id}"`)[0]);
		realm.write(() => {
			response.name = name;
			response.profile_photo = photo;
			response.mobile = phone;
			response.email = email;
			response.dob = date.length ? date : '';
			response.updated_at = new Date();
		});

		Realm.open(databaseOptions).then(realm => {
			dispatch({
				type: 'contacts',
				data: realm.objects(CONTACTS_SCHEMA).sorted('name')
			})
			props.navigation.navigate('ContactDetails', { contactDetails: response })
		})
	} else {
		if(!name.length) {
			setNameError(true)
		} if(!phone.length) {
			setPhoneError(true)
		}
	}
}

	useEffect(() => {
		setName(props.navigation.state.params.contactDetails.name)
		setPhoto(props.navigation.state.params.contactDetails.profile_photo)
		setPhone(props.navigation.state.params.contactDetails.mobile)
		setEmail(props.navigation.state.params.contactDetails.email)
		setDate(props.navigation.state.params.contactDetails.dob)
	}, [])

	let openCamera = () => {
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: 'data:image/jpeg;base64,' + response.data };
				setPhoto(source.uri)
			}
		});
	}
	return (
		<View style={Style.container}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={Style.imageCenter}>
					{
						photo.length ?
							<TouchableHighlight onPress={() => openCamera()} underlayColor='white'>
								<Image source={{ uri: photo }} style={Style.image} />
							</TouchableHighlight>
							:
							<Icon name="user" onPress={() => openCamera()} style={[Style.image,Style.centerImage]} size={25} color="white" />
					}
				</View>
			  <TextInputComponent
          value={name}
          type="name"
          placeholder="Name"
					onChange={(data:string)=>{
            setNameError(false)
            setName(data)}}        />
				    {
          nameError?
          <View style={{alignItems:'flex-end',paddingHorizontal:10}}>
          <Text style={{color:'red',fontSize:12}}>
            Name can not be blank.
          </Text>
        </View>:null
        }
         <TextInputComponent
          value={phone}
          type="phone"
          placeholder="Phone"
					onChange={(data:string)=>{
            setPhoneError(false)
            setPhone(data)}}        />
				   {
          phoneError?
          <View style={{alignItems:'flex-end',paddingHorizontal:10}}>
          <Text style={{color:'red',fontSize:12}}>
            Phone number can not be blank.
          </Text>
        </View>:null
        }
         <TextInputComponent
          value={email}
          type="email"
          placeholder="Email"
          onChange={(data:string)=>setEmail(data)}
        />
				<View style={Style.inputContainer}>
					<DatePicker
						date={date}
						changedDate={(date: string) => setDate(date)}
					/>
				</View>
			</ScrollView>
			<TouchableOpacity
				onPress={setData}
				style={Style.buttonStyle}
			>
				<Text style={{ textAlign: 'center', color: 'white' }}> Update </Text>
			</TouchableOpacity>
		</View>
	)
}

EditContact.navigationOptions = (props: navigation) => ({
	title: 'Update Contact',
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
	headerLeft: (
		<TouchableOpacity
			style={{
				paddingHorizontal: 15
			}}
			onPress={() => props.navigation.navigate('ContactHome')}
		>
			<Ionicons name="ios-arrow-back" size={25} color="black" />
		</TouchableOpacity>
	)

})

