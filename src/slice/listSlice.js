import {createSlice} from '@reduxjs/toolkit';
const initialState={
    "movieData":"sed"
}

export const listSlice=createSlice({
    name:"list",
    initialState,
    reducers:{
        handleMoviedata:(state,action)=>{
            state.movieData=action.payload
            
        }
    }
})

export const{handleMoviedata} =listSlice.actions
export default listSlice.reducer