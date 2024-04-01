import React, { Component } from 'react';
import './ScoreCounter.css'

class ScoreCounter extends Component {
    state = {  } 
    render() { 
        return (
            <div class="score-counter">
                <div class="score">75</div>
                <div class="score-text">of 100</div>
            </div>
        );
    }
}
 
export default ScoreCounter;