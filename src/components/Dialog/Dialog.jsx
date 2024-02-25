
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const DialogBox = ({ open, handleClose, title, content, actions }) => {
  return (
    <Dialog open={open}  >
      <DialogTitle sx={{fontSize:'70',fontWeight:'900' ,color:'#53a5df'}}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.handler} color={action.color}  className="btn" sx={{
            width: 100,
            color: 'white',
            backgroundColor:'#53a5df',
            ':hover': {backgroundColor: 'grey'}
          }}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
