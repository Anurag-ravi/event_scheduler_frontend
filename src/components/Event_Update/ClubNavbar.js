import React from 'react'
import swc from "../../assets/swc.png"
const ClubNavbar = () => {
    return(
        <div className='flex flex-row justify-between'>
        <img src={swc} alt="" className='rounded-full w-16'/>
        <div className='flex flex-row'>
            <div className="flex flex-col self-center">
                <div className="text-2xl font-medium">Club Name</div>
                <div className="mr-2">wntrscing@iitg.ac.in</div>
            </div>
            <img src={swc} alt="" className='rounded-full w-16'/>
        </div>
        </div>
    )
}
export default ClubNavbar