import React from 'react';
import { Container } from '@material-ui/core';
import pizza from '../../assets/icons/pizza.svg';
import fire from '../../assets/icons/fire_orange.svg';
import '../../scss/App.scss';


function Header() {
    return (
        <header className="App-header">
        <Container fixed>
          <div className="header">
            <div className="header-logo">
              <img src={pizza} className="App-logo" alt="pizza" />
              <h3>SuperPizza</h3>
            </div>
            <div className="header-sub-title">
              <img src={fire} className="App-sub-logo" alt="fire" />
              <p>
                Сервис по борьбе с голодом
            </p>
            </div>
          </div>
        </Container>
        </header>
    );
  }

export default Header;