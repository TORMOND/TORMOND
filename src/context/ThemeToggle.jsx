import React, {Component} from "react";
import { ThemeContext } from "./ThemeContext";

class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() { 
        const { toggleTheme } = this.context
        return (
            <template>
                <button onClick={toggleTheme}  style="display:none" >Toggle Theme</button>
            </template>
            
        );
    }
}
 
export default ThemeToggle;