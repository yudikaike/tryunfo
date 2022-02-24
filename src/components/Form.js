import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../App.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="Form">
        <Input
          onInputChange={ onInputChange }
          name="cardName"
          label="Nome"
          type="text"
          id="name-input"
          value={ cardName }
        />
        <Input
          onInputChange={ onInputChange }
          label="Descrição"
          type="textarea"
          name="cardDescription"
          id="description-input"
          value={ cardDescription }
        />
        <Input
          onInputChange={ onInputChange }
          name="cardAttr1"
          label="Attr01"
          type="number"
          id="attr1-input"
          value={ cardAttr1 }
        />
        <Input
          onInputChange={ onInputChange }
          name="cardAttr2"
          label="Attr02"
          type="number"
          id="attr2-input"
          value={ cardAttr2 }
        />
        <Input
          onInputChange={ onInputChange }
          name="cardAttr3"
          label="Attr03"
          type="number"
          id="attr3-input"
          value={ cardAttr3 }
        />
        <Input
          onInputChange={ onInputChange }
          name="cardImage"
          label="Imagem"
          type="text"
          id="image-input"
          value={ cardImage }
        />
        <Input
          onInputChange={ onInputChange }
          label="Raridade"
          type="select"
          name="cardRare"
          id="rare-input"
          value={ cardRare }
        />
        { hasTrunfo === false
          ? (
            <Input
              onInputChange={ onInputChange }
              label="Super Trybe Trunfo"
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              value={ cardTrunfo }
            />)
          : <p>Você já tem um Super Trunfo em seu baralho</p>}
        <Input
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ onInputChange }
          label="Salvar"
          type="button"
          id="save-button"
          name="saveButton"
          value={ isSaveButtonDisabled }
        />
      </div>
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
