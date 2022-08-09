function Card({pokemon}) {
    return (
        <>
            {pokemon.map(i => (<div className="text-white text-2xl text-center" key={i.name}>{i.name}</div>))}
        </>
    )
}

export default Card