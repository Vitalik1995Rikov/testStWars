import { useEffect, useState } from "react";
import axios from "axios";

const CharactersList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people?page=1`)
        .then(res => {
            const value = res.data.results;
            setCharacters(value)
        } )
    }, [])

    if (!characters) return <>Нет данных</>

    return (
        <div>123</div>
    )
}

export default CharactersList;