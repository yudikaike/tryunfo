import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.verifyAttributes = this.verifyAttributes.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardCatalog: [],
    };
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    if (type === 'checkbox') {
      this.setState({
        [name]: checked,
      }, () => {
        this.validateForm();
      });
    } else {
      this.setState({
        [name]: value,
      }, () => {
        this.validateForm();
      });
    }
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardCatalog,
    } = this.state;
    cardCatalog.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    this.setState({
      cardCatalog,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
    this.validateTrunfo();
  }

  validateForm() {
    if (this.verifyInputs() && this.verifyAttributes()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  verifyInputs() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== '') {
      return true;
    }
    return false;
  }

  verifyAttributes() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const limit = 90;
    const sumLimit = 210;

    if ((attr1 + attr2 + attr3) > sumLimit
    || attr1 > limit
    || attr1 < 0
    || attr2 > limit
    || attr2 < 0
    || attr3 > limit
    || attr3 < 0) {
      return false;
    }
    return true;
  }

  validateTrunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

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
    } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
