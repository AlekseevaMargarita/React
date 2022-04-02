import './Message.scss'

function Message(props) {

    return (props.items.map((item, index) =>
        <div className="Message" key={index}>
            <p className='Message__text'>{item.text}</p>
            <span className="Message__author">{item.author}</span>
        </div>
    ));
}

export default Message;