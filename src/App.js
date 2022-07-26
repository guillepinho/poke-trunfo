/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
import React from 'react';
import { Form } from './components/Form';
import './App.css';
import { Card } from './components/Card';
import { CardList } from './components/CardList';
import { Input } from './components/Input';
import { Select } from './components/Select';
import data from './data/data';

class App extends React.Component {
  state= {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    filterName: '',
    filterRare: 'todas',
    filterTrunfo: false,
    cardList: data,
    gameOn: false,
    cardShow: 0,
    gameDeck: [],
    disableNext: false,
    endGame: false,
  }

  inputHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const valueToAdd = (name === 'cardName' || name === 'cardDescription'
      ? value.toLowerCase() : value);
    this.setState({
      [name]: valueToAdd,
    });
  }

  enableButton = () => {
    const maxTotal = 210;
    const max = 90;

    const { cardAttr1, cardAttr2, cardAttr3,
      cardName, cardDescription, cardImage } = this.state;
    const arrayOfStates = [cardAttr1, cardAttr2, cardAttr3,
      cardName, cardDescription, cardImage];
    const points = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];

    const anyLowerThan0 = points.some((att) => att < 0);
    const isAnyHigherThan90 = points.some((att) => att > max);
    const isTotalTooHigh = (points.reduce((acc, cur) => acc + cur)) > maxTotal;

    const isEveryFilled = arrayOfStates.some((state) => state.length === 0);

    return isEveryFilled || isAnyHigherThan90 || isTotalTooHigh || anyLowerThan0;
  }

  saveNewCard = () => {
    const { cardAttr1, cardAttr2, cardAttr3,
      cardName, cardDescription, cardImage,
      cardRare, cardTrunfo } = this.state;
    this.setState((estAnterior) => ({
      cardList: [...estAnterior.cardList, {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  }

  checkTrunfo = () => {
    const { cardList } = this.state;
    return cardList.some(({ cardTrunfo }) => cardTrunfo === true);
  }

  excludeOnClick = ({ target }) => {
    const { name } = target;
    const { cardList } = this.state;

    const found = -1;

    const names = cardList.map((card) => card.cardName);
    const cardToExclude = names.indexOf(name);

    if (cardToExclude > found) {
      this.setState(() => ({
        cardList: cardList.filter((_, index) => index !== cardToExclude),
      }));
    }
  }

  startGame = () => {
    const { cardList } = this.state;
    const gameCards = cardList.map((card) => card).sort(() => Math.random() - 0.5);

    this.setState({
      gameOn: true,
      gameDeck: gameCards,
      cardShow: 0,
      disableNext: false,
      endGame: false,
    });
  }

  nextCard = () => {
    const { cardShow, cardList } = this.state;

    if (cardShow === cardList.length - 1) {
      this.setState({
        disableNext: true,
        endGame: true,
      });
    }
    this.setState((estAnterior) => ({
      cardShow: estAnterior.cardShow + 1,
    }));
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  reset = () => {
    this.setState({
      gameOn: false,
      cardShow: 0,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, cardList, filterName,
      filterRare, filterTrunfo, gameOn,
      cardShow, gameDeck, disableNext,
      endGame } = this.state;

    let cardsToShow = cardList
      .filter((card) => card.cardName.includes(filterName));

    if (filterRare !== 'todas') {
      cardsToShow = cardsToShow.filter((card) => (card.cardRare === filterRare));
    }

    if (filterTrunfo) {
      cardsToShow = cardList.filter((card) => (card.cardTrunfo === true));
    }

    const isFormValidated = this.enableButton();
    const hasTrunfo = this.checkTrunfo();

    // eslint-disable-next-line no-magic-numbers

    const eachCardOfGame = gameDeck
      .map((card, index) => {
        const { cardName: name, cardDescription: desc, cardAttr1: atk,
          cardAttr2: def, cardAttr3: hp, cardImage: img, cardRare: rare,
          cardTrunfo: trunf } = card;
        return (<Card
          key={ index }
          cardName={ name }
          cardDescription={ desc }
          cardAttr1={ atk }
          cardAttr2={ def }
          cardAttr3={ hp }
          cardImage={ img }
          cardRare={ rare }
          cardTrunfo={ trunf }
        />);
      });

    const wholeAppLogic = gameOn
      ? (
        <div className="listOfCards-div">
          <h1 className="title is-2 titles">Seu Deck</h1>
          { eachCardOfGame[cardShow] }
          { endGame ? <h1 className="subtitle is-1 titles hei">Fim de Jogo</h1> : '' }
          <div className="button-control-game">
            <button
              type="button"
              className="button is-warning"
              onClick={ this.nextCard }
              disabled={ disableNext }
            >
              Próxima Carta
            </button>
            <button
              type="button"
              className="button is-warning"
              onClick={ this.reset }
            >
              Resetar Jogo
            </button>
          </div>
        </div>)

      : (
        <section className="whole">
          <div className="addCard">
            <div>
              <h1 className="title is-2 titles">Tryunfo</h1>
            </div>
            <div className="formPoke">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                onInputChange={ this.inputHandler }
                isSaveButtonDisabled={ isFormValidated }
                onSaveButtonClick={ this.saveNewCard }
                hasTrunfo={ hasTrunfo }
              />
            </div>
          </div>
          <div className="fullCard">
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
          <div className="listOfCards-div">
            <h1 className="title is-2 titles">Lista de Cartas</h1>
            <div>
              <div className="filters-div">
                <Input
                  name="filterName"
                  inputType="text"
                  data="name-filter"
                  defStyle="input is-warning is-small"
                  placeholder="Nome da Carta"
                  value={ filterName }
                  onChange={ this.inputHandler }
                  disabled={ filterTrunfo }
                />
                <Select
                  name="filterRare"
                  data="rare-filter"
                  defStyle="select is-fullwidth is-warning is-small"
                  value={ filterRare }
                  onChange={ this.inputHandler }
                  options={ ['todas', 'normal', 'raro', 'muito raro'] }
                  disabled={ filterTrunfo }
                />
                <label htmlFor="trunfoFilter" className="checkbox checkboxer filt">
                  <input
                    name="filterTrunfo"
                    type="checkbox"
                    data-testid="trunfo-filter"
                    id="trunfoFilter"
                    onChange={ this.inputHandler }
                  />
                  <span style={ { color: 'rgb(0, 0, 0, 0)' } }>.....</span>
                  Super Trunfo?
                </label>
              </div>
              <CardList cardList={ cardsToShow } excludeOnClick={ this.excludeOnClick } />
              <div>
                <button
                  type="button"
                  className="button is-warning button-start-game"
                  onClick={ this.startGame }
                >
                  Começar Jogo
                </button>
              </div>
            </div>
          </div>
        </section>
      );

    return (wholeAppLogic);
  }
}

export default App;
