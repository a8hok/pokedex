import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/login/login";
import Signup from './components/signup/signup';
import Home from "./components/home/home";
import axios from "axios";
// import pagenotfound from "./components/pagenotfound/pagenotfound"
// import {useDispatch} from "react-redux"
// import { addPokemon } from "./features/createslice";

function App() {
  const [pokemon, setpokemon] = useState([])
  const [currentpage, setcurrentpage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextpage, setnextpage] = useState()
  const [beforepage, setbeforepage] = useState()
  const [loading, setloading] = useState(true)
  const [pokestats, setpokestats] = useState()
  // const dispatch = useDispatch()

  useEffect(() => {
    setloading(true)
    let cancel
    axios.get(currentpage, {
      cancelToken: new axios.CancelToken(c => (cancel = c))
    }).then(res => {
      setloading(false)
      setnextpage(res.data.next)
      setbeforepage(res.data.previous)
      setpokemon(res.data.results)
      function createpokestats(result){
        result.foreach((poke) => {
          const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
          setpokestats(current => [...current, data])
        })
      }
      createpokestats(res.data.results)
      console.log(pokestats,"pokestat")
    });
    //unmount
    return () => cancel()
  }, [currentpage])

  console.log(pokemon)

  if (loading) return "loading..."

  function nextpageurl() {
    setcurrentpage(nextpage)
  }

  function previouspageurl() {
    setcurrentpage(beforepage)
  }

  // console.log(pokestats)

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
        <Route path="Home/" element={<Home pokemon={pokemon} previous={previouspageurl} nextpage={nextpageurl} page={currentpage}/>} />
        {/* <Route element={<pagenotfound />}/> */}
      </Routes>

    </>
  );
}

export default App;
