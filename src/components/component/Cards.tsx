import React from 'react';
import '../../scss/App.scss';
import { Card as CardType } from '../../assets/scripts/classes';
import Card from '../component/Card';


function Cards(props: any) {
    return (
        <div className="App-cards">
            {props.cards && props.cards.map((card: CardType) => {
                return <Card key={card.id} card={card} pizza={props.pizza} addPizza={props.addPizza} />
            })
            }
        </div>
    );
}

export default Cards;