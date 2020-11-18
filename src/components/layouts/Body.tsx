import React from 'react';
import { Container } from '@material-ui/core';
import Tabs from '../component/Tab';
import '../../scss/App.scss';


function Body() {
    return (
        <body className="App-body">
        <Container fixed>
            <div className="App-tabs">
            <Tabs />
          </div>
        </Container>
        </body>
    );
  }

export default Body;