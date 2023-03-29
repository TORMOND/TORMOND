// import './index.css';
import React, { Component } from 'react'
// import { useState } from 'react';

import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import ThemeToggle from '../Context/ThemeToggle';

// const NavBar = ()=>{
//     return ( 
//         <ThemeContext.Consumer>{(context)=>{
//             const { isLightTheme, light, dark} = context;
//             const theme = isLightTheme ? light : dark ;
        
//             return ( 
//                 <div>
//                     <ThemeToggle />
//                 </div>
//             )
//             }}
//             </ThemeContext.Consumer>
//             )
// }

// export default NavBar;

class NavBar extends Component {
  static contextType = ThemeContext
  render() { 
    const { toggleTheme } = this.context
    console.log(this.context)
    const { isLightTheme, light, dark } =this.context
    const theme = isLightTheme ? light : dark;
    return (
     
      <div className="nav-bar" style={{ background: theme.ui, color: theme.syntax}}>
        
        <ThemeToggle style="display:none" />
        {theme === dark &&
           <button onClick={toggleTheme}>Light Theme</button>
        }
         {theme === light &&
           <button onClick={toggleTheme}>Dark Theme</button>
        }

       
      </div>
            
    );
  }
}
 
export default NavBar;
