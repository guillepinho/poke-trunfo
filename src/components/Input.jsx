import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    const { name, inputType, data,
      defStyle, placeholder, value,
      onChange, rows, disabled } = this.props;
    return (
      <div className="field">
        <div className="control">
          <input
            name={ name }
            type={ inputType }
            data-testid={ data }
            className={ defStyle }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            rows={ rows }
            disabled={ disabled }
          />
        </div>
      </div>

    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  defStyle: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  rows: '',
  disabled: false,
};

export default Input;
