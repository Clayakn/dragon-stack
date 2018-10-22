import React, { Component } from 'react';

// Components
import DragonAvatar from './DragonAvatar';

const DEFAULT_DRAGON = {
    dragonId: '',
    generationId: '',
    nickname: '',
    birthdate: '',
    traits: []
};

class Dragon extends Component {
    state = {dragon: DEFAULT_DRAGON};

    componentDidMount(){
        this.fetchDragon();
    }

    fetchDragon = () => {
        fetch('http://localhost:4001/dragon/new')
            .then(response => response.json())
            .then(json => this.setState({ dragon: json.dragon }))
            .catch(error => console.error('error', error));
    }

    render(){
        return <DragonAvatar dragon={this.state.dragon}/>
    }
}

export default Dragon;
