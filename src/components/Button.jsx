import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <div className="control">
        <button
          type="button"
          className="button is-warning"
          data-testid="save-button"
          disabled={ disabled }
          onClick={ onClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
