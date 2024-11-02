import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken')
}

const jwtSlice = createSlice({
    name: 'jwtSlice',
    initialState,
    reducers: {
        accessVerify: (state) =>{
            axios.post('http://127.0.0.1:8000/filmlist/auth/jwt/verify/', { "token": state.accessToken})
            .then((response) => {
                if(response.status===200){
                    return true
                }
                else{
                    return false
                }
            })
        },

        refreshVerify: (state) =>{
            axios.post('http://127.0.0.1:8000/filmlist/auth/jwt/verify/', { "token": state.refreshToken})
            .then((response) => {
                if(response.status===200){
                    return true
                }
                else{
                    return false
                }
            })
        },

        jwtRefresh: (state) =>{
            axios.post('http://127.0.0.1:8000/filmlist/auth/jwt/refresh/', { "token": state.refreshToken})
            .then((response) => {
                localStorage.setItem('accessToken', response.data.access)
                state.accessToken = response.data.access
            })
        },

        jwtClean: (state) =>{
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            state.accessToken = localStorage.getItem('accessToken')
            state.refreshToken = localStorage.getItem('refreshToken')

        },

         jwtCreate:  (state, action) => {
             axios.post('http://127.0.0.1:8000/filmlist/auth/jwt/create/', { username: action.payload.username, password: action.payload.password})
        .then((response) => {

            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            state.accessToken = localStorage.getItem('accessToken')
            state.refreshToken = localStorage.getItem('refreshToken')
        })

        .catch((error) => {console.log(error)})
            
        },
    }
})


export const {accessVerify, refreshVerify, jwtRefresh, jwtClean, jwtCreate} = jwtSlice.actions

export default jwtSlice.reducer