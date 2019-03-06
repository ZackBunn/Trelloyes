import React from 'react';
import './List.css';
import Card from './Card'

export default function List(props) {
    return (
        <section class="List">
          <header class="List-header">
            <h2>{props.header}</h2>
          </header>
          <div class="List-cards">
            {props.cards.map((card) =>
            <Card
                key= {card.id}
                title= {card.title}
                content= {card.content} />
            )}
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
    )
}