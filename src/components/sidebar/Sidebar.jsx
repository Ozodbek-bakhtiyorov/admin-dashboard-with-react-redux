import React from 'react';
import logo from '../../assets/images/logo.png'
import { Content } from './Sidebar.Element';
import sidebar__items from '../../assets/JsonData/sidebar_routes.json';
import {Link} from "react-router-dom";
const SidebarItem = props=>{
    const active = props.active ? 'active':'';
    return(
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}
const Sidebar = props => {
    const activeItem = sidebar__items.findIndex(item=>item.route === props.location.pathname);
  return (
    <Content>
      <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo"/>
            </div>
          {
              sidebar__items.map((item,index)=>{
                  return(
                      <Link to={item.route} key={index}>
                         <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                         />
                      </Link>
                  )
              })
          }
      </div>
    </Content>
  );
}

export default Sidebar;
