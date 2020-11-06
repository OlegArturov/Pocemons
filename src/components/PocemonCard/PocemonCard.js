import react from 'react'

const PocemonCard = ({data}) => {
    return <>
        <div>{data.name}</div>
        <img src={data.sprites.front_default} alt='pocemon-img'></img>
    </>
}

export default PocemonCard