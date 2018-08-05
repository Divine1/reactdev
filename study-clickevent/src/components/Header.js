import React from 'react';
import {Link} from  'react-router-dom';

const Header = ()=>{
    return (
        <div id="header">
            <ul>
                <li><Link to="/" className="" >Home</Link></li>
                <li><Link to="/about/1" className="" >About</Link></li>
                <li><Link to="/careers" className="" >Careers</Link></li>
            </ul>
        </div>
    )
}
export default Header;