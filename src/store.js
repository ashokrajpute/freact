import {configureStore} from "@reduxjs/toolkit"
import listSlice from "./slice/listSlice"

export const store=configureStore(
    {
        reducer:{
            list:listSlice
        }
    }
)