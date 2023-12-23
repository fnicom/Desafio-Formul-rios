// Importa a biblioteca React
import React from 'react';

// Define um componente funcional chamado Radio, que recebe várias propriedades
const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  // Se a propriedade 'active' for falsa, retorna nulo (não renderiza nada)
  if (active === false) return null;

  // Retorna o JSX que representa um campo de seleção de opções (fieldset)
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      {/* Um elemento de legenda (legend) para descrever o campo de seleção */}
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>

      {/* Mapeia as opções fornecidas e cria um input do tipo radio para cada uma */}
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          {/* Um input do tipo radio, associado ao ID fornecido */}
          <input
            type="radio"
            id={id}
            // Verifica se o valor atual é igual à opção, marcando-o como selecionado
            checked={value === option}
            // Define a opção como o valor do input quando selecionado
            value={option}
            // Chama a função onChange quando o valor é alterado
            onChange={onChange}
          />
          {/* Exibe o texto da opção */}
          {option}
        </label>
      ))}
    </fieldset>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Radio;
