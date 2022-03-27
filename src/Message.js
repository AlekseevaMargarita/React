import './Message.scss'

function Message(props) {
    return (
        <p className="Message">{props.text}</p>
    );
}

export default Message;