import {useForm} from 'react-hook-form'
import axios from 'axios'


const RegisterForm = () =>{

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm()


    const registration =  (data) => {

        console.log(data)
        axios.post('http://127.0.0.1:8000/filmlist/api/register/',
            {"username": data.username, "email": data.email, "password1": data.password1, "password2":data.password2})
            
        .then((response) => {
            console.log(response)
        })

        .catch((error) => {
            console.log(error)
        })

    }
    return(
       <div>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(registration)}>

                <label>Логин
                    <input {...register('username', {required: 'Поле обязательно'})}></input>
                </label>
                <div>{errors?.username && <p>{errors?.username?.message || "Error"}</p> }</div>


                <label>Почта
                    <input {...register('email', {required: 'Поле обязательно'})}></input>
                </label>
                <div>{errors?.username && <p>{errors?.username?.message || "Error"}</p> }</div>


                <label>Пароль
                    <input {...register('password1', {required: 'Поле обязательно'})}></input>
                </label>
                <div>{errors?.username && <p>{errors?.username?.message || "Error"}</p> }</div>


                <label>Пароль
                    <input {...register('password2', {required: 'Поле обязательно'})}></input>
                </label>
                <div>{errors?.username && <p>{errors?.username?.message || "Error"}</p> }</div>


                <input type='submit' />
            </form>
        </div> 
    )
    
}

export default RegisterForm