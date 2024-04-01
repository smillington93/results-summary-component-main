import React, { Component } from 'react';
import './ResultContainer.css'
import ScoreCounter from './ScoreCounter';

class ResultContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div class="result-container">
                <div class="text your-result-text">Your Result</div>
                <ScoreCounter></ScoreCounter>
                <div class="text great-text">Great</div>
                <div class="text description-text">Your scored higher than 65% of the people who have taken these tests.</div>
            </div>
        );
    }
}
 
export default ResultContainer;