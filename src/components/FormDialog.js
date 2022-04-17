import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { addChat } from '../store/chats/action';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const onAddChat = (chatName) => {
    const chatId = `chat${Date.now()}`;
    const chat = {
      chatId,
      chatName,
    }
    dispatch(addChat(chat));
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (value !== '') {
      onAddChat(value);
      setValue('');
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Создать чат
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Введите название чата</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название чата"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClick}>Создать</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
