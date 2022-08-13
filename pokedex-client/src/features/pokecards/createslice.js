import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allPokemon: [],
    loading: false,
}

export const getPokemonDetails = createAsyncThunk(
    "allPokemon/getData",
    async(arg, {rejectWithValue}) => {
         try{
            const{data} = await axios.get("https://pokeapi.co/api/v2/pokemon")
            return data
        } catch (error) {
            rejectWithValue(error.response.data)
        }
})

const pokeSlice = createSlice({
    name: "allPokemon",
    initialState,
    reducers: {
        addPokemon: (state, {payload}) => {
            state.allPokemon += payload
        }
    },
    // extraReducers:() => {},
})

export default pokeSlice;