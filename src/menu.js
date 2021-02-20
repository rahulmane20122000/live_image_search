import react from 'react';
import {NavLink} from 'react-router-dom';

const Menu=()=>{
    return(
        <>
        <div className='menu_bar'>
            <NavLink  exact activeClassName="active_class" to='/'>About us</NavLink>
            <NavLink  exact activeClassName="active_class" to='/contact'>contact us</NavLink>
            <NavLink  exact activeClassName="active_class"  to='/search'>search image</NavLink>
            </div>
        </>

    );
}

export default Menu;