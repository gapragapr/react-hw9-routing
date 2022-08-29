import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
    const addClassName = ({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item'

    return (
        <div className="menu">
            <NavLink to='/' className={addClassName}>Главная</NavLink>
            <NavLink to='/drift' className={addClassName}>Дрифт-такси</NavLink>
            <NavLink to='/timeattack' className={addClassName}>Time Attack</NavLink>
            <NavLink to='/forza' className={addClassName}>Forza karting</NavLink>
        </div>
    );
}