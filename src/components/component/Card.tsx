import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import pizzaIcon from '../../assets/icons/pizza.svg';
import { ICard, IOrderState } from '../../assets/scripts/types';

export default function Card(props: any) {
    let card: ICard = props.card;
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
                        <FooterCard card={card} pizza={props.pizza} addPizza={props.addPizza} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function FooterCard(props: any) {
    let card = props.card;
    let order = props.pizza.get(card.id);
    const add = (
        <Fab className="add" size="small" color="default" aria-label="add" onClick={() => {
            const order = props.pizza.get(card.id);
            if (order) {
                props.addPizza(new Map<number, IOrderState>(props.pizza.set(card.id, { name: card.title, count: ++order.count })));
            } else {
                props.addPizza(new Map<number, IOrderState>(props.pizza.set(card.id, { name: card.title, count: 1 })));
            }
        }}>
            <AddIcon />
        </Fab>
    )

    if (order && order.count) {
        const edit = (
            <div className="edit-buttons">
                <Fab className="removed" size="small" color="default" aria-label="removed" onClick={() => {
                    const order = props.pizza.get(card.id);
                    if (order && order.count) {
                        props.addPizza(new Map<number, IOrderState>(props.pizza.set(card.id, { name: card.title, count: --order.count })));
                    } else {
                        props.addPizza(new Map<number, IOrderState>(props.pizza.set(card.id, { name: card.title, count: 0 })));
                    }
                }}>
                    <RemoveIcon />
                </Fab>
                {order.count && <h3>{order.count}</h3>}
                {add}
            </div>
        )
        return edit;
    }

    return add;

}

