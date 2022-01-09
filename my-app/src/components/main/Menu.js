import React from 'react'
import '../../css/Menu.css'
import {devMessage} from './CreateDevMessage'
const Menu = ({menu}) => {

    const MenuRow = (menu,index) => {
        return(
            <div key={index} className="menu">
                <input type="button" className="menu_button" value={menu.menu_nm} menu_idx={menu.menu_idx} onClick={()=>console.log('gameStart')}/>
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