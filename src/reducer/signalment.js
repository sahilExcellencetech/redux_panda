import {usersignalmentDetails} from '../action/action';
const userSignalmentDetails=(state={
  driving_license:false,
  own_car:false,
},action)=>{
    switch(action.type){
        case 'SINGNALMENT-FORM':
        return state=action.signalmentDetail;

        default :
        return state;
    }
};
export default userSignalmentDetails;
