import style from './AuthForm.module.css'
import {useForm} from 'react-hook-form'
import {redirect} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const AuthForm = () =>{

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm()




    
    const Pass =  (data) =>{
        
        let email = data.email
        let password = data.password

        axios.post('http://127.0.0.1:8000/filmlist/api/login/', {"email": email, "password": password})

        .then((response) => {
            console.log(response)
            localStorage.setItem('accessToken', response.data.tokens.access)
            localStorage.setItem('refreshToken', response.data.tokens.refresh)
            
        })

        .catch((error) => {
            console.log(error)
        })
        
    }
    
    
    return(
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(Pass)}>

                <label>Email
                    <input {...register('email', { required: 'Поле обязательно'})}/>
                </label>
                <div>{errors?.username && <p>{errors?.username?.message || "Error"}</p> }</div>


                <label>Пароль
                    <input type='password' {...register('password', { required: 'Поле обязательно'})}/>
                </label>
                <div>{errors?.password && <p>{errors?.password?.message || "Error"}</p> }</div>

                <input type='submit' />
            </form>

            <NavLink to='/register/'>Регистрация</NavLink>
        </div>
    )
}

export default AuthForm