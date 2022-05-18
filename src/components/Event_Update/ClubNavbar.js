import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { refresh_token } from '../../redux/actions';
import { useSelector } from "react-redux";
import client from "../../axios"
import swc from "../../assets/swc.png"
import { getLogo } from "../../utilities/ClubLogo"
const ClubNavbar = (props) => {
    console.log("Props lelooo",props.event);
    return(
        <div className='flex flex-row justify-between'>
        <img src={swc} alt="" className='rounded-full w-16'/>
        <div className='flex flex-row'>
            <div className="flex flex-col self-center">
                <div className="text-2xl font-medium">{props.event.club_name}</div>
                <div className="mr-2">wntrscing@iitg.ac.in</div>
            </div>
            <img src={getLogo(props.event.club_name)} alt="" className='rounded-full w-16'/>
        </div>
        </div>
    )
}
export default ClubNavbar