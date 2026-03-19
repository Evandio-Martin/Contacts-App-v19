import React from 'react';
import Joi from 'joi';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { validateProps } from '../utils/validation';
import { LocaleConsumer } from '../contexts/LocaleContext';

const navigationPropsSchema = Joi.object({
    logout: Joi.func().required(),
    name: Joi.string().required(),
})

function Navigation({ logout, name }) {
    validateProps(navigationPropsSchema, { logout, name }, 'Navigation');

    return(
        <LocaleConsumer>
            {
                ({ locale, toggleLocale }) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id' }</button></li>
                                <li><Link to="/"><FiHome /></Link></li>
                                <li><Link to="/add"><FiPlusCircle /></Link></li>
                                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    )
}

export default Navigation;