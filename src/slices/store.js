import { configureStore } from "@reduxjs/toolkit";
import jwtSlice from './jwtSlice'

export default configureStore({
    reducer: {
        jwtSlice: jwtSlice
    }
})