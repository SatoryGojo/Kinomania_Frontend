import HeaderStyle from './Header.module.css'
import { NavLink } from 'react-router-dom'
import AccountCheck from './AccountCheck/AccountCheck'

const Header = () =>{
    return (
        <div>
            <div className={HeaderStyle.header}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/'>Актеры</NavLink>
                <AccountCheck/>
            </div>
        </div>
    )
}

export default Header