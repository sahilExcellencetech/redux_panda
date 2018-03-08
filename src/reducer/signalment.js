import {usersignalmentDetails} from '../action/action';
const userSignalmentDetails=(state={
  Distance:null,
  Location:null,
  Pension:null,
  Qualification:null,
  Working_Shift:null,
  facilities:null,
  driving_license:false,
  own_car:false,
},action)=>{
    switch(action.type){
        case 'SINGNALMENT-FORM':
        return[...state,action.signalmentDetail];

        default :
        return state;
    }
};
export default userSignalmentDetails;
