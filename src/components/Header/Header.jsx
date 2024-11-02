import HeaderStyle from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () =>{
    return (
        <div>
            <div className={HeaderStyle.header}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/'>Актеры</NavLink>
                <NavLink to='auth/'>Аккаунт</NavLink>
            </div>
        </div>
    )
}

export default Header