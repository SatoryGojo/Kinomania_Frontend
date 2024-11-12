import { useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { jwtRefresh } from "../../../slices/jwtSlice"
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const AccountCheck = () =>{
    const [isAuth, setAuth] = useState(false)
    const [userName, setUserName] = useState('')
    
    let dispath = useDispatch()

    useEffect(() =>{

        axios.get('http://127.0.0.1:8000/filmlist/api/user/', {
            headers:{
                'Authorization': `JWT ${localStorage.getItem('accessToken')}`
            }
        })

        .then((response) =>{
            setUserName(response.data.username)
            setAuth(true)
        })

        .catch((error) =>{
            console.log(error)
            if (error.status===401){
                console.log(401)
                dispath(jwtRefresh())
            }

        })

        

    }, [])

    return (
        <div>

            {isAuth? <NavLink to='profile/'>{userName}</NavLink> : <NavLink to='auth/'>Аккаунт</NavLink>}

        </div>
    )
}

export default AccountCheck