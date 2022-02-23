import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { label, type, id } = this.props;

    if (type === 'textarea') {
      return (
        <label htmlFor={ id }>
          { label }
          <textarea id={ id } data-testid={ id } />
        </label>
      );
    }

    if (type === 'select') {
      return (
        <label htmlFor={ id }>
          { label }
          <select id={ id }>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      );
    }

    if (type === 'checkbox') {
      return (
        <label htmlFor={ id }>
          <input type={ type } id={ id } data-testid={ id } />
          { label }
        </label>
      );
    }

    if (type === 'button') {
      return (
        <label htmlFor={ id }>
          <input type={ type } id={ id } data-testid={ id } value={ label } />
        </label>
      );
    }

    return (
      <label htmlFor={ id }>
        { label }
        <input type={ type } id={ id } data-testid={ id } />
      </label>
    );
  }
}

export default Input;
