import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.container}>
            <NavLink to={'/convert'}>Convert</NavLink>
            <NavLink to={'/currency-rates'}>Currency Rates</NavLink>
        </div>
    )
}

export default Navbar;