import React, { Component } from 'react';
import { skinny, slender, sporty, stocky } from '../assets';


// Styling to Add to Dragon accordingly to properties stored in DB
const propertyMap = {
    scaleColor: {
        black: '#263238', 
        blue: '#0277bd', 
        bronze: '#cd7f32', 
        brown: '#795548', 
        gray: '#9e9e9e', 
        green: '#a5d6a7', 
        gold: '#ffff00', 
        purple: '#9c27b0', 
        red: '#f44336', 
        silver: '#e0e0e0', 
        white: '#cfd8dc', 
        yellow: '#ffeb3b'
    },
    build: {slender, stocky, sporty, skinny},
    size: { small: 120, medium: 160, large: 200, enormous: 400 }
};

class DragonAvatar extends Component {

    get DragonImage() {
        const dragonPropertyMap = {};

        this.props.dragon.traits.forEach(trait => {
            if(trait.traitType !== "personality" && trait.traitType !== "power"){
            const { traitType, traitValue } = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue]
            }
        });

        const {scaleColor, build, size} = dragonPropertyMap

        const sizing = {width: size, height: size};
        return(
            <div className='dragon-avatar-image-wrapper'>
                <div className='dragon-avatar-image-background' style={{backgroundColor: scaleColor, ...sizing}}>
                    <img src={build}  className='dragon-avatar-image' style={{...sizing}}/>
                </div>
            </div>
        );
    }
    render(){
        const { generationId, dragonId, traits } = this.props.dragon;
        const DISPLAY_DRAGON = traits.map(trait => trait.traitValue).join(', ')
        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                {DISPLAY_DRAGON}
                { this.DragonImage }
            </div>
        )
    }
}

export default DragonAvatar;