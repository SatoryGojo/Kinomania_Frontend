import style from './AuthForm.module.css'
import {useForm} from 'react-hook-form'


const AuthForm = () =>{

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm()


    const pass = (data) =>{
        
        console.log(data)
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