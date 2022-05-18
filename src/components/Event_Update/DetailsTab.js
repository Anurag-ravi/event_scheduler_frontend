import React, {useState} from 'react'
import eventcreation from "../../assets/eventcreation.png"
import Dropdown from './Dropdown'
import OnlineEvent from './OnlineEvent';
import Other from '../../pages/Others/others';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
const DetailsTab = (props) => {
    const [eventname, setEventname] = useState(props.event.title)
    const [image, setImage] = useState(eventcreation);
    const [date, setDate] = useState(props.event.date);
    const [description, setDescription] = useState(props.event.description);
    const [offline, setOffline] = useState(true);
    var dateVar = new Date(props.event.date);
    const [time, setTime] = useState(dateVar.setHours(Number(props.event.time_from[0]),Number(props.event.time_from[1]),Number(props.event.time_from[3]),Number(props.event.time_from[4])));
    console.log(typeof(props.event.time_from))
    console.log("DetailsTab")
    const hiddenFileInput = React.useRef(null);
    const handleUploadClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleImageChange = (event) => {
        const fileUploaded = event.target.files[0];
        setImage(fileUploaded);
      };
    const offlineEv = ()=>{
        setOffline(true);
    }
    const onlineEv = ()=>{
        setOffline(false);
    }

    return(
        <div className='flex flex-col'>
            <div className="flex flex-col">
                <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                    Display Image
                </div>
                <div className='rounded w-full mt-4 items-center flex-shrink' >
                    <div style={{border:'4px solid white',borderRadius: '17px',boxShadow:'black 0px 2px 5px'}}>
                        <img src={image} alt="" className='rounded-2xl eventCreationImg shadow-xl' style={{filter: 'blur(2px)',padding:'2px'}}/>
                    </div>
                    <button onClick={handleUploadClick} className="flex flex-col changeImage sm:changeImagesm md:changeImageStampmd lg:changeImagelg">
                        Change Image
                    </button>
                    <input type="file" name="file" id="file" onChange={handleImageChange} ref={hiddenFileInput} style={{display:'none'}} />
                </div>                
            </div>
            <div className='flex flex-col mt-4'>
                <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                    Event Name
                </div>
                <div>
                    <input type="text" className='rounded-sm shadow-xl w-full' placeholder='Enter Event Name' style={{border:'4px solid white',borderRadius: '6px',boxShadow:'black 0px 1px 5px',height:'50px',marginTop:'15px',outline:'none'}} value={eventname} onChange={e => setEventname(e.target.value)}/>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <div className='flex flex-row justify-between' >
                    <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                        Location
                    </div>
                    <div className='flex flex-row h-10 rounded-lg border-[#DDE1FF] bg-[#DDE1FF] self-center p-0.5 gap-2 transition    ease-in-out delay-150' style={{borderWidth:"1px"}}>
                        <div onClick={offlineEv} className={`rounded-lg ${offline ? "bg-[#FFFFFF] text-black":"text-black font-semibold"} px-5 py-1 cursor-pointer`}>Offline</div>
                        <div onClick={onlineEv} className={`rounded-lg ${!offline ? "bg-[#FFFFFF] text-black":"text-black font-semibold"}  px-5 py-1 cursor-pointer`}>Online</div>
                    </div>
                </div>
                {offline ? 
                <div>
                    <Dropdown />
                </div>
                :
                <div>
                    <OnlineEvent />
                </div>
                }
                
            </div>
            <div className='flex flex-row mt-4 mr-30'>
                <div className='flex flex-col mr-10' >
                    <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                        Date
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            value={date}
                            onChange={(newValue) => {
                            setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='flex flex-col mr-10' >
                    <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                        Time
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            value={time}
                            ampm={false}
                            onChange={(newValue) => {
                            setTime(newValue);
                            console.log(newValue, typeof(newValue))
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                    Description
                </div>
                <div>
                    <textarea className='rounded-sm shadow-xl w-full' placeholder='Enter Event Description' style={{border:'4px solid white',borderRadius: '6px',boxShadow:'black 0px 1px 5px',height:'200px',marginTop:'15px',outline:'none'}} value={description} onChange={e=>setDescription(e)}/>
                </div>
            </div>
            <div>
            <Button variant="contained" startIcon={<CheckCircleIcon />} sx={{borderRadius:'20px',paddingX:'20px',paddingY:'10px',backgroundColor:'#3D55BE',marginTop:'20px'}}>
                Save Changes
            </Button>
            </div>

        </div>
    )
}
export default DetailsTab