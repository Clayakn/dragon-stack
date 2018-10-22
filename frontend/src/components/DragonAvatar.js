import React, { Component } from 'react';

class DragonAvatar extends Component {
    render(){
        const { generationId, dragonId, traits } = this.props.dragon;
        const DISPLAY_DRAGON = traits.map(trait => trait.traitValue).join(', ')
        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                {DISPLAY_DRAGON}
            </div>
        )
    }
}

export default DragonAvatar;