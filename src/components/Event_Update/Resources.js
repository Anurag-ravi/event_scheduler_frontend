import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
const Resources = () => {
    const Modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        boxShadow: 24,
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opendrive, setOpendrive] = React.useState(false);
    const handleOpendrive = () => setOpendrive(true);
    const handleClosedrive = () => setOpendrive(false);
    return(
        <div className='flex flex-col'style={{width:'100%'}}>
            <>
            <div className='flex flex-row' style={{width:'100%', justifyContent:'space-between',marginTop:'20px'}}>
                <div><Typography variant="h3">Upload Files</Typography></div>
                <div><Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE'}} onClick={handleOpen} startIcon={<UploadIcon />}>Upload</Button></div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={Modalstyle}>
                        <div className="flex flex-col" style={{maxWidth:'500px',margin:'0 auto'}}>
                            <div style={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'40px'}}><Typography variant="h4">Upload Files</Typography></div>
                        
                        <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE',marginBottom:'40px'}} onClick={handleOpen}>Browse</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
            <div className='flex flex-col mt-4'>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                                <DeleteIcon />
                            </Button>
                    </div>
                </div>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                                <DeleteIcon />
                            </Button>
                    </div>
                </div>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                                <DeleteIcon />
                            </Button>
                    </div>
                </div>

            </div>
            </>
            <>
            <div className='flex flex-row' style={{width:'100%', justifyContent:'space-between',marginTop:'100px'}}>
                <div><Typography variant="h3">Share Drive Link</Typography></div>
                <div><Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE'}} onClick={handleOpendrive} >+ New</Button></div>
                <Modal
                    open={opendrive}
                    onClose={handleClosedrive}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={Modalstyle}>
                        <div className="flex flex-col" style={{maxWidth:'500px',margin:'0 auto'}}>
                            <div style={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'40px'}}><Typography variant="h4">Share Drive Link</Typography></div>
                            <div className="flex flex-row justify-between align-middle mb-10">
                                <div style={{width:'80%'}}>
                                    <input type="text" className='rounded-sm w-full' placeholder='Paste Drive Link' style={{border:'solid gray 1px',borderRadius: '6px',height:'50px',marginTop:'2px',padding:'2px'}}/>
                                </div>
                                <div>
                                    <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE'}} >Upload</Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
            <div className='flex flex-col mt-4'>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                                <DeleteIcon />
                            </Button>
                    </div>
                </div>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                                <DeleteIcon />
                            </Button>
                    </div>
                </div>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                                <DeleteIcon />
                            </Button>
                    </div>
                </div>

            </div>
            </>
        </div>
    );
}

export default Resources;