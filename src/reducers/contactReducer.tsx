
type action={
  type:string,
  data:object
}
function contactReducer(state = {contacts:[]}, action:action){
switch (action.type) {
    case "contacts":
    return {
      contacts : action.data
    };
    default:
      return [];
  }
}
 
export default contactReducer;