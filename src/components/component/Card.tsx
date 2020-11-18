import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import pizzaIcon from '../../assets/icons/pizza.svg';
import { ICard } from '../../assets/scripts/types';

export default function Card(props: any) {
    let card: ICard = props.card;
    let count = 0;
    return (
        <div className="card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={pizzaIcon} className="cards-logo" alt="pizza" />
                        <h3>{card.title}</h3>
                    </div>
                    <div className="flip-card-back">
                        <h2>{card.title}</h2>
                        <p title={card.subtitle}>{card.subtitle}</p>
                        <Fab size="small" color="default" aria-label="add" onClick={() => {
                            props.addPizza(props.pizza.set(card.id, { name: card.title, count: ++count }));
                        }}>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    );
}