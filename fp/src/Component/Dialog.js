import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function FormDialog({open,handleClose,data,onChange, handleFormSubmit}) {
  const {id, name, email, phone} = data;

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> 
          {id?"Update user":"Create new user"}  
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField variant="outlined" margin='dense' onChange={e=>onChange(e)} value={name} id='name' placeholder='Enter name' label="name" fullWidth/>
            <TextField variant="outlined" margin='dense' onChange={e=>onChange(e)} value={email} id='email' placeholder='Enter email' label="email" fullWidth/>
            <TextField variant="outlined" margin='dense' onChange={e=>onChange(e)} value={phone} id='phone' placeholder='Enter phone' label="phone" fullWidth/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">Cancel</Button>
          <Button color="primary" variant="contained" onClick={()=>handleFormSubmit()}>
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}