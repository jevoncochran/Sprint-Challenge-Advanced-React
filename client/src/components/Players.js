import React, { useEffect } from 'react';
import { usePlayer } from "../custom hooks/usePlayer";
import axios from 'axios';

import Display from "./Display";

const Players = () => {
    const [players, setPlayers] = usePlayer([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            // console.log(res);
            setPlayers(res.data);
        })
        .catch(err => console.log(err))
    })

    return (
        <div>
            <h2>Women's World Cup Participants</h2>
            <Display participants={players} />
        </div>
    )
}

export default Players;