function Home ({pokemon}) {
    return (
        <>
            {pokemon.map(i => (
                <div className="text-white text-2xl text-center">
                    {i}
                </div>
            ))}
        </>
    )
}

export default Home