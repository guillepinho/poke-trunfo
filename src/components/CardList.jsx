/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card';

export class CardList extends Component {
  render() {
    const { cardList, excludeOnClick } = this.props;

    const arrayOfCards = cardList.map((card, index) => {
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage,
        cardRare, cardTrunfo } = card;

      return (
        <div key={ index }>
          <Card
            className="cardOfList"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <button
            type="button"
            className="exclude button is-small is-danger"
            onClick={ excludeOnClick }
            name={ cardName }
            data-testid="delete-button"
          >
            X
          </button>
        </div>);
    });
    return <div className="listOfCards">{ arrayOfCards }</div>;
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  excludeOnClick: PropTypes.func.isRequired,
};

export default CardList;
