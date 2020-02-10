import React, { Component } from "react";
import { List, ListItem, ListItemContent } from "react-mdl";

class Display extends Component {
    constructor(props) {
        super(props);
        // this.state = {players: []}
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/api/players')
    //     .then(res => {
    //         console.log(res);
    //         this.setState({ players: res.data })
    //     })
    //     .catch(err => console.log(err))
    // }

    render() {
        return (
            // <List style={{ textAlign: 'left' }}>
            //     {this.props.participants.map(participant => (
            //             <ListItem twoline className="player" style={{ listStyle: 'none' }}>
            //                 <ListItemContent avatar="person" subtitle={participant.country}>{participant.name}</ListItemContent>
            //                 {/* <ListItemContent className="country"><p>{participant.country}</p></ListItemContent> */}
            //             </ListItem>
            //     ))}
            // </List>
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