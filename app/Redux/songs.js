import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'addSongs',
    initialState: {
        songs: []
    },
    reducers: {
        addSongs: state => {
            [...state.songs, 1]
        },
    }
})

export const { addSongs } = songSlice.actions
export default songSlice.reducer;