import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { Button } from './Button';

export class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <section className="addCardSect">
        <h1 className="subtitle is-5 titles">Adicionar Carta</h1>
        <Input
          name="cardName"
          inputType="text"
          data="name-input"
          defStyle="input is-warning"
          placeholder="Nome da Carta"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          name="cardDescription"
          inputType="textarea"
          data="description-input"
          defStyle="textarea is-warning"
          placeholder="Descrição da Carta"
          value={ cardDescription }
          onChange={ onInputChange }
          rows="1"
        />
        <Input
          name="cardAttr1"
          inputType="number"
          data="attr1-input"
          defStyle="input is-warning"
          placeholder="Valor do Atributo 1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          name="cardAttr2"
          inputType="number"
          data="attr2-input"
          defStyle="input is-warning"
          placeholder="Valor do Atributo 2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          name="cardAttr3"
          inputType="number"
          data="attr3-input"
          defStyle="input is-warning"
          placeholder="Valor do Atributo 3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          name="cardImage"
          inputType="text"
          data="image-input"
          defStyle="input is-warning"
          placeholder="Endereço de Imagem da Carta"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <Select
          name="cardRare"
          data="rare-input"
          defStyle="select is-fullwidth is-warning"
          value={ cardRare }
          onChange={ onInputChange }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <br />
        <Checkbox
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          hasTrunfo={ hasTrunfo }
        />
        <br />
        <Button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
        <br />
      </section>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
