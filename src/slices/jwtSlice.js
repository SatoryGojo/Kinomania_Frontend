import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
}

const jwtSlice = createSlice({
    name: 'jwtSlice',
    initialState,
    reducers: {
        
        jwtRefresh: (state) =>{
            axios.post('http://127.0.0.1:8000/filmlist/api/refresh/', { "refresh": localStorage.getItem('refreshToken')})
            .then((response) => {
                console.log(response)

                // localStorage.removeItem('accessToken')
                localStorage.setItem('accessToken', response.data.access)
                // state.accessToken = response.data.access
                
                // localStorage.removeItem('refreshToken')
                localStorage.setItem('refreshToken', response.data.refresh)
                // state.refreshToken = response.data.refresh
            })

            .catch((error) =>{
                console.log(error)
            })
        },

      
         
    }
})


export const {jwtRefresh,} = jwtSlice.actions

export default jwtSlice.reducer