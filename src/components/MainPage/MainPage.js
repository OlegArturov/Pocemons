import react, { useEffect, useState } from 'react'
import PocemonCard from '../PocemonCard/PocemonCard'

const MainPage = () => {

    const [data, setData] = useState([])
    //https://pokeapi.co/
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(
            response => response.json()
        )
        .then(
            result => setData(result)
        ) 
    }, [])

    return <>
        <PocemonCard
        data={data}
        />
    </>
}

export default MainPage