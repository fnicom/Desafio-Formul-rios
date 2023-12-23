// Importa as bibliotecas React e useState do React
import React, { useState } from "react";

// Importa o arquivo de estilos CSS
import "./App.css";

// Importa o array de perguntas do arquivo perguntas.js
import { perguntas } from "./Form/perguntas";

// Importa o componente Radio do arquivo Radio.js
import Radio from "./Form/Radio";

// Define o componente funcional App
function App() {
  // Define o estado para armazenar as respostas do usuário
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  // Define o estado para controlar o slide atual (pergunta em exibição)
  const [slide, setSlide] = useState(0);

  // Define o estado para armazenar o resultado final
  const [resultado, setResultado] = useState(null);

  // Função chamada quando o valor de uma opção de rádio é alterado
  function handleChange({ target }) {
    // Atualiza o estado das respostas com a resposta selecionada
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  // Função chamada quando o usuário decide ver o resultado final
  function resultadoFinal() {
    // Filtra as perguntas corretas com base nas respostas do usuário
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );

    // Atualiza o estado com a mensagem de resultado
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  // Função chamada quando o botão "Próxima" é clicado
  function handleClick() {
    // Se ainda há perguntas para exibir
    if (slide < perguntas.length - 1) {
      // Avança para a próxima pergunta
      setSlide(slide + 1);
    } else {
      // Caso contrário, exibe o resultado final
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  // Renderiza o componente
  return (
    // Formulário React com manipulação do evento onSubmit
    <form onSubmit={(event) => event.preventDefault()}>
      {/* Mapeia as perguntas e renderiza o componente Radio para cada uma */}
      {perguntas.map((pergunta, index) => (
        <Radio
          // Determina se o componente Radio deve estar ativo com base no slide atual
          active={slide === index}
          // Atribui uma chave única para cada componente Radio
          key={pergunta.id}
          // Passa as propriedades da pergunta e do estado das respostas para o componente Radio
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {/* Se houver um resultado, exibe a mensagem de resultado, senão, exibe o botão "Próxima" */}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
}

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
