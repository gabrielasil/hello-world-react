//a aplicação React inteira é um componente
//variavel que muda de valor = state;

import {useState} from "react";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

const App = () => {
  const [name, setName] = useState("Gabriela");

  const [bg, setBg] = useState("#A098F6");

  const [age, setAge] = useState(21);

  const handleCLick = () => {
    bg === "#A098F6" ? setBg("#CED8F6") : setBg("#A098F6");
  };

  const [list, setList] = useState(["AAAAAA", "BBBBBB", "CCCCCC"]);

  const handleAge = () => {
    setAge(age + 1);
  };

  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />
      <button onClick={handleCLick}>Mudar cor de fundo</button>
      {age <= 30 && <button onClick={handleAge}>Adicionar 1 ano</button>}

      {age > 30 && "Maior que 30 anos"}

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default App;
