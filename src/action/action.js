export const addUserDetail=({email,password}={})=>({
type:'ADD-USER',
userdetail:{
    email,
    password
}
});

export const usersignalmentDetails=({Distance,Location,Pension,Qualification,Working_Shift,facilities}={},driving_license,own_car)=>({
type:'SINGNALMENT-FORM',
signalmentDetail:{
  Distance,
  Location,
  Pension,
  Qualification,
  Working_Shift,
  facilities,
  driving_license,
  own_car,
}
});
