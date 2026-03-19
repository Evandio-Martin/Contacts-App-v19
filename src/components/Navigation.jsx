import React from 'react';
import Joi from 'joi';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { validateProps } from '../utils/validation';

const navigationPropsSchema = Joi.object({
    logout: Joi.func().required(),
    name: Joi.string().required(),
})

function Navigation({ logout, name }) {
    validateProps(navigationPropsSchema, { logout, name }, 'Navigation');

    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/"><FiHome /></Link></li>
                <li><Link to="/add"><FiPlusCircle /></Link></li>
                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

export default Navigation;