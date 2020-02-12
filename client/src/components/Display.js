import React, { Component } from "react";

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="player-container">
                {this.props.participants.map(participant => (
                    <div className="player-map">
                        <i class="fas fa-user-circle"></i>
                            <div className="individual-player-div">
                            <p className="player">{participant.name}</p>
                            <p className="country">{participant.country}</p>
                            </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Display;