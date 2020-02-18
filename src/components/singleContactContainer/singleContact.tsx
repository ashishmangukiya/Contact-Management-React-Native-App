import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { contact } from '../common/types';
import { Style } from './singleContactStyle';

type props={
    props:contact,
    onClick:Function,
    color:string
}
const SingleContact=(props:props)=>{
    return (
        <TouchableOpacity onPress={()=>props.onClick(props.props)}  style={Style.container}>
            <View style={Style.imageContainer}>
                {
                    props.props.profile_photo.length?
                    <Image source={{uri:props.props.profile_photo}} style={Style.image}/>:
                    <Icon name="user" style={[Style.image,Style.centerImage]} size={25} color="white" />
                }
            </View>
            <View style={Style.nameContainer}>
                <Text style={[Style.textStyle,{color:props.color}]}>
                    {props.props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default SingleContact;