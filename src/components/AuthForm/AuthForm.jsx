import style from './AuthForm.module.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { jwtCreate } from '../../slices/jwtSlice' 

const AuthForm = () =>{

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm()


    const dispatch = useDispatch()


    const pass = (data) =>{
        // axios.post('http://127.0.0.1:8000/filmlist/auth/jwt/create/', { username: data.username, password: data.password})
        // .then((response) => {

        //     localStorage.setItem('accessToken', response.data.access)
        //     localStorage.setItem('refreshToken', response.data.refresh)
        // })

        let username = data.username
        let password = data.password

        return dispatch(jwtCreate({username, password}))
    }
    
    
    return(
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(pass)}>

                <label>Логин
                    <input {...register('username', { required: 'Поле обязательно'})}/>
                </label>
                <div>{errors?.username && <p>{errors?.username?.message || "Error"}</p> }</div>


                <label>Пароль
                    <input type='password' {...register('password', { required: 'Поле обязательно'})}/>
                </label>
                <div>{errors?.password && <p>{errors?.password?.message || "Error"}</p> }</div>

                <input type='submit' />
            </form>
        </div>
    )
}

export default AuthForm