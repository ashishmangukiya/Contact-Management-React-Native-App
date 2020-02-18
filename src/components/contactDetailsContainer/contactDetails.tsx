import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import SingleContact from '../singleContactContainer/singleContact';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import background from '../../../assets/background.png'
import { contact,navigation } from '../common/types';
import { Style } from './contactDetailsStyle';

export const ContactDetails = (props: navigation) => {

	const [contactDetails, setContactDetails] = useState(props.navigation.state.params.contactDetails)

	useEffect(() => {
		setContactDetails(props.navigation.state.params.contactDetails)
	}, [props])
	return (
		<View style={Style.container}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<ImageBackground
					source={contactDetails.profile_photo.length ? { uri: contactDetails.profile_photo } : background}
					style={Style.backGroundImageStyle}
				>
					<View style={Style.header}>
						<View style={Style.topHeader}>
							<View style={{ flex: 0.25 }}>
								<TouchableOpacity
									style={Style.commonPadding}
									onPress={() => props.navigation.navigate('ContactHome')}
								>
									<Ionicons name="ios-arrow-back" size={30} color="white" />
								</TouchableOpacity>
							</View>
							<View style={Style.profileStyle}>
								<Text style={Style.profileText}>
									PROFILE
                </Text>
							</View>
							<View style={{ flex: 0.25, alignItems: 'flex-end' }}>
								<TouchableOpacity
									style={Style.commonPadding}
									onPress={() => props.navigation.navigate('CreateContact', { ContactDetails: {} })}
								>
									<Ionicons name="ios-add" size={30} color="white" />
								</TouchableOpacity>
							</View>
						</View>
						<View style={Style.footerDetails}>
							<View style={Style.flex}>
								<View style={Style.left}>
									<View style={Style.padding}>
										<SingleContact
											props={contactDetails}
											onClick={() => {}}
											color="white"
										/>
									</View>
								</View>
								<View style={Style.right}>
									<Icon name="heart" style={Style.heartStyle} size={20} color="white" />
									<Icon name="edit" onPress={() => props.navigation.navigate('EditContact', { contactDetails })} style={Style.heartStyle} size={20} color="white" />
								</View>
							</View>
						</View>
					</View>
				</ImageBackground>
				<View style={Style.contactDetailsContainer}>
					{
						contactDetails.mobile.length ?
							<View style={Style.setList}>
								<View style={Style.setListLeft}>
									<Text style={Style.mobileNoStyle}>
										{contactDetails.mobile}
									</Text>
								</View>
								<View style={Style.setListRight}>
									<View>
										<Ionicons name="ios-call" style={Style.image} size={20} color="white" />
									</View>
									<View style={Style.padding}>
										<Ionicons name="ios-chatbubbles" style={Style.image} size={20} color="white" />
									</View>
								</View>
							</View> : null
					}
					<View style={Style.setList}>
						<View style={Style.setListLeft}>
							<Text style={Style.mobileNoStyle}>
								Video call
              </Text>
						</View>
						<View style={Style.setListRight}>
							<View>
								<Ionicons name="ios-videocam" style={Style.image} size={20} color="white" />
							</View>
						</View>
					</View>
					<View style={[Style.setList, !contactDetails.email.length ? Style.borderBottom : null]}>
						<View style={Style.setListLeft}>
							<Text style={Style.mobileNoStyle}>
								Duo
              </Text>
						</View>
						<View style={Style.setListRight}>
							<View>
								<Ionicons name="ios-videocam" style={Style.image} size={20} color="white" />
							</View>
						</View>
					</View>
					{
						contactDetails.email.length ?
							<View style={[Style.setList, Style.borderBottom]}>
								<View style={Style.setListLeft}>
									<Text style={Style.mobileNoStyle}>
										Email
                  </Text>
								</View>
								<View style={[Style.setListRight, { flexGrow: 0.6 }]}>
									<Text style={{ color: 'grey', textAlign: 'right' }}>
										{contactDetails.email}
									</Text>
								</View>
							</View> : null
					}

					<View style={Style.setListSub}>
						<View style={Style.setListLeft}>
							<Text style={Style.callHistoryStyle}>
								Call history
          		</Text>
						</View>
					</View>
					<TouchableOpacity style={Style.setListSub}>
						<View style={Style.setHistoryLeft}>
							<Text style={Style.mobileNoStyle}>
								18 Mar 2017 6:01 PM
            	</Text>
						</View>
						<View style={Style.setHistoryRight}>
							<View>
								<Text style={Style.historyStyle}>
									Didn't connect
	              </Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[Style.setListSub, Style.borderBottom]}>
						<View style={Style.setHistoryLeft}>
							<Text style={Style.mobileNoStyle}>
								18 Mar 2017 6:02 PM
            	</Text>
						</View>
						<View style={Style.setHistoryRight}>
							<Text style={Style.historyStyle}>
								Didn't connect
              </Text>
						</View>
					</TouchableOpacity>
					<View style={Style.setListSub}>
						<View style={Style.setListLeft}>
							<Text style={Style.callHistoryStyle}>
								More
              </Text>
						</View>
					</View>
					{
						['Default ringtone', 'Qr code', 'Send money', 'Request money'].map((data, i) => (
							<TouchableOpacity key={i} style={Style.setListSub}>
								<View style={Style.setHistoryLeft}>
									<Text style={Style.mobileNoStyle}>
										{data}
									</Text>
								</View>
								<View style={Style.setHistoryRight}>
									<Ionicons name="ios-arrow-forward" size={20} color="black" />
								</View>
							</TouchableOpacity>
						))
					}
				</View>
			</ScrollView>
		</View>
	)
}

ContactDetails.navigationOptions = {
	headerShown: false
}

