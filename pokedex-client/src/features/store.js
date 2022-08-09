import { configureStore } from "@reduxjs/toolkit";
import { addPokemon } from "./createslice";

export const store = configureStore({
    reducer:addPokemon
})