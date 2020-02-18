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
import shortid from 'shortid';
import TextInputComponent from '../common/textInputComponent';
import { navigation } from '../common/types';
import { Style } from './createContactStyle';

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

export const CreateContact = (props: navigation) => {

  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')

  const dispatch = useDispatch();

  let setData = () => {
    if (name.length && phone.length) {
      const realm = new Realm({ schema: [ContactsSchema] });
      realm.write(() => {
        const data = realm.create(CONTACTS_SCHEMA, {
          id: shortid.generate(),
          name: name,
          profile_photo: photo,
          mobile: phone,
          dob: date.length ? date : '',
          email: email,
          created_at: new Date(),
          updated_at: new Date(),
        });
        setTimeout(() => {
          Realm.open(databaseOptions).then(realm => {
            dispatch({
              type: 'contacts',
              data: realm.objects(CONTACTS_SCHEMA).sorted('name')
            })
            props.navigation.navigate('ContactDetails', { contactDetails: data })
          })
        }, 0)
      });
    } else {
      if (!name.length) {
        setNameError(true)
      } if (!phone.length) {
        setPhoneError(true)
      }
    }

  }

  useEffect(() => {
    setName('')
    setPhoto('')
    setPhone('')
    setEmail('')
    setDate('')
  }, [props])

  let openCamera = () => {
    ImagePicker.showImagePicker(options, (response) => {
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
              <Icon name="user" onPress={() => openCamera()} style={[Style.image, Style.centerImage]} size={25} color="white" />
          }
        </View>
        <TextInputComponent
          value={name}
          type="name"
          placeholder="Name"
          onChange={(data: string) => {
            setNameError(false)
            setName(data)
          }}
        />
        {
          nameError ?
            <View style={{ alignItems: 'flex-end', paddingHorizontal: 10 }}>
              <Text style={{ color: 'red', fontSize: 12 }}>
                Name can not be blank.
          </Text>
            </View> : null
        }
        <TextInputComponent
          value={phone}
          type="phone"
          placeholder="Phone number"
          onChange={(data: string) => {
            setPhoneError(false)
            setPhone(data)
          }}
        />
        {
          phoneError ?
            <View style={{ alignItems: 'flex-end', paddingHorizontal: 10 }}>
              <Text style={{ color: 'red', fontSize: 12 }}>
                Phone number can not be blank.
          </Text>
            </View> : null
        }
        <TextInputComponent
          value={email}
          type="email"
          placeholder="Email"
          onChange={(data: string) => setEmail(data)}
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
        <Text style={Style.buttonTextStyle}> Create </Text>
      </TouchableOpacity>
    </View>
  )
}

CreateContact.navigationOptions = (props: navigation) => ({
  title: 'Create Contact',
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

