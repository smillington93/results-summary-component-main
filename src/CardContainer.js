import React, { Component } from 'react';
import './CardContainer.css'
import ResultContainer from './ResultContainer';
import SummaryContainer from './SummaryContainer';

class CardContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div class="card-container">
            <div className='split-container'>
                <ResultContainer></ResultContainer>
                </div>
                <div className='split-container'>
                <SummaryContainer></SummaryContainer>
            </div>
            </div>
        );
    }
}
 
export default CardContainer;