import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allPokeMon: [],
    loadingStatus: false,
    status: ''
}

export const getPokemonDetails = createAsyncThunk(
    "allPokemon/getData",
    async (arg, {rejectWithValue}) => {
         try{
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon")
            return data
        } catch (error) {
            rejectWithValue(error.response.data)
        }
})

const pokeSlice = createSlice({
    name: "allPokemon",
    initialState,
    reducers: {},
    extraReducers: {
        [getPokemonDetails.fulfilled]: (state, action) => {
            state.loadingStatus = false;
            state.allPokeMon = action.payload.results;
          },
        [getPokemonDetails.rejected]: (state, action) => {
            state.status = 'Sorry! something went wrong';
        },
        [getPokemonDetails.pending]: (state, action) => {
            state.loadingStatus = true;
        },
    }
})

export default pokeSlice.reducer;

export const { addPokeMon } = pokeSlice.actions;
