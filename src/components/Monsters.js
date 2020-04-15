import React, { Component } from 'react';
import MonsterItem from './MonsterItem';
import PropTypes from 'prop-types';
//import './App.css';

class Monsters extends Component {

    Shuffle = (monsters) => {
        monsters.sort(() => Math.random() - 0.5) 
        return monsters;
    };
    
    render () {
        return this.Shuffle(this.props.monsters).map((monster) => (
            
            <div className = "col-sm-4">
            <MonsterItem 
                monster={monster}
                key={monster.id}
                id={monster.id}
                name={monster.name}
                img={monster.img}
                clicked={monster.clicked}
                markClicked = {this.props.markClicked}

            />
            </div>
        ))
    
    };
    
};

Monsters.propTypes = {
    monsters: PropTypes.array.isRequired
}

export default Monsters;