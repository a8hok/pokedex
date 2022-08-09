import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPokemon: []
}

const pokeSlice = createSlice({
    name: "allPokemon",
    initialState,
    reducers: {
        addPokemon: (state, payload) => {
            state.allPokemon = payload
        }
    }
})

export const { addPokemon } = pokeSlice.actions;
export const getAllpokemon = (state) => state.allPokemon.allPokemon
export default pokeSlice.reducer;