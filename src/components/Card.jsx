import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="fullCard">
        <div className="topCard-div">
          <div data-testid="name-card">{ cardName }</div>
          <div data-testid="rare-card">{ cardRare }</div>
        </div>
        <div className="imgCard-div">
          <img
            src={ cardImage }
            alt={ cardName }
            className="imageP"
            data-testid="image-card"
          />
        </div>
        <div className="descCard-div" data-testid="description-card">
          { cardDescription }
        </div>
        <div className="atkCard-div" data-testid="attr1-card">
          { cardAttr1 }
        </div>
        <div className="defCard-div" data-testid="attr2-card">
          { cardAttr2 }
        </div>
        <div className="hpCard-div" data-testid="attr3-card">
          { cardAttr3 }
        </div>
        { cardTrunfo
          ? <div className="restCard-div" data-testid="trunfo-card">Super Trunfo</div>
          : <div className="restCard-div" /> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
