import React, { Component } from 'react';
import uniqid from 'uniqid';
import _ from 'lodash';
import './index.css';
import { getCharacters } from '../services/characters_api';

import Card from './commons/card';

class Index extends Component {
    state = { 
        characters: getCharacters(),
        selected_characters: [],
        scored: 0,
     }
    
    verifySelected = (character) => {
        return this.state.selected_characters.some(c => JSON.stringify(character) === JSON.stringify(c));
    }

    handleClick = (character) => {
        if (this.verifySelected(character)) {
            this.setState({selected_characters: []});
            alert('game over');
        } else {
            this.setState({
                selected_characters: [...this.state.selected_characters, character],
                scored: this.state.scored + 1,
            })
        }
        this.setState({characters: _.shuffle(this.state.characters)});
    }

    render() {
        const { characters } = this.state;

        return (
            <div className='container'>
                {characters.map(character => 
                    <Card key={uniqid()}
                        onclick={this.handleClick}
                        item={character}
                    />
                    )}
            </div>
        );
    }
}

export default Index;