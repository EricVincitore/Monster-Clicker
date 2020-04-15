import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MonsterItem extends Component {
    

    render() {
        const {id, img, name} = this.props.monster;
        return (
            <div>
                <img src={img} alt={name}
                 onClick={this.props.markClicked.bind(this, id)}/>
                
            </div>
        )
    }
}

MonsterItem.propTypes = { 
    monster: PropTypes.object.isRequired
}
export default MonsterItem;
//