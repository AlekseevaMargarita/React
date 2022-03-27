
import './App.scss';
import Message from './Message'
import img from './2022-03-27_173907.png'

const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Tempore ab fugiat aperiam facere nam dolorem enim, minima minus, culpa deserunt animi. 
Unde atque excepturi perspiciatis, nisi explicabo nostrum nesciunt consequuntur!`;

function App() {
  return (
    <div className="App">
      <h1>Урок 1</h1>
      <h2>Задания 1-4</h2>
      <Message style={{ backgroundColor: '#f0ffff' }} text={text} />
      <h2>Задание 5</h2>
      <img src={img} alt="Задание 5" className="img"></img>
    </div>

  );
}

export default App;
