
function Input(props) {

    return (
        <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder="Введите сообщение"
        />
    )
}

export default Input;