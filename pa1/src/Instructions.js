import React, { Component } from 'react';
import burger from './burger.svg'

export default class Instructions extends Component {
    render() {
        return(
            <>
            <img alt="burger and fries" src={burger} />
          <p>Click on a burger to view more. </p>
          </>
        )
    }
}