import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { ContactHome } from './contactListContainer/contact';
import { ContactDetails } from './contactDetailsContainer/contactDetails';
import { CreateContact } from './createContactContainer/createContact';
import { EditContact } from './editContactContainer/editContact';

const stack = createStackNavigator({
    ContactHome,
    ContactDetails,
    CreateContact,
    EditContact
})

export default createAppContainer(createSwitchNavigator({
    initialRouteName:stack
}))