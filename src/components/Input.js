import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, id, name, value, onInputChange, onSaveButtonClick } = this.props;

    if (type === 'textarea') {
      return (
        <label htmlFor={ id }>
          { label }
          <textarea
            onChange={ onInputChange }
            name={ name }
            id={ id }
            data-testid={ id }
            value={ value }
          />
        </label>
      );
    }

    if (type === 'select') {
      return (
        <label htmlFor={ id }>
          { label }
          <select
            onChange={ onInputChange }
            name={ name }
            id={ id }
            data-testid={ id }
            value={ value }
          >
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
          <input
            onChange={ onInputChange }
            name={ name }
            type={ type }
            id={ id }
            data-testid={ id }
            checked={ value }
          />
          { label }
        </label>
      );
    }

    if (type === 'button') {
      return (
        <label htmlFor={ id }>
          <input
            onClick={ onSaveButtonClick }
            type={ type }
            id={ id }
            name={ name }
            data-testid={ id }
            value={ label }
            disabled={ value }
          />
        </label>
      );
    }

    return (
      <label htmlFor={ id }>
        { label }
        <input
          onChange={ onInputChange }
          name={ name }
          type={ type }
          id={ id }
          data-testid={ id }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func,
};

Input.defaultProps = {
  onSaveButtonClick: undefined,
};

export default Input;
