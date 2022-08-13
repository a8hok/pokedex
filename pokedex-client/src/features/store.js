import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./pokecards/createslice";
// import { addPokemon } from "./pokecards/createslice";

export const Store = configureStore({
    reducer:{
        allpokemon: pokeSlice.reducer
    }
})