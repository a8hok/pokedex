import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios"


function Home({ pokemon, previous, nextpage, page}) {
    // const [pokestats, setpokestats] = useState([])

    // useEffect(() => {
    //     let cancel
    //     axios.get(page, {
    //         cancelToken: new axios.CancelToken(c => (cancel = c))
    //       }).then(res => {
    //         setpokestats(res.data.results.map(i => i.url))
    //       })
    // })

    // const consoling = (pokemon.map(i => (i.url)))
    // console.log(consoling)

    return (
        <>

            <div className="flex items-center justify-evenly my-6">
                {previous && <button className="text-lg uppercase font-bold bg-red-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black" onClick={previous}>prev</button>}
                <button className="text-lg uppercase font-bold bg-green-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black" onClick={nextpage}>next</button>
            </div>

            <div className="pt-8 pb-20 px-10 mx-auto mt-10 mb-10 bg-sky-900 w-11/12 shadow-2xl shadow-black grid grid-cols-4 box-border gap-4">
                {pokemon.map((i) =>
                (
                    <>
                        <div className="bg-orange-600 w-12/12 rounded-xl flex flex-col items-center justify-center gap-4 border-y-cyan-600 border-4 border-x-indigo-500 shadow shadow-cyan-400 transition ease-in-out delay-50 hover:scale-105 px-15 pb-40 hover:bg-orange-500">
                            <div className="text-white text-3xl font-bold pt-5 w-full text-center mb-5 capitalize" key={i.name}>{i.name}</div>
                            
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i.url.split("/").slice(-2,-1)[0]}.svg`} alt="no img found"/>

                            <div className="text-white text-2xl text-center w-full uppercase">stats</div>
                        </div>
                    </>
                ))}
            </div>

        </>
    )
}

export default Home