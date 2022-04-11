import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import '../App.scss';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ChatList = ({ chats }) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div className="chats">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="chatList">
                    {Object.keys(chats).map((chat, index) => (
                        <Link to={`/chats/${chat}`} key={index}>
                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={(event) => handleListItemClick(event, index)}>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary={chats[chat].name} />
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Box>
        </div>
    )
};

export default ChatList;

ChatList.propTypes = {
    chats: PropTypes.object,
}