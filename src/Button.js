import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Button.scss'

function Btn() {
    return (
        <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx="padding: 15px 15px; margin-top:"
        >
            Отправить
        </Button>
    )
}

export default Btn;