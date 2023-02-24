import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    
        return (
          <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Survey/42">Questionnaire</NavLink>
          </nav>
        );
   
}

export default Header;