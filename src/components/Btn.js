
import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const Btn = ({ buttonLabel }) => {
    const theme = useTheme();
    return (
        <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            style={{
                padding: theme.button.padding
            }}
        >
            {buttonLabel}
        </Button>
    );
};

export default Btn;

Btn.propTypes = {
    buttonLabel: PropTypes.string,
    onclick: PropTypes.func,
}