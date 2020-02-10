import React, { Component } from "react";
import axios from "axios";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {players: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            console.log(res);
            this.setState({ players: res.data })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.players.map(player => (
                    <div>
                        <h4>{player.name}</h4>
                        <p>{player.country}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Display;