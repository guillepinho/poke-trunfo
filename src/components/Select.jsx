import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Select extends Component {
  render() {
    const { value, onChange, data, defStyle, name, options, disabled } = this.props;
    const arrayOfOptions = options
      .map((option, index) => (<option key={ index } value={ option }>{option}</option>));
    return (
      <div className="control is-expanded">
        <div className={ defStyle }>
          <select
            name={ name }
            data-testid={ data }
            value={ value }
            onChange={ onChange }
            disabled={ disabled }
          >
            { arrayOfOptions }
            {/* <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option> */}
          </select>
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  defStyle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
};

export default Select;
