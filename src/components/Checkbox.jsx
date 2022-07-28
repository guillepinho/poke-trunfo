import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Checkbox extends Component {
  render() {
    const { name, checked, onChange, hasTrunfo } = this.props;

    let checkboxDiv = (
      <label htmlFor="superTrunfo" className="checkbox checkboxer cent">
        <input
          name={ name }
          type="checkbox"
          data-testid="trunfo-input"
          id="superTrunfo"
          checked={ checked }
          onChange={ onChange }
        />
        <span style={ { color: 'rgb(0, 0, 0, 0)' } }>.....</span>
        Super Trunfo?
      </label>
    );

    if (hasTrunfo) {
      checkboxDiv = 'Você já tem um Super Trunfo em seu baralho';
    }

    return (
      <div className="control checkboxer">
        { checkboxDiv }
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Checkbox;
