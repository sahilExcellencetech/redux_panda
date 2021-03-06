import React from 'react';
import {connect} from 'react-redux';

const List=(props)=>(
    <div>
        {props.userDetail.email}
    </div>
);
const mapStateToProps=(state)=>{
    return {
        userDetail:state.userDetail
    };
};

const connectList=connect(mapStateToProps)(List);

export default connectList;
