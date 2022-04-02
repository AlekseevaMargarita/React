import './Input.scss'

function Input(props) {

    return (
        <input
            type="text"
            className="Input"
            value={props.value}
            onChange={props.onChange}
            placeholder="Введите сообщение"
        />
    )
}

export default Input;