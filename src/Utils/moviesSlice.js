import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        TrailerVideo:null,
        TopRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },

    }
})
export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo,addTopRatedMovies}=moviesSlice.actions;