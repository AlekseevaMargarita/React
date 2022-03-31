import './Message.scss'

function Message(props) {

    return (props.items.map((message) =>
        <div className="Message">
            <p>{message.text}</p>
            <span>{message.author}</span>
        </div>
    ));
}

export default Message;