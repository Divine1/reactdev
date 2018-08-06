import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
    return (
        <div id="header">
            <ul>
                <li><Link to="/"><div>Home</div></Link></li>
                <li><Link to="/sports"><div>Sports</div></Link></li>
                <li><Link to="/aboutus"><div>Aboutus</div></Link></li>
            </ul>
        </div>
    )
}

export default Header;