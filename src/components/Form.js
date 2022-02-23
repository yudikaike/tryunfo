import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <div>
        <Input label="Nome" type="text" id="name-input" />
        <Input label="Descrição" type="textarea" id="description-input" />
        <Input label="Attr01" type="number" id="attr1-input" />
        <Input label="Attr02" type="number" id="attr2-input" />
        <Input label="Attr03" type="number" id="attr3-input" />
        <Input label="Imagem" type="text" id="image-input" />
        <Input label="Raridade" type="select" id="rare-input" />
        <Input label="Super Trybe Trunfo" type="checkbox" id="trunfo-input" />
        <Input label="Salvar" type="button" id="save-button" />
      </div>
    );
  }
}

export default Form;
