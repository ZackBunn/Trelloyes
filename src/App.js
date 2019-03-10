import React, { Component } from 'react';
import List from './List';
import './App.css';
import STORE from './STORE'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {
  state = {
    store: STORE
  };

  handleDelete = (cardId) => {
    const {lists, allCards} = this.state.store;

    const newList = list.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });
    delete allCards[cardId];

    this.setState({
      store: {
        lists: newList, allCards
      }
    })
  }

  handleAdd = (listId) => {
    const newCard = newRandomCard()

    const newList = this.state.store.lists.map(list => {
      if (list.id === listId)  {
        list.cardIds.push(newCard.id)
      }
      return list
    })
  
  this.setState ({
    store: {
      lists: newList, allCards: {
        ...this.state.store.allCards, 
        [newCard.id]: newCard
      }
    }
  })  
  }


  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
