import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import '../App.scss';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FormDialog from "./FormDialog";
import { selectChats } from "../store/chats/selectors";
import { deleteChatWithFB, initMessagesTrackerWithFB, initTrackerWithFB } from "../middlewares/middleware";


const ChatList = () => {
    const { chats } = useSelector(selectChats, shallowEqual);
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const onDeleteChat = (event, chatId) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(deleteChatWithFB(chatId));
    };

    React.useEffect(() => {
        dispatch(initTrackerWithFB());
        dispatch(initMessagesTrackerWithFB());
    }, []);

    return (
        <div className="chats">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    chats && <List component="nav" aria-label="chatList">
                        {Object.keys(chats).map((chat, index) => (
                            <Link to={`/chats/${chats[chat].chatId}`} key={index}>
                                <ListItemButton
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}>
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText primary={chats[chat].name} />
                                    <IconButton onClick={(event) => onDeleteChat(event, chats[chat].chatId)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                }
            </Box>
            <FormDialog />
        </div>
    )
};

export default ChatList;
