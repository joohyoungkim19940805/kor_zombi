import React from 'react'
import '../../css/Menu.css'
import {devMessage} from './CreateDevMessage'

function menu_set(e){
    alert(e);
}

const Menu = ({menu}) => {


    const MenuRow = (menu,index) => {
        let devMsg = parseInt(menu.menu_code) == 4 ? devMessage : null;
        console.log(devMsg);
        return(
            <div key={index} className="menu">
                <input type="button" className="menu_button" value={menu.menu_nm} menu_idx={menu.menu_idx} 
                onClick={menu_set(menu.menu_idx)}/>
            </div>
        )
    }
    const menuArr = menu.map((e,i)=>MenuRow(e,i));
    return(
        <div className="container">
            <div className="menu_warpper">
                {menuArr}
            </div>
        </div>
    )
}

export default Menu