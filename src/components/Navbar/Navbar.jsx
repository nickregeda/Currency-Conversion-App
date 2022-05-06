import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.container}>
            <NavLink to={'/convert'}>Convert</NavLink>
            <NavLink to={'/latest-rates'}>Latest Rates</NavLink>
            <NavLink to={'/historical-rates'}>Historical Rates</NavLink>
        </div>
    )
}

export default Navbar;