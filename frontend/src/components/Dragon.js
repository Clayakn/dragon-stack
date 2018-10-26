import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// Components
import DragonAvatar from './DragonAvatar';

// Redux 
import { connect } from 'react-redux';
import { fetchDragon } from '../actions/dragon';

class Dragon extends Component {
    render(){
        return (
            <div>
                <Button onClick={this.props.fetchDragon}>New Dragon</Button>
                <DragonAvatar dragon={this.props.dragon}/>
            </div>
        )
    }
}

export default connect(
    ({ dragon }) => ({ dragon }),
    { fetchDragon }
)(Dragon);
