import { configureStore } from "@reduxjs/toolkit";
import songs from "./songs";

export const store = configureStore({
    reducer: {
        songs
    }
})